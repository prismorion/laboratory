import NavBar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer';
import TeamCard from '../components/ui/TeamCard';
import styles from './About.module.css';

const leadership = [
    {
        name: 'Бутина Елена Александровна',
        position: 'Директор испытательного центра',
        degree: 'Доктор техн. наук, профессор',
        photo: null,
        description: '',
    },
    {
        name: 'Воронцова Оксана Сергеевна',
        position: 'Заместитель директора, менеджер по качеству',
        degree: 'Канд. техн. наук, доцент',
        photo: null,
        description: '',
    },
];

const labHeads = [
    {
        name: 'Герасименко Евгений Олегович',
        position: 'Заведующий лабораторией контроля качества и безопасности',
        degree: 'Доктор техн. наук, профессор',
        photo: '/images/team/MC_04702.JPG',
        description: 'Лаборатория контроля качества и безопасности, каб. 217',
    },
    {
        name: 'Заведующий(-ая)',
        position: 'Заведующий(-ая) микробиологической лабораторией',
        degree: '',
        photo: null,
        description: 'Микробиологическая лаборатория, каб. 314',
    },
    {
        name: 'Заведующий(-ая)',
        position: 'Заведующий(-ая) лабораторией контроля качества алкогольной продукции',
        degree: '',
        photo: null,
        description: 'Лаборатория контроля качества алкогольной продукции, каб. 608',
    },
];

const labs = [
    {
        title: 'Лаборатория контроля качества и безопасности',
        description: 'Проведение физико-химических и органолептических исследований пищевой продукции, сырья и ингредиентов.',
        address: 'ул. Московская, каб. 217',
        phone: '(861) 253-67-60, доб. 4-50',
    },
    {
        title: 'Микробиологическая лаборатория',
        description: 'Микробиологические исследования продукции на соответствие требованиям безопасности.',
        address: 'ул. Московская, каб. 314',
        phone: '(861) 255-15-98, доб. 2-15',
    },
    {
        title: 'Лаборатория контроля качества алкогольной продукции',
        description: 'Испытания алкогольной и слабоалкогольной продукции, идентификация и экспертиза.',
        address: 'ул. Московская, каб. 608',
        phone: '(861) 255-10-45, доб. 3-61',
    },
];

function About() {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <section className={styles.pageHeader}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>О нас</h1>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.aboutBlock}>
                            <div className={styles.aboutText}>
                                <h2 className={styles.blockTitle}>Испытательный центр</h2>
                                <p>
                                    Испытательный центр входит в состав ЦКП «Исследовательский центр пищевых
                                    и химических технологий» Кубанского государственного технологического университета
                                    (КубГТУ).
                                </p>
                                <p>
                                    Центр зарегистрирован в реестре Россаккредитации как аккредитованная испытательная
                                    лаборатория и уполномочен на проведение испытаний продукции при оценке
                                    соответствия в рамках Таможенного союза.
                                </p>
                                <p>
                                    В реестре центра более 100 крупнейших предприятий пищевой и перерабатывающей
                                    промышленности. Проводится более 60 видов экспертиз и анализов, включая
                                    производственную оценку, идентификацию, оценку качества и безопасности продукции.
                                </p>
                            </div>
                            <div className={styles.aboutImageBlock}>
                                <img
                                    src="/images/team/collective.jpg"
                                    alt="Коллектив ИЦ"
                                    className={styles.aboutImage}
                                />
                                <span className={styles.imageCaption}>Коллектив Испытательного центра</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.section} style={{ backgroundColor: '#ffffff' }}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>Основные направления</span>
                            <h2 className={styles.blockTitle}>Направления деятельности</h2>
                        </div>
                        <div className={styles.activitiesList}>
                            <div className={styles.activityItem}>
                                <div className={styles.activityIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
                                        <rect x="9" y="3" width="6" height="4" rx="2"/>
                                        <line x1="9" y1="12" x2="15" y2="12"/>
                                        <line x1="9" y1="16" x2="15" y2="16"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Испытания пищевой продукции</h3>
                                    <p>Широкий ассортимент пищевого сырья, продуктов питания, пищевых ингредиентов и добавок</p>
                                </div>
                            </div>
                            <div className={styles.activityItem}>
                                <div className={styles.activityIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Алкогольная и парфюмерно-косметическая продукция</h3>
                                    <p>Контроль качества, идентификация и экспертиза алкогольной и косметической продукции</p>
                                </div>
                            </div>
                            <div className={styles.activityItem}>
                                <div className={styles.activityIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <line x1="12" y1="8" x2="12" y2="12"/>
                                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Оценка соответствия</h3>
                                    <p>Производственная оценка, идентификация, оценка качества и безопасности продукции</p>
                                </div>
                            </div>
                            <div className={styles.activityItem}>
                                <div className={styles.activityIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Научные исследования</h3>
                                    <p>Разработка специализированного сырья и продуктов питания, тонкий органический синтез веществ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>Команда</span>
                            <h2 className={styles.blockTitle}>Структура</h2>
                        </div>
                        <div className={styles.teamGrid}>
                            {leadership.map((person, index) => (
                                <TeamCard key={index} {...person} />
                            ))}
                        </div>

                        {labHeads.map((person, index) => {
                            const lab = labs[index];

                            return (
                                <div key={lab.title} className={styles.labStructure}>
                                    <TeamCard {...person} className={styles.labHeadCard} />
                                    <div className={styles.labInfoCard}>
                                        <span className={styles.sectionTag}>Лаборатория</span>
                                        <h3 className={styles.labInfoTitle}>{lab.title}</h3>
                                        <p className={styles.labInfoDesc}>{lab.description}</p>
                                        <div className={styles.labInfoList}>
                                            <span>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                                    <circle cx="12" cy="10" r="3"/>
                                                </svg>
                                                {lab.address}
                                            </span>
                                            <span>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                                                </svg>
                                                {lab.phone}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default About;
