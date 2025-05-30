'use client'

import { useEffect, useState } from 'react'
import { TbMoonFilled } from 'react-icons/tb'
import { BiSolidSun } from 'react-icons/bi'
import styles from './ToggleTheme.module.scss'

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		const storedTheme = sessionStorage.getItem('theme')

		if (storedTheme) {
			setIsDark(storedTheme === 'dark')
		} else {
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches
			setIsDark(prefersDark)
		}
	}, [])

	useEffect(() => {
		const html = document.documentElement
		if (isDark) {
			html.classList.add('dark')
			sessionStorage.setItem('theme', 'dark')
		} else {
			html.classList.remove('dark')
			sessionStorage.setItem('theme', 'light')
		}
	}, [isDark])

	return (
		<button
			onClick={() => setIsDark(!isDark)}
			className={styles.toggle_theme_button}
		>
			{isDark ? (
				<TbMoonFilled size={18} className={styles.icon} />
			) : (
				<BiSolidSun size={18} className={styles.icon} />
			)}
		</button>
	)
}
