import Image, { type StaticImageData } from 'next/image'
import styles from './Card.module.scss'
import Link from 'next/link'

type CardProps = {
	projectName: string
	projectDescription: string
	projectTextInformation: string
	link: string
	imageSrc: string | StaticImageData
}

export default function Card({
	projectName,
	projectDescription,
	projectTextInformation,
	link,
	imageSrc,
}: CardProps) {
	return (
		<div className={styles.card_container}>
			<Link
				href={link}
				className={styles.card_box}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					src={imageSrc}
					alt={`Image from ${projectName}`}
					className={styles.project_image}
				/>
			</Link>

			<div className={styles.card_info}>
				<h3>{projectName}</h3>
				<div className={styles.card_text_container}>
					<span className={styles.card_description}>{projectDescription}</span>
					<span className={styles.card_text_information}>
						{projectTextInformation}
					</span>
				</div>
			</div>
		</div>
	)
}
