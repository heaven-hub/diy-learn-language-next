import { useTranslation } from 'next-i18next';
export default function InitBlock() {
    const { t } = useTranslation()
    return (
        <div className='absolute top-0 left-0 w-full h-full bg-[#333]/10 z-10 rounded-lg backdrop-blur-md text-lg flex justify-center items-center'>{t('init_page_banner.title')}</div>
    );
};