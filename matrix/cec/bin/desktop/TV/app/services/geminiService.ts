import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    // This is a placeholder for a robust error handling or logging mechanism.
    // In a real-world app, you might not want to throw an error that crashes the client,
    // but rather disable functionality and show a user-friendly message.
    console.error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const loadingMessages = [
    "Warming up the quantum video synthesizer...",
    "Rendering holographic butterflies...",
    "Consulting with future TV executives...",
    "Optimizing Raku pottery shaders...",
    "Calibrating the temporal flux capacitor...",
    "Buffering data streams from 2042...",
    "Finalizing the broadcast signal...",
];

export const generateVideo = async (
    prompt: string, 
    onProgress: (message: string) => void
): Promise<string> => {
    onProgress(loadingMessages[0]);

    if (!process.env.API_KEY) {
        throw new Error("API Key is not configured. Please set the API_KEY environment variable.");
    }
    
    let operation = await ai.models.generateVideos({
        model: 'veo-2.0-generate-001',
        prompt: prompt,
        config: {
            numberOfVideos: 1
        }
    });

    let messageIndex = 1;
    const interval = setInterval(() => {
        onProgress(loadingMessages[messageIndex % loadingMessages.length]);
        messageIndex++;
    }, 8000);

    try {
        while (!operation.done) {
            await new Promise(resolve => setTimeout(resolve, 10000));
            operation = await ai.operations.getVideosOperation({ operation: operation });
        }

        const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;

        if (!downloadLink) {
            throw new Error("Video generation failed: No download link found.");
        }
        
        const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Failed to download video: ${response.statusText}. Details: ${errorBody}`);
        }
        const videoBlob = await response.blob();
        return URL.createObjectURL(videoBlob);

    } finally {
        clearInterval(interval);
    }
};