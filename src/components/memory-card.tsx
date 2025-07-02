"use client";
import SVGIcon from "@/icons/svg-icon";
import { speakWithVoice, stopVoice } from '@/utils/tts'
import { useEffect, useState } from "react";
interface PropType {
    original: string;
    translation: string;
    onNextFun: Function;
    notNext: boolean;
}
export default function MemoryCard(modelValue: PropType) {
    const [isShowTrans, setShowTrans] = useState(false)
    const [isplayVoice, setPlayVoice] = useState(speechSynthesis.speaking)
    const nextWord = () => {
        setShowTrans(false)
        modelValue.onNextFun()
    }
    const controlVoicePlayer = () => {
        if (isplayVoice) {
            stopVoice()
            return
        }
        speakWithVoice(modelValue.original, () => setPlayVoice(true), () => setPlayVoice(false))
    }
    useEffect(() => {
        return () => {
            stopVoice()
        };
    }, []);
    return (
        <div className="flex relative flex-col justify-between bg-[#C7EEB7] min-w-[30%] max-w-[80%] min-h-[80%] max-h-[100%] overflow-auto text-center group w-fit shadow-lg rounded-md p-[10px] pt-[25px]">
            <div className="absolute right-[10px] top-[10px] cursor-pointer" onClick={controlVoicePlayer}>
                {isplayVoice ? <SVGIcon name="stop-voice" width={25}></SVGIcon> : <SVGIcon name="voice-player" width={25}></SVGIcon>}
            </div>
            <div className="text-[18px]">
                {modelValue.original}
            </div>
            <div className={`${isShowTrans ? 'visible' : 'invisible'}`}>
                {modelValue.translation}
            </div>
            <div className="flex justify-between items-center">
                <span className="cursor-pointer" onClick={() => setShowTrans(true)}><SVGIcon name="not-pass" width={50}></SVGIcon></span>
                <span className={`${modelValue.notNext ? 'cursor-not-allowed opacity-[0.3]' : 'cursor-pointer'}`} onClick={nextWord}><SVGIcon name="next" color="#000" width={50}></SVGIcon></span>
            </div>
        </div>
    )
}
