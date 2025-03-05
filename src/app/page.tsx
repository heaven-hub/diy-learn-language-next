'use client'
import { useState, useEffect, useRef, useReducer, useCallback,useMemo } from "react";
import ClassComponent from '@/components/classComponennt'
export default () => {
    const [speechValue, setSpeechValue] = useState('');

    const textToSpeechBtn = ()=>{
        const utterance = new SpeechSynthesisUtterance(speechValue);
        utterance.lang = "en-US"; // 設置英語
        speechSynthesis.speak(utterance);
    }
    const testData = async ()=>{
        const res = await fetch('/api/users');
        const data = await res.json();
        console.log('data',data)
    }
    return (
        <div>
            <input type="text" value={speechValue} onChange={(event)=>setSpeechValue(event.target.value)} />
            <button onClick={textToSpeechBtn}>说话</button>
            <ClassComponent favcol="yellow"></ClassComponent>


            <button onClick={testData}>request Data</button>
        </div>
    );
};


