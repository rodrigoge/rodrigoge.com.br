import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <span>Rodrigo Gouveia</span>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <span>Theme</span>
                    </li>
                    <li>
                        <span>Language</span>
                    </li>
                    <li>
                        <Link href={''}>
                            <span>
                                Works
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={''}>
                            <span>
                                About
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={''}>
                            <span>
                                Resume
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}