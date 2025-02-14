import React, { useEffect, useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
interface PropType {
    onFinish: () => void;
    close: () => void;
}
export default function AnalyzeSampleTexts({ onFinish, close }: PropType) {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {

        timeoutRef.current = setTimeout(() => {
            onFinish();
        }, 1000);
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4 p-4">
                <h2 className="flex items-center gap-2">
                    <FaArrowLeft className="text-gray-400" />
                    <span className="font-bold text-lg">Paste Sample Text</span>
                </h2>
                <button onClick={close} className="bg-gray-200 w-7 h-7 rounded-full flex justify-center items-center text-gray-500"><MdClose /></button>
            </div>
            <div className="flex flex-grow justify-center items-center">
                <div className="flex flex-col items-center">
                    <img src="/create-agent/sparkles.png" alt="Analyze" className="mb-8" />
                    <h1 className="text-2xl font-bold mb-2">Analyzing...</h1>
                    <p className="nextgpt__text-muted">Crafting your perfect voice</p>
                </div>
            </div>
        </div>
    );
};
