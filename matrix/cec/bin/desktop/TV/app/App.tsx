import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PromptInput } from './components/PromptInput';
import { LoadingIndicator } from './components/LoadingIndicator';
import { VideoPlayer } from './components/VideoPlayer';
import { generateVideo } from './services/geminiService';

const App: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('A raku pottery butterfly emerging from a futuristic TV screen, intricate details, cinematic lighting.');
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [loadingMessage, setLoadingMessage] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = useCallback(async () => {
        if (!prompt.trim()) {
            setError('Please enter a prompt.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setVideoUrl(null);

        try {
            const url = await generateVideo(prompt, setLoadingMessage);
            setVideoUrl(url);
        } catch (err) {
            console.error(err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred during video generation.');
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white font-sans flex flex-col items-center p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-8">
                <Header />
                <div className="w-full bg-black bg-opacity-30 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700">
                    <PromptInput 
                        prompt={prompt}
                        setPrompt={setPrompt}
                        onSubmit={handleGenerate}
                        isLoading={isLoading}
                    />
                    {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
                </div>

                {isLoading && <LoadingIndicator message={loadingMessage} />}

                <VideoPlayer videoUrl={videoUrl} />
            </div>
             <footer className="text-center text-gray-500 text-sm mt-auto py-4">
                <p>Generated with Gemini API. Video generation may take several minutes.</p>
            </footer>
        </div>
    );
};

export default App;