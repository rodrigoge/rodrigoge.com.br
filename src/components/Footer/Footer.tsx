'use client'

import Link from 'next/link'
import styles from './Footer.module.scss'
import { MdArrowOutward } from 'react-icons/md'
import Image from 'next/image'
import arrowLine from '@/assets/orange-arrow-line.svg'
import line from '@/assets/orange-line.svg'
import { useLanguage } from '@/context/LanguageContext'
import { getTranslation } from '@/utils/loadTransaction'

export default function Footer() {
	const { lang } = useLanguage()
	const t = getTranslation(lang)

	return (
		<footer className={styles.footer_container}>
			<div className={styles.footer_title_container}>
				<Image src={arrowLine} alt='Arrow line' />
				<span className={styles.footer_title}>{t.footerTitle}!</span>
				<Image src={line} alt='Arrow line' />
			</div>

			<div className={styles.copyright_links}>
				<div className={styles.copyright}>
					<span>rgestevao@gmail.com</span>
					<span>
						© 2025 Rodrigo Gouveia Estevão. {t.allRightReserved}.
					</span>
				</div>
				<div className={styles.links}>
					<Link href={'mailto:rgestevao@gmail.com'} target='_blank'>
						<span>E-mail</span>
						<MdArrowOutward className={styles.icon} />
					</Link>
					<Link href={'https://github.com/rodrigoge'} target='_blank'>
						<span>GitHub</span>
						<MdArrowOutward className={styles.icon} />
					</Link>
					<Link href={'https://www.linkedin.com/in/rgestevao/'} target='_blank'>
						<span>LinkedIn</span>
						<MdArrowOutward className={styles.icon} />
					</Link>
					<Link href={'https://www.instagram.com/rodrigoge_/'} target='_blank'>
						<span>Instagram</span>
						<MdArrowOutward className={styles.icon} />
					</Link>
				</div>
			</div>
		</footer>
	)
}
