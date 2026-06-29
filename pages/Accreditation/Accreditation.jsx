import NavBar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer';
import styles from './Accreditation.module.css';

function Accreditation() {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <section className={styles.pageHeader}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>Аккредитация</h1>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.accreditBanner}>
                            <div className={styles.accreditIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    <polyline points="9 12 11 14 15 10" stroke="#10b981" strokeWidth="2"/>
                                </svg>
                            </div>
                            <div className={styles.accreditInfo}>
                                <h2>Аттестат аккредитации RA.RU.21КБ38</h2>
                                <p>
                                    Испытательный центр ФГБОУ ВО «КубГТУ» аккредитован в национальной системе
                                    аккредитации в качестве испытательной лаборатории. Уникальный номер записи
                                    в реестре аккредитованных лиц RA.RU.21КБ38.
                                </p>
                                <p>
                                    Состоит в реестре испытательных лабораторий, уполномоченных осуществлять
                                    оценку продукции в рамках Таможенного союза.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.section} style={{ backgroundColor: '#ffffff' }}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>Документ</span>
                            <h2 className={styles.sectionTitle}>Аттестат аккредитации</h2>
                            <p className={styles.sectionSubtitle}>
                                Скан-копия аттестата аккредитации испытательного центра
                            </p>
                        </div>
                        <div className={styles.attestatWrapper}>
                            <a
                                href="/images/accreditation/attestat-page-1.png"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.attestatLink}
                            >
                                <img
                                    src="/images/accreditation/attestat-page-1.png"
                                    alt="Аттестат аккредитации RA.RU.21КБ38"
                                    className={styles.attestatImage}
                                />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Accreditation;
