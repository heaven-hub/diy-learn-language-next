"use client"
// import { useTranslation } from 'next-i18next';
import { useParams } from 'next/navigation';
export default function Page() {
    // const { t } = useTranslation()
    const params = useParams();
    return (
        <div>
            Analysis
            <h1>用戶 ID：{params.wordId}</h1>
        </div>
    )
}
