'use client'

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from './styles.module.scss'
import arrowLineAboutSvg from '@/assets/orange-arrow-line-about.svg'
import greenLineSvg from '@/assets/green-line-about.svg'
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/utils/loadTransaction";
import Image from "next/image";
import aboutImage from '@/assets/about-image.png'
import blueLineSvg from '@/assets/blue-line.svg'
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";

export default function About() {
    const { lang } = useLanguage()
    const t = getTranslation(lang)

    return (
        <>
            <Header />
            <main>
                <section className={styles.about_container}>
                    <aside className={styles.about_left_container}>
                        <div className={styles.about_title}>
                            <span className={styles.textname_description}>
                                {t.aLittleAboutMe} <b>{t.me}</b>
                                {t.andMy} <b>{t.professionalCareer}.</b>
                            </span>
                            <Image src={blueLineSvg} alt="Blue Line" className={styles.about_title_blue_line} />
                        </div>
                        <span className={styles.about_description}>
                            {t.firstAboutText} <b>{t.positively}</b>
                            {t.secondAboutText} <b>{t.development}</b>
                            {t.thirdAboutText} <b>{t.backend}</b>
                            {t.fourthAboutText}
                        </span>
                        <span className={styles.about_description}>
                            {t.fifthAboutText} <b>{t.latinAmerica}</b>
                            {t.sixthAboutText} <b>{t.stack}</b>
                            {t.sevethAboutText} <b>{t.requestPerDay}</b>
                            {t.lastAboutText}
                        </span>
                    </aside>
                    <aside className={styles.about_right_container}>
                        <Image src={aboutImage} alt="Avatar Image" className={styles.avatar} />
                    </aside>
                </section>
                <span className={styles.separator}>
                    <Image src={arrowLineAboutSvg} alt="Arrow Line" />
                </span>
                <section className={styles.experiences}>
                    <span className={styles.experiences_title}>
                        <h1>{t.myProfessionalExperiences}</h1>
                        <Image
                            src={greenLineSvg}
                            alt="Green Line"
                            className={styles.green_line}
                        />
                    </span>
                    <div className={styles.experiences_cards}>
                        <ExperienceCard
                            company="HST Card Technology"
                            employee="Backend Software Developer"
                            startDate="Jun 2022"
                            endDate={`${t.actually}`}
                            url="https://hst.com.br/pt-br/"
                            description={`${t.hstDescriptionEmployee}`}
                        />
                        <ExperienceCard
                            company="Tinnova Software Solutions"
                            employee="Backend Software Engineer"
                            startDate="Jan 2022"
                            endDate="Jun 2022"
                            url="https://tinnova.com.br/"
                            description={`${t.tinnovaDescriptionEmployee}`}
                        />
                        <ExperienceCard
                            company="B2ML Sistemas LTDA"
                            employee="Jr. Software Developer"
                            startDate="Jun 2020"
                            endDate="Jan 2022"
                            url="https://www.b2ml.com.br/"
                            description={`${t.b2mlDescriptionEmployee}`}
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )

}