"use client";

import { useState,useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import BrowseCard from '@/components/browse-card';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import MemoryCard from '@/components/memory-card';
import { useWordsStore } from '@/store/words';
import InitBlock from '@/components/init-block';

export default function Page() {
    const { t } = useTranslation()
    const [isBrowseMode,setIsBrowseMode] = useState(false)
    const [isReady,setIsReady] = useState(false)
    const [currentIndex,setCurrentIndex] = useState(0)
    const { words, fetchWords } = useWordsStore()
    const nextWordFun = ()=>{
        if(currentIndex>=words.length-1) return;
        setCurrentIndex((pre)=>{
            return pre + 1
        })
    }
    const prevWordFun = ()=>{
        if(currentIndex <= 0) return;
        setCurrentIndex((pre)=>{
            return pre - 1
        })
    }
    useEffect(() => {
        const handleInit = ()=>{
            setIsReady(true)
        }
        window.addEventListener('click',handleInit)
        window.addEventListener('keydown',handleInit)
        fetchWords({})
        return ()=>{
            window.removeEventListener('click',handleInit);
            window.removeEventListener('keydown',handleInit);
        }
    }, [])
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h1>{t('collation.page.header')}</h1>
                    <p>{t('collation.page.header_desc')}</p>
                </div>
                <div className='flex items-center'>
                    <Label htmlFor="memory-mode">{t('collation.page.header.mode_type.memory')}</Label>
                    <Switch className='mx-[10px]' id="memory-mode" checked={isBrowseMode} onCheckedChange={setIsBrowseMode}/>
                    <Label htmlFor="browse-mode">{t('collation.page.header.mode_type.browse')}</Label>
                </div>
            </div>
            <div className='relative mt-[15px] h-full overflow-auto'>
                { (!isBrowseMode && !isReady) && <InitBlock/> }
                {
                    isBrowseMode ?
                    <div className='flex flex-wrap'>{ words.map(word => <BrowseCard {...word} key={word._id}></BrowseCard>)}</div>
                    :
                    <div className='flex justify-center items-center h-[50vh]'>
                        {isReady &&
                        <MemoryCard
                            {...words[currentIndex]}
                            notNext={currentIndex>=(words.length-1)}
                            notPrev={currentIndex === 0}
                            onNextFun={nextWordFun}
                            onPrevFun={prevWordFun}
                            >
                        </MemoryCard>}
                    </div>
                }
            </div>
        </div>
    )
}
