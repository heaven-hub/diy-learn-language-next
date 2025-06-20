'use client'

import { useEffect, useState } from "react";
import { getWords } from '@/request/words'
import DInput from "@/components/DInput/input";
import { useTranslation } from 'next-i18next';
export default function Page() {
    const [original, setOriginal] = useState('')
    const [translation,setTranslation] = useState('')
    const { t } = useTranslation()
    const handleSubmit = ()=>{
        console.log('translation',translation)
    }
    useEffect(()=>{
        getWords({page:2,limit:15})
    },[])
    return (
        <div>
            <h1>單詞語句收集</h1>
            <DInput label={t('original')} value={original} onChange={setOriginal}></DInput>
            <DInput label={t('translation')} value={translation} onChange={setTranslation} onEnterUp={handleSubmit}></DInput>
        </div>
    );
}
