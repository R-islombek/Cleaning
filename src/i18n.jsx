import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import languageDetector from 'i18next-browser-languagedetector';
import english from '../public/locales/en.json';
import uzbek from '../public/locales/uz.json';

const language = localStorage.getItem('i18nextLng') || 'uz'

i18n
.use(Backend)

.use(languageDetector)

.use(initReactI18next)

.init({
    fallbackLng :'en',
    lng: language,
    debug:true,
    resources:{
        uz:{translation: uzbek},
        en:{translation: english},
    }
})

export default i18n;