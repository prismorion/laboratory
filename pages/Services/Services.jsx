import NavBar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer';
import styles from './Services.module.css';

const capabilities = [
    {
        title: 'Физико-химические исследования',
        description: 'Определение состава, качественных показателей и физико-химических характеристик продукции.',
    },
    {
        title: 'Микробиологические исследования',
        description: 'Оценка микробиологической безопасности пищевой и косметической продукции.',
    },
    {
        title: 'Органолептическая оценка',
        description: 'Определение органолептических показателей качества продукции.',
    },
    {
        title: 'Идентификация продукции',
        description: 'Установление соответствия продукции заявленному наименованию и составу.',
    },
    {
        title: 'Экспертиза качества',
        description: 'Комплексная экспертная оценка качества и безопасности продукции.',
    },
    {
        title: 'Сертификационные испытания',
        description: 'Проведение испытаний для целей подтверждения соответствия (сертификации).',
    },
    {
        title: 'Установление сроков годности растительного масла',
        description: 'Экспертиза растительного масла на соответствие требованиям нормативных документов и ТР ТС с выдачей экспертного заключения.',
    },
];

const analysisMethods = [
    'Хроматографические',
    'Спектральные',
    'Элементные',
    'Кондуктометрические',
    'ЯМР',
    'и другие',
];

function Services() {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <section className={styles.pageHeader}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>Услуги</h1>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.priceBlock}>
                            <div className={styles.priceInfo}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                    <polyline points="14 2 14 8 20 8"/>
                                    <line x1="16" y1="13" x2="8" y2="13"/>
                                    <line x1="16" y1="17" x2="8" y2="17"/>
                                    <polyline points="10 9 9 9 8 9"/>
                                </svg>
                                <div>
                                    <h3>Прайс-лист на услуги</h3>
                                    <p>
                                        Полный перечень определяемых показателей, методов испытаний и стоимости услуг
                                    </p>
                                    <p className={styles.priceNotice}>
                                        Не является публичной офертой, стоимость уточняйте по телефону или по почте.
                                    </p>
                                </div>
                            </div>
                            <a
                                href="/docs/price.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.priceBtn}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                    <polyline points="7 10 12 15 17 10"/>
                                    <line x1="12" y1="15" x2="12" y2="3"/>
                                </svg>
                                Скачать прайс-лист (PDF)
                            </a>
                        </div>
                    </div>
                </section>

                <section className={styles.section} style={{ paddingTop: 0 }}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>Компетенции</span>
                            <h2 className={styles.sectionTitle}>Виды проводимых работ</h2>
                        </div>
                        <div className={styles.capabilitiesGrid}>
                            {capabilities.map((cap, index) => (
                                <div key={index} className={styles.capCard}>
                                    <div className={styles.capNumber}>{String(index + 1).padStart(2, '0')}</div>
                                    <h3 className={styles.capTitle}>{cap.title}</h3>
                                    <p className={styles.capDesc}>{cap.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.equipmentSection}>
                    <div className={styles.container}>
                        <div className={styles.equipmentBlock}>
                            <div className={styles.equipmentContent}>
                                <span className={styles.sectionTag}>Оборудование</span>
                                <h2 className={styles.equipmentTitle}>Современная аналитическая база</h2>
                                <p>
                                    Испытательный центр оснащен{' '}
                                    <a
                                        href="https://fct.kubstu.ru/equipment/scientific"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        современным аналитическим оборудованием
                                    </a>
                                    , позволяющим на высоком уровне решать задачи по оценке соответствия и проводить
                                    экспертные исследования, реализуя следующие методы анализа:
                                </p>
                            </div>
                            <div className={styles.methodsList}>
                                {analysisMethods.map((method) => (
                                    <span key={method} className={styles.methodBadge}>{method}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <div className={styles.ctaBlock}>
                            <h2>Нужны лабораторные испытания?</h2>
                            <p>Свяжитесь с нами для уточнения стоимости и сроков проведения испытаний</p>
                            <div className={styles.ctaContacts}>
                                <a href="tel:+78612536760" className={styles.ctaBtn}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    (861) 253-67-60
                                </a>
                                <a href="mailto:ktgr11@mail.ru" className={styles.ctaBtnOutline}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                        <polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                    ktgr11@mail.ru
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Services;
