import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './locales/es.json';
import de from './locales/de.json';
import en from './locales/en.json';
import fr from './locales/fr.json';
import pt from './locales/pt-BR.json';
import pl from './locales/pl.json';
import it from './locales/it.json';
import ru from './locales/ru.json';
import jp from './locales/jp.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            es: { translation: es},
            de: { translation: de },
            en: { translation: en },
            pt: { translation: pt },
            it: { translation: it },
            fr: { translation: fr },
            pl: { translation: pl },
            jp: { translation: jp },
            ru: { translation: ru }
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: true,
        },
    });

export default i18n;