import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import './index.css';
import ruI18n from '@/locales/ru.json';

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            ru: {
                translation: ruI18n,
            },
        },
        lng: 'ru', // if you're using a language detector, do not define the lng option
        fallbackLng: 'ru',

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
