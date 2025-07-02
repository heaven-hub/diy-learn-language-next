"use client";
import { useState,useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BrowseCard from '@/components/browse-card';

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import MemoryCard from '@/components/memory-card';
import { useWordsStore } from '@/store/words'

interface wordType {
    id: string;
    original: string;
    translation: string;
    wordType: "words" | "phrase" | "sentence" | "article";
}
export default function Page() {
    const { t } = useTranslation()
    const tabList = ["all", "words", "phrase", "sentence", "article"];
    const [currentTab,setCurrentTab] = useState('all');
    // const [words, setWords] = useState<wordType[]>([
    //     { id: '1', original: "There must be quite a story to go with it,”Lady Tremaine said, dangling[插图] the slipper off one finger. “Will you tell me?” Ella shook her head. “Then I will tell you a story. There once was a beautiful young girl, who married for love. She had two loving daughters. All was well. But then her husband, the light of her life,died. The next time, she married for the sake of her children. But this man,too, was taken from her.” She smiled at Ella, but it was a cold smile that didn't reach her eyes", translation: "句子", wordType: 'words' },
    //     { id: '2', original: "sentence2", translation: "句子", wordType: 'words' },
    //     { id: '3', original: "sentence3", translation: "句子", wordType: 'words' },
    //     { id: '4', original: "sentence4", translation: "句子", wordType: 'words' },
    //     { id: '5', original: "sentence5", translation: "句子", wordType: 'words' },
    //     { id: '6', original: "sentence6", translation: "句子", wordType: 'words' },
    //     { id: '7', original: "sentence7", translation: "句子", wordType: 'words' },
    // ])
    const [isBrowseMode,setIsBrowseMode] = useState(false)
    const [currentIndex,setCurrentIndex] = useState(0)
    const nextWordFun = ()=>{
        if(currentIndex>=words.length-1) return;
        setCurrentIndex((pre)=>{
            return ++pre
        })
    }
    const { words, fetchWords, loading, error } = useWordsStore()

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
                <TabsContent value={currentTab} className='mt-[15px] h-[100%]'>
                    {
                        isBrowseMode ?
                        <div className='flex'>{ words.map(word => <BrowseCard {...word} key={word.id}></BrowseCard>)}</div>
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
