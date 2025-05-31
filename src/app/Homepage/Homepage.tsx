'use client'

import Image from 'next/image'
import styles from './Homepage.module.scss'
import blueLineSvg from '@/assets/blue-line.svg'
import waveHandSvg from '@/assets/wave-hand.svg'
import avatar from '@/assets/main-photo.png'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import { useLanguage } from '@/context/LanguageContext'
import { getTranslation } from '@/utils/loadTransaction'

export default function Homepage() {
	const { lang } = useLanguage()
	const t = getTranslation(lang)

	return (
		<main>
			<section className={styles.hero_container}>
				<aside className={styles.left_container}>
					<span className={styles.textname}>
						<span>
							{t.welcome} <b>Rodrigo Gouveia.</b>
						</span>
						<Image
							src={waveHandSvg}
							alt="Emoji Wave Hand"
							className={styles.textname_hand}
						/>
					</span>

					<div className={styles.description}>
						<span className={styles.text_description}>
							Backend Software Developer | {t.enthusiast}
						</span>
						<Image src={blueLineSvg} alt="Blue Line" />
					</div>

					<div className={styles.position_degree}>
						<span className={styles.position}>
							<span>Backend Software Developer {t.in}</span>
							<Link
								href={'https://hst.com.br/pt-br/'}
								className={styles.link}
								target="_blank"
							>
								HST Card Technology
								<MdArrowOutward className={styles.icon} />
							</Link>
						</span>
						<span className={styles.degree}>
							<span>
								{t.graduated} {t.in}
							</span>
							<Link
								href={'https://fepi.br/'}
								className={styles.link}
								target="_blank"
							>
								FEPI
								<MdArrowOutward className={styles.icon} />
							</Link>
						</span>
					</div>
				</aside>
				<aside className={styles.right_container}>
					<div className={styles.dashed_border}>
						{[...Array(7)].map((_, i) => (
							<div
								key={`h-${i}`}
								className={styles.horizontal_line}
								style={{ top: `${((i + 1) / 8) * 100}%` }}
							/>
						))}

						{[...Array(7)].map((_, i) => (
							<div
								key={`v-${i}`}
								className={styles.vertical_line}
								style={{ left: `${((i + 1) / 8) * 100}%` }}
							/>
						))}
					</div>
					<Image src={avatar} alt="Avatar Image" className={styles.avatar} />
				</aside>
			</section>
		</main>
	)
}
