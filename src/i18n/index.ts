import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zhTW from './lang/zh-TW.json'
import enUS from './lang/en-US.json'
const resources = {
    'en-US': {
        translation: enUS
    },
    'zh-TW': {
        translation: zhTW
    }
}
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en-US', // 預設語言
        fallbackLng: 'en-US',
        interpolation: { escapeValue: false },
    });

export default i18n;