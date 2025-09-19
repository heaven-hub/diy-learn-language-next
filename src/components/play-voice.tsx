import { useEffect, useState } from "react";
import { speakWithVoice, stopVoice } from '@/utils/tts'
import SVGIcon from "@/icons/svg-icon";
interface PropType {
    voiceValue:string;
    className?:string;
    needInitVoice?:boolean;
}
export default function PlayVoice({voiceValue,needInitVoice = true,className = ''}:PropType) {
    const [isplayVoice, setPlayVoice] = useState(false)
    const controlVoicePlayer = async () => {
        if (isplayVoice) {
            stopVoice()
            return
        }
        await speakWithVoice(voiceValue, () => setPlayVoice(true), () => setPlayVoice(false))
    }
    useEffect(()=>{
        if(needInitVoice){
            controlVoicePlayer()
        }
    },[voiceValue])
    return (
        <div className={`cursor-pointer ${className}`} onClick={controlVoicePlayer}>
            {isplayVoice ? <SVGIcon name="stop-voice" width={25}></SVGIcon> : <SVGIcon name="voice-player" width={25}></SVGIcon>}
        </div>
    );
};