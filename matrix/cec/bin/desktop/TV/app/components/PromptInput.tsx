import React from 'react';

interface PromptInputProps {
    prompt: string;
    setPrompt: (prompt: string) => void;
    onSubmit: () => void;
    isLoading: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
    return (
        <div className="flex flex-col space-y-4">
            <label htmlFor="prompt-input" className="text-lg font-medium text-gray-200">
                Enter a futuristic TV show concept
            </label>
            <textarea
                id="prompt-input"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., A neon hologram of a cat driving at top speed"
                disabled={isLoading}
                rows={3}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 resize-none disabled:opacity-50"
            />
            <button
                onClick={onSubmit}
                disabled={isLoading}
                className="w-full sm:w-auto sm:self-end px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
                {isLoading ? 'Generating...' : 'Generate Video'}
            </button>
        </div>
    );
};