import Image, { type StaticImageData } from 'next/image'
import styles from './Card.module.scss'

type CardProps = {
	imageSrc: string | StaticImageData
}

export default function Card({ imageSrc }: CardProps) {
	return (
		<div className={styles.card_container}>
			<div className={styles.card_box}>
				<Image src={imageSrc} alt="" />
			</div>

			<div className={styles.card_info}>
				<h3>Comanda</h3>
				<span className={styles.card_description}>Descrição</span>
				<span className={styles.card_text_information}>Text Information</span>
			</div>
		</div>
	)
}
