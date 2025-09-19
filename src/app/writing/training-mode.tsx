import { useState, useEffect, useRef } from "react";

export default function TrainingMode() {
    const [currentWord, setCurrentWord] = useState({original:'cancel', translation:'取消'});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isError, setIsError] = useState(false);
    const clickSoundRef = useRef<HTMLAudioElement | null>(null);
    const correctSoundRef = useRef<HTMLAudioElement | null>(null);
    const errorSoundRef = useRef<HTMLAudioElement | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        clickSoundRef.current = new Audio('/sounds/click2.wav')
        correctSoundRef.current = new Audio('/sounds/correct.wav')
        errorSoundRef.current = new Audio('/sounds/click-error.wav')
    }, [])
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase();
            if (key === currentWord.original[currentIndex]) {
                if (clickSoundRef.current) {
                    clickSoundRef.current.currentTime = 0;
                    clickSoundRef.current.play().catch(() => { });
                }
                setCurrentIndex((prev) => prev + 1);
            } else {
                if(errorSoundRef.current){
                    errorSoundRef.current.currentTime = 0;
                    errorSoundRef.current.play().catch(() => { });
                }
                setIsError(true);
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
                timeoutRef.current = setTimeout(() => {
                    setIsError(false);
                    setCurrentIndex(0);
                    timeoutRef.current = null;
                }, 300);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentWord.original,currentIndex]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center text-3xl space-x-2">
                <span></span>
                <div>
                    {currentWord.original.split("").map((letter, index) => (
                        <span
                            key={index}
                            className={`px-1 transition-colors duration-200 ${index < currentIndex
                                ? "text-green-500"
                                : index === currentIndex && isError
                                    ? "text-red-500 font-bold"
                                    : "text-gray-700"
                                }`}
                        >
                            {letter}
                        </span>
                    ))}
                </div>
                <div className="my-[10px]">{currentWord.translation}</div>
            </div>
        </div>
    );
}
