"use client";

import { useState,useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BrowseCard from '@/components/browse-card';

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import MemoryCard from '@/components/memory-card';
import { useWordsStore } from '@/store/words'

export default function Page() {
    const { t } = useTranslation()
    const tabList = ["all", "words", "phrase", "sentence", "article"];
    const [currentTab,setCurrentTab] = useState('all');
    const [isBrowseMode,setIsBrowseMode] = useState(false)
    const [currentIndex,setCurrentIndex] = useState(0)
    const nextWordFun = ()=>{
        if(currentIndex>=words.length-1) return;
        setCurrentIndex((pre)=>{
            return ++pre
        })
    }
    const { words, fetchWords } = useWordsStore()

    useEffect(() => {
        fetchWords()
    }, [fetchWords])
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h3>{t('collation.page.header')}</h3>
                    <p>{t('collation.page.header_desc')}</p>
                </div>
                {isBrowseMode}
                <div className='flex items-center'>
                    <Label htmlFor="memory-mode">{t('collation.page.header.mode_type.memory')}</Label>
                    <Switch className='mx-[10px]' id="memory-mode" checked={isBrowseMode} onCheckedChange={setIsBrowseMode}/>
                    <Label htmlFor="browse-mode">{t('collation.page.header.mode_type.browse')}</Label>
                </div>
            </div>
            <Tabs defaultValue={currentTab} className="w-[100%] pt-[20px]">
                <TabsList>
                    {
                        tabList.map(tab => {
                            return <TabsTrigger value={tab} key={tab} onClick={()=>setCurrentTab(tab)}>{t(tab)}</TabsTrigger>
                        })
                    }
                </TabsList>
                <TabsContent value={currentTab} className='mt-[15px] h-[100%] overflow-auto'>
                    {
                        isBrowseMode ?
                        <div className='flex flex-wrap'>{ words.map(word => <BrowseCard {...word} key={word._id}></BrowseCard>)}</div>
                        :
                        <div className='flex justify-center items-center h-[50vh]'>
                            <MemoryCard {...words[currentIndex]} notNext={currentIndex>=(words.length-1)} onNextFun={nextWordFun}></MemoryCard>
                        </div>
                    }
                </TabsContent>
            </Tabs>
        </div>
    )
}
