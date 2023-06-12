import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import english from '../locale/en.json'
import portuguese from '../locale/pt.json'
import spanish from '../locale/es.json'

const resources = {
    en: {
        translation: english
    },
    pt: {
        translation: portuguese
    },
    es: {
        translation: spanish
    }
}

i18n.use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('language') || 'en',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n