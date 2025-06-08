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
						<Link href="/">{t.home}</Link>
					</li>
					<li>
						<Link href="/about">{t.about}</Link>
					</li>
					<li>
						<Link href="/resume.pdf" target='_blank'>{t.resume}</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
