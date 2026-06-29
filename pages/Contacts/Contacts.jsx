import NavBar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer';
import styles from './Contacts.module.css';

const contacts = [
    {
        title: 'Директор испытательного центра',
        name: 'Бутина Елена Александровна',
        degree: 'Доктор техн. наук, профессор',
        address: 'ул. Московская, каб. 217',
        phone: '(861) 253-67-60, доб. 4-50',
        email: 'ktgr11@mail.ru',
    },
    {
        title: 'Заместитель директора, менеджер по качеству',
        name: 'Воронцова Оксана Сергеевна',
        degree: 'Канд. техн. наук, доцент',
        address: 'ул. Московская, каб. 217',
        phone: '(861) 253-67-60, доб. 2-73',
        email: 'ktgr11@mail.ru',
    },
    {
        title: 'Лаборатория контроля качества и безопасности',
        name: 'Герасименко Евгений Олегович',
        degree: 'Доктор техн. наук, профессор',
        address: 'ул. Московская, каб. 217',
        phone: '(861) 253-67-60, доб. 4-50',
        email: 'ktgr11@mail.ru',
    },
    {
        title: 'Микробиологическая лаборатория',
        name: '',
        degree: '',
        address: 'ул. Московская, каб. 314',
        phone: '(861) 255-15-98, доб. 2-15',
        email: '',
    },
    {
        title: 'Лаборатория контроля качества алкогольной продукции',
        name: '',
        degree: '',
        address: 'ул. Московская, каб. 608',
        phone: '(861) 255-10-45, доб. 3-61',
        email: '',
    },
];

function Contacts() {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <section className={styles.pageHeader}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>Контакты</h1>
                        <p className={styles.pageSubtitle}>
                            Свяжитесь с нами для получения консультации или оформления заказа
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.mainContactsGrid}>
                            <div className={styles.mainContactCard}>
                                <div className={styles.contactIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                </div>
                                <h3>Адрес</h3>
                                <p>г. Краснодар, ул. Московская</p>
                                <span className={styles.contactDetail}>Кубанский государственный технологический университет</span>
                            </div>
                            <div className={styles.mainContactCard}>
                                <div className={styles.contactIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                </div>
                                <h3>Телефон</h3>
                                <p><a href="tel:+78612536760">(861) 253-67-60</a></p>
                                <span className={styles.contactDetail}>Пн–Пт: 8:00–16:45</span>
                            </div>
                            <div className={styles.mainContactCard}>
                                <div className={styles.contactIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                        <polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                </div>
                                <h3>Электронная почта</h3>
                                <p><a href="mailto:ktgr11@mail.ru">ktgr11@mail.ru</a></p>
                                <span className={styles.contactDetail}>Ответим в течение рабочего дня</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.section} style={{ backgroundColor: '#ffffff', paddingTop: '32px' }}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>Сотрудники</span>
                            <h2 className={styles.sectionTitle}>Контакты подразделений</h2>
                        </div>
                        <div className={styles.contactsList}>
                            {contacts.map((contact, index) => (
                                <div key={index} className={styles.contactRow}>
                                    <div className={styles.contactRowLeft}>
                                        <h3 className={styles.contactRowTitle}>{contact.title}</h3>
                                        {contact.name && (
                                            <span className={styles.contactRowName}>{contact.name}</span>
                                        )}
                                        {contact.degree && (
                                            <span className={styles.contactRowDegree}>{contact.degree}</span>
                                        )}
                                    </div>
                                    <div className={styles.contactRowRight}>
                                        <span className={styles.contactRowItem}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                                <circle cx="12" cy="10" r="3"/>
                                            </svg>
                                            {contact.address}
                                        </span>
                                        <span className={styles.contactRowItem}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                                            </svg>
                                            {contact.phone}
                                        </span>
                                        {contact.email && (
                                            <span className={styles.contactRowItem}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                                    <polyline points="22,6 12,13 2,6"/>
                                                </svg>
                                                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.mapSection}>
                    <div className={styles.container}>
                        <div className={styles.mapWrapper}>
                            <a
                                href="https://yandex.ru/maps/35/krasnodar/?utm_medium=mapframe&utm_source=maps"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.mapLabelTop}
                            >
                                Краснодар
                            </a>
                            <a
                                href="https://yandex.ru/maps/35/krasnodar/house/moskovskaya_ulitsa_2g/Z0AYdgdiSkcCQFpvfXx1dnprYg==/?ll=39.000542%2C45.047999&utm_medium=mapframe&utm_source=maps&z=15.03"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.mapLabelBottom}
                            >
                                Московская улица, 2Г — Яндекс Карты
                            </a>
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?ll=39.002635%2C45.047724&z=17&pt=39.002635,45.047724,pm2rdm"
                                width="560"
                                height="400"
                                frameBorder="0"
                                allowFullScreen={true}
                                title="Карта проезда"
                                className={styles.mapIframe}
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Contacts;
