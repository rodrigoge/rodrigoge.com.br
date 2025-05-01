'use client'

import { LanguageEnum } from "@/enums/LanguageEnum";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiGlobeHemisphereWest } from "react-icons/pi";
import styles from "./LanguageToggle.module.scss";

export default function LanguageToggle() {
    const {language, changeLanguage} = useLanguage();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const languages = Object.values(LanguageEnum);

    const handleToggle = (selectedLanguage: LanguageEnum) => {
        changeLanguage(selectedLanguage)
        setIsOpen((prev) => !prev);
    }

    const selected = languages.find((lang) => lang === language);

    return (
        <div className={styles.language_container}>
            <div>
                <PiGlobeHemisphereWest />
                <span>{selected}</span>
                <MdOutlineKeyboardArrowDown />
            </div>
            
            {isOpen && (
                <ul>
                    {languages.map((lang) => (
                        <li key={lang} onClick={() => handleToggle(lang)}>
                            <span>{lang}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}