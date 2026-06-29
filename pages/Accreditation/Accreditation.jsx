import NavBar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer';
import styles from './Accreditation.module.css';

const documents = [
    {
        title: 'Аттестат аккредитации',
        number: 'RA.RU.21КБ38',
        description: 'Аттестат аккредитации испытательной лаборатории, выданный Федеральной службой по аккредитации (Россаккредитация).',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
        ),
    },
    {
        title: 'Область аккредитации',
        number: '',
        description: 'Включает испытания широкого ассортимента пищевого сырья, продуктов питания, пищевых ингредиентов, алкогольной и парфюмерно-косметической продукции, кормовых добавок.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
        ),
    },
    {
        title: 'Оценка соответствия',
        number: 'Таможенный союз',
        description: 'Испытательный центр уполномочен на проведение испытаний продукции при оценке соответствия в рамках Таможенного союза.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="16 12 12 8 8 12"/>
                <line x1="12" y1="16" x2="12" y2="8"/>
            </svg>
        ),
    },
];

function Accreditation() {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <section className={styles.pageHeader}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>Аккредитация</h1>
                        <p className={styles.pageSubtitle}>
                            Сведения об аккредитации испытательного центра
                        </p>
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
                                    Испытательный центр ФГБОУ ВО «КубГТУ» аккредитован Федеральной службой по аккредитации
                                    (Россаккредитация) и внесён в национальный реестр аккредитованных лиц.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.section} style={{ paddingTop: 0 }}>
                    <div className={styles.container}>
                        <div className={styles.docsGrid}>
                            {documents.map((doc, index) => (
                                <div key={index} className={styles.docCard}>
                                    <div className={styles.docIcon}>{doc.icon}</div>
                                    <h3 className={styles.docTitle}>{doc.title}</h3>
                                    {doc.number && (
                                        <span className={styles.docNumber}>{doc.number}</span>
                                    )}
                                    <p className={styles.docDesc}>{doc.description}</p>
                                </div>
                            ))}
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
