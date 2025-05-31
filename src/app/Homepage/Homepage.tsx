'use client'

import Image from 'next/image'
import styles from './Homepage.module.scss'
import blueLineSvg from '@/assets/blue-line.svg'
import waveHandSvg from '@/assets/wave-hand.svg'
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
				<div className={styles.left_container}>
					<span className={styles.textname}>
						{t.welcome} <b>Rodrigo Gouveia.</b>
						<Image src={waveHandSvg} alt="" className={styles.textname_hand} />
					</span>

					<div className={styles.description}>
						<span className={styles.text_description}>
							Backend Software Developer | {t.enthusiast}
						</span>
						<Image src={blueLineSvg} alt="" />
					</div>

					<div className={styles.position_degree}>
						<span className={styles.position}>
							Backend Software Developer {t.in}
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
							{t.graduated} {t.in}
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
				</div>
				<div className={styles.right_container}></div>
			</section>
		</main>
	)
}
