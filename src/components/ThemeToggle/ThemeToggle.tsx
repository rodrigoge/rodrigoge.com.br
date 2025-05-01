'use client';

import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.scss';
import { AiOutlineMoon } from "react-icons/ai";
import { FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;  
        if (currentTheme) {
            setTheme(currentTheme);
            document.documentElement.setAttribute('data-theme', currentTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const newTheme = prefersDark ? 'dark' : 'light';
            setTheme(newTheme);
            document.documentElement.setAttribute('data-theme', newTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button className={styles.toggle_button} onClick={toggleTheme}>
            <span className={styles.toggle}>
                {
                    theme === 'dark' ? 
                    <FiSun 
                        size={18}
                        color='var(--text-color)'
                    />
                    : 
                    <AiOutlineMoon 
                        size={18}
                        color='var(--text-color)'
                    />
                }
            </span>
        </button>
    )
}