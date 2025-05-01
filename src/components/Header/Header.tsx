import Link from 'next/link';
import styles from './Header.module.scss';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageToggle from '../LanguageToggle/LanguageToggle';

export default function Header() {
    return (
        <header className={styles.header}>
            <span className={styles.logo}>Rodrigo Gouveia</span>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <ThemeToggle />
                    </li>
                    <li>
                        <LanguageToggle />
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