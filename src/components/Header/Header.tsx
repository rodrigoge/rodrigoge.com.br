'use client'

import Link from 'next/link'
import styles from './Header.module.scss'
import ToggleTheme from '../ToggleTheme/ToggleTheme'
import ToggleLanguage from '../ToggleLanguage/ToggleLanguage'
import { useLanguage } from '@/context/LanguageContext'
import { getTranslation } from '@/utils/loadTransaction'

export default function Header() {
	const { lang } = useLanguage()
	const t = getTranslation(lang)

	return (
		<header className={styles.header_container}>
			<Link href="/" className={styles.logo}>
				Rodrigo Gouveia Estevão
			</Link>
			<nav className={styles.navbar_container}>
				<ul>
					<li>
						<ToggleTheme />
					</li>
					<li>
						<ToggleLanguage />
					</li>
					<li>
						<a href="/">{t.home}</a>
					</li>
					<li>
						<a href="/about">{t.about}</a>
					</li>
					<li>
						<a href="/resume.pdf" target='_blank'>{t.resume}</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
