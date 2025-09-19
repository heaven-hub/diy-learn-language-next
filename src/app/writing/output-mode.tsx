import { useEffect, useState, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { addArticles } from '@/request/articles';
import { useTranslation } from 'next-i18next';
export default function OutputMode() {
    const { t } = useTranslation()
    const [textValue, setTextValue] = useState('');
    const textRef = useRef(textValue);
    const saveArticleBtn = () => {
        addArticles({ text: textRef.current })
            .then(res => {
            }).catch(() => {

            })
    }
    const textAreaChange = (value:string)=>{
        setTextValue(value);
        textRef.current = value;
    }
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // MacOS: metaKey (Command)，Windows/Linux: ctrlKey
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
                e.preventDefault();
                saveArticleBtn()
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);
    return (
        <div>
            <Textarea className="mt-[15px]" value={textValue} rows={6} onChange={(e) => {textAreaChange(e.target.value)}} placeholder={t('common.placeholder')} />
            <div className="flex justify-end mt-[15px]">
                <span onClick={saveArticleBtn} className="py-[5px] px-[7px] text-[18px] text-blue-500 border border-solid rounded-lg cursor-pointer">{t('common.save')}</span>
            </div>
        </div>
    );
};