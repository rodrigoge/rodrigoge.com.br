import Link from 'next/link'
import styles from './Header.module.scss'
import ToggleTheme from '../ToggleTheme/ToggleTheme'
import ToggleLanguage from '../ToggleLanguage/ToggleLanguage'

export default function Header() {
	return (
		<header className={styles.header_container}>
			<Link href="" className={styles.logo}>
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
						<a href="">Projetos</a>
					</li>
					<li>
						<a href="">Sobre Mim</a>
					</li>
					<li>
						<a href="">Currículo</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
