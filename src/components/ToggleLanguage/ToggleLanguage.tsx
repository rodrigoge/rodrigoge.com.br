'use client'

import Image from 'next/image'
import styles from './ToggleLanguage.module.scss'
import brFlag from '@/assets/br-flag.svg'
import usaFlag from '@/assets/usa-flag.svg'
import { useLanguage } from '@/context/LanguageContext'

export default function ToggleLanguage() {
	const { lang, setLang } = useLanguage()

	const toggleLanguage = () => {
		setLang(lang === 'pt' ? 'en' : 'pt')
	}

	return (
		<button
			aria-label='Change language'
			onClick={toggleLanguage}
			className={styles.language_toggle_button}
		>
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
