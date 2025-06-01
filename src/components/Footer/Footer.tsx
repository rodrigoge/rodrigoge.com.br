import Link from 'next/link'
import styles from './Footer.module.scss'
import { MdArrowOutward } from 'react-icons/md'

export default function Footer() {
	return (
		<footer className={styles.footer_container}>
			<span>Vamos nos conectar!</span>

			<div>
				<div>
					<span>rgestevao@gmail.com</span>
					<span>
						© 2025 Rodrigo Gouveia Estevão. Todos os direitos reservados.
					</span>
				</div>
				<div>
					<Link href={''}>
						<span>E-mail</span>
						<MdArrowOutward className={styles.icon} />
					</Link>
					<Link href={''}>
						<span>GitHub</span>
						<MdArrowOutward className={styles.icon} />
					</Link>
					<Link href={''}>
						<span>LinkedIn</span>
						<MdArrowOutward className={styles.icon} />
					</Link>
					<Link href={''}>
						<span>Instagram</span>
						<MdArrowOutward className={styles.icon} />
					</Link>
				</div>
			</div>
		</footer>
	)
}
