'use client'

import Image from 'next/image'
import styles from './Homepage.module.scss'
import blueLineSvg from '@/assets/blue-line.svg'
import greenLineSvg from '@/assets/green-line.svg'
import waveHandSvg from '@/assets/wave-hand.svg'
import arrowLineSvg from '@/assets/arrow-line.svg'
import comandaImage from '@/assets/comanda-image.png'
import patasFelizesImage from '@/assets/patas-felizes-image.png'
import globiImage from '@/assets/globi-image.png'
import refoodImage from '@/assets/refood-image.png'
import tarefeiImage from '@/assets/tarefei-image.png'
import conversoImage from '@/assets/converso-image.png'
import avatar from '@/assets/main-photo.png'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import { useLanguage } from '@/context/LanguageContext'
import { getTranslation } from '@/utils/loadTransaction'
import Card from '@/components/Card/Card'

export default function Homepage() {
	const { lang } = useLanguage()
	const t = getTranslation(lang)

	return (
		<main className={styles.main_container}>
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
							<span>
								{t.employed} {t.in}
							</span>
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
			<span className={styles.separator}>
				<Image src={arrowLineSvg} alt="Arrow Line" />
			</span>
			<section className={styles.projects}>
				<span className={styles.project_title_section}>
					<h1>{t.projectTitleSection}</h1>
					<Image
						src={greenLineSvg}
						alt="Green Line"
						className={styles.green_line}
					/>
				</span>
				<div className={styles.project_cards}>
					<Card
						projectName={'Comanda'}
						projectDescription={`${t.fullstackApplication}, ${t.webApplication}`}
						projectTextInformation={t.projectComandaTextInformation}
						link={'https://comanda-web.vercel.app/'}
						imageSrc={comandaImage}
					/>
					<Card
						projectName={'Patas Felizes'}
						projectDescription={`${t.fullstackApplication}, ${t.webApplication}`}
						projectTextInformation={t.projectPatasFelizesTextInformation}
						link={'https://github.com/rodrigoge/patas-felizes'}
						imageSrc={patasFelizesImage}
					/>
				</div>
				<div className={styles.project_cards}>
					<Card
						projectName={'Globi'}
						projectDescription={`${t.fullstackApplication}, ${t.mobileApplication}`}
						projectTextInformation={t.projectGlobiTextInformation}
						link={'https://github.com/rodrigoge/globi.app'}
						imageSrc={globiImage}
					/>
					<Card
						projectName={'ReFood'}
						projectDescription={`${t.uiDesign}, ${t.webApplication}`}
						projectTextInformation={t.projectReFoodTextInformation}
						link={
							'https://www.figma.com/design/HFHywpTt0v1tv6MjNfAqog/ReFood?m=auto&t=288HYOhIH6jDF1DQ-1'
						}
						imageSrc={refoodImage}
					/>
				</div>
				<div className={styles.project_cards}>
					<Card
						projectName={'Tarefei'}
						projectDescription={`${t.uiDesign}, ${t.mobileApplication}`}
						projectTextInformation={t.projectTarefeiTextInformation}
						link={
							'https://www.figma.com/design/MZ0XpZ59Ij5iME3oqzW2ha/Tarefei?m=auto&t=288HYOhIH6jDF1DQ-1'
						}
						imageSrc={tarefeiImage}
					/>
					<Card
						projectName={'Converso'}
						projectDescription={`${t.uiDesign}, ${t.mobileApplication}`}
						projectTextInformation={t.projectConversoTextInformation}
						link={
							'https://www.figma.com/design/KZs3ZINl7fG4MLyLfcso2m/Converso?m=auto&t=288HYOhIH6jDF1DQ-1'
						}
						imageSrc={conversoImage}
					/>
				</div>
			</section>
		</main>
	)
}
