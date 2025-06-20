"use client"
import { useTranslation } from 'next-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export default function Page() {
    const { t } = useTranslation()
    const tabList = ["words","phrase","sentence","article"]
    return (
        <div>
            <h3>{t('collation.page.header')}</h3>
            <p>{t('collation.page.header_desc')}</p>
            <Tabs defaultValue="words" className="w-[400px]">
                <TabsList>
                    {
                        tabList.map(tab=>{
                            return <TabsTrigger value={tab} key={tab}>{t(tab)}</TabsTrigger>
                        })
                    }
                </TabsList>
                {
                    tabList.map(tab=>{
                        return (<TabsContent value={tab} key={tab}>
                                    dddd+{tab}
                                </TabsContent>)
                    })
                }
            </Tabs>
        </div>
    )
}
