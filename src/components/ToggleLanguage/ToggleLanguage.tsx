'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './ToggleLanguage.module.scss'
import brFlag from '@/assets/br-flag.svg'
import usaFlag from '@/assets/usa-flag.svg'

export default function ToggleLanguage() {
	const [lang, setLang] = useState<'pt' | 'en'>('pt')

	useEffect(() => {
		const savedLang = sessionStorage.getItem('lang')
		if (savedLang === 'pt' || savedLang === 'en') {
			setLang(savedLang)
		} else {
			const browserLang = navigator.language.startsWith('pt') ? 'pt' : 'en'
			setLang(browserLang)
		}
	}, [])

	useEffect(() => {
		sessionStorage.setItem('lang', lang)
	}, [lang])

	const toggleLanguage = () => {
		setLang((prev) => (prev === 'pt' ? 'en' : 'pt'))
	}

	return (
		<button onClick={toggleLanguage} className={styles.language_toggle_button}>
			<Image
				src={lang === 'pt' ? brFlag : usaFlag}
				alt={lang === 'pt' ? 'PT' : 'EN'}
				width={20}
				height={20}
				className={styles.flag_icon}
			/>
			<span className={styles.text_country}>{lang.toUpperCase()}</span>
		</button>
	)
}
