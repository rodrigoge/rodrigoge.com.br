'use client'

import { LanguageEnum } from "@/enums/LanguageEnum";
import { createContext, useState, useEffect } from "react";

export interface LanguageContextType {
    language: LanguageEnum;
    changeLanguage: (lang: LanguageEnum) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [language, setLanguage] = useState<LanguageEnum>(LanguageEnum.English);

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language') as LanguageEnum | null;
        if (storedLanguage) {
            setLanguage(storedLanguage);
        } else {
            const browserLanguage = navigator.language.startsWith('pt') ? LanguageEnum.Portuguese : LanguageEnum.English;
            setLanguage(browserLanguage);
        }
    }, []);

    const changeLanguage = (lang: LanguageEnum) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
