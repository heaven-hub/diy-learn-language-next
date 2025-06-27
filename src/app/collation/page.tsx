"use client"
import { useTranslation } from 'next-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WordCard from '@/components/word-card';
import { useState } from 'react';
interface wordType {
    id:string;
    original:string;
    translation:string;
    wordType:"words"|"phrase"|"sentence"|"article";
}
export default function Page() {
    const { t } = useTranslation()
    const tabList = ["all","words","phrase","sentence","article"]
    const [words,setWords] = useState<wordType[]>([{id:'1', original:"sentence", translation:"句子",wordType:'words' }])
    return (
        <div>
            <h3>{t('collation.page.header')}</h3>
            <p>{t('collation.page.header_desc')}</p>
            <Tabs defaultValue="words" className="w-[400px] mt-[20px]">
                <TabsList>
                    {
                        tabList.map(tab=>{
                            return <TabsTrigger value={tab} key={tab}>{t(tab)}</TabsTrigger>
                        })
                    }
                </TabsList>
                {
                    tabList.map(tab=>{
                        return (<TabsContent value={tab} key={tab} className='flex mt-[0]'>
                                    {words.map(word=><WordCard {...word} key={word.id}></WordCard>)}
                                </TabsContent>)
                    })
                }
            </Tabs>
        </div>
    )
}
