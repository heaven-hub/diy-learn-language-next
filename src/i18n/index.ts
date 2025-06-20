// src/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// 静态引入语言包
import zhTW from './zh-TW.json'
import enUS from './en-US.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            'zh-TW': {
                translation: zhTW,
            },
            'en-US': {
                translation: enUS,
            },
        },
        lng: 'zh-TW',               // 默认语言
        fallbackLng: 'en-US',
        supportedLngs: ['zh-TW','en-US'],
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,       // 关闭 suspense 更适配 SSR
        },
    })

export default i18n
