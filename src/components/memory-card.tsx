"use client";
import SVGIcon from "@/icons/svg-icon";
import { useState } from "react";
import PlayVoice from "./play-voice";
interface PropType {
    original: string;
    translation: string;
    onNextFun: Function;
    notNext: boolean;
    onPrevFun: Function;
    notPrev: boolean;
}
export default function MemoryCard(modelValue: PropType) {
    const [isview, setIsview] = useState(false)
    const [isShowTrans, setShowTrans] = useState(false)
    const nextWord = () => {
        setShowTrans(false)
        modelValue.onNextFun()
    }
    const prevWord = () => {
        setShowTrans(false)
        modelValue.onPrevFun()
    }
    const handleViewBtn = ()=>{
        setIsview((state)=>!state)
        setShowTrans((state)=>!state)
    }
    return (
        <div className="flex flex-col justify-between bg-[#C7EEB7] min-w-[30%] max-w-[80%] min-h-[80%] max-h-[100%] overflow-auto text-center group w-fit shadow-lg rounded-md p-[10px]">
            <div className="flex justify-end">
                <span className="mr-[15px] cursor-pointer" onClick={handleViewBtn}>
                    { isview ? <SVGIcon width={20} name="viewIcon"/> : <SVGIcon width={20} name="noViewIcon"/> }
                </span>
                { modelValue.original && <PlayVoice voiceValue={modelValue.original} /> }
            </div>
            <div className="text-[18px]">
                {modelValue.original}
            </div>
            <div className={`${isShowTrans ? 'visible' : 'invisible'} mt-[15px]`}>
                {modelValue.translation}
            </div>
            <div className="flex justify-between items-center mt-[15px]">
                <span className={`${modelValue.notPrev ? 'cursor-not-allowed opacity-[0.3]' : 'cursor-pointer'} transform rotate-180`} onClick={prevWord}><SVGIcon name="next" color="#000" width={50}/></span>
                <span className={`${modelValue.notNext ? 'cursor-not-allowed opacity-[0.3]' : 'cursor-pointer'}`} onClick={nextWord}><SVGIcon name="next" color="#000" width={50}/></span>
            </div>
        </div>
    )
}
