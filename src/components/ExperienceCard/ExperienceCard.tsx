import Link from 'next/link';
import styles from './ExperienceCard.module.scss';

type ExperienceCardProps = {
    company: string
    employee: string
    startDate: string
    endDate: string
    url: string
    description: string
}

export default function ExperienceCard({
    company,
    employee,
    startDate,
    endDate,
    url,
    description
}: ExperienceCardProps) {
    return (
        <div className={styles.experience_container}>
            <span className={styles.experience_title}>
                <Link href={url} target='_blank'>{company} </Link>
                - {employee}, {startDate} - {endDate}
            </span>
            <span className={styles.experience_description}>
                {description}
            </span>
        </div>
    )
}