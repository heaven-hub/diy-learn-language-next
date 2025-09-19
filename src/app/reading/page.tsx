'use client';
import SVGIcon from '@/icons/svg-icon';
import { useTranslation } from 'next-i18next';
export default function Page() {
    const { t } = useTranslation();
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1>{t('wirte_practice.header')}</h1>
                    <p>{t('wirte_practice.header_desc')}</p>
                </div>
                <div className='flex items-center'>
                    <span>
                        <SVGIcon
                            className="dark:invert self-center"
                            name="addFile"
                            width={30}
                            height={30}
                        />
                    </span>
                    <span>
                        <SVGIcon
                            className="dark:invert self-center"
                            name="addFolder"
                            width={30}
                            height={30}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}
