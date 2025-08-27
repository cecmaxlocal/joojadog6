import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 py-2">
                TV Future
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mt-2 tracking-wide">
                Roku & Raku Butterfly
            </p>
        </header>
    );
};