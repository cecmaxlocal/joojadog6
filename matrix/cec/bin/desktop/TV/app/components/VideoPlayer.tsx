import React from 'react';

interface VideoPlayerProps {
    videoUrl: string | null;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
    return (
        <div className="w-full flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700 aspect-video min-h-[200px]">
            {videoUrl ? (
                <video src={videoUrl} controls autoPlay loop className="w-full h-full rounded-2xl" />
            ) : (
                <div className="text-center text-gray-400 p-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-4 text-lg">Your generated video will appear here.</p>
                </div>
            )}
        </div>
    );
};