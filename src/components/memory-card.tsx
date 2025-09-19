"use client";
import SVGIcon from "@/icons/svg-icon";
import { useState } from "react";
import PlayVoice from "./play-voice";
interface PropType {
    original: string;
    translation: string;
    onNextFun: Function;
    notNext: boolean;
}
export default function MemoryCard(modelValue: PropType) {
    const [isShowTrans, setShowTrans] = useState(false)
    const nextWord = () => {
        setShowTrans(false)
        modelValue.onNextFun()
    }
    return (
        <div className="flex relative flex-col justify-between bg-[#C7EEB7] min-w-[30%] max-w-[80%] min-h-[80%] max-h-[100%] overflow-auto text-center group w-fit shadow-lg rounded-md p-[10px] pt-[25px]">
            { modelValue.original && <PlayVoice voiceValue={modelValue.original} className="absolute right-[10px] top-[10px]" /> }
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
