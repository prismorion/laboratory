import { Link } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer';
import HeroBanner from '../components/ui/HeroBanner';
import styles from './Home.module.css';

function Home() {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <HeroBanner />

                <section className={styles.aboutSection}>
                    <div className={styles.container}>
                        <div className={styles.aboutGrid}>
                            <div className={styles.aboutContent}>
                                <span className={styles.sectionTag}>О центре</span>
                                <h2 className={styles.sectionTitle}>Испытательный центр ФГБОУ ВО «КубГТУ»</h2>
                                <p className={styles.aboutText}>
                                    Испытательный центр входит в состав ЦКП «Исследовательский центр пищевых
                                    и химических технологий» Кубанского государственного технологического университета.
                                </p>
                                <p className={styles.aboutText}>
                                    Центр зарегистрирован в реестре Россаккредитации как аккредитованная испытательная
                                    лаборатория (аттестат аккредитации RA.RU.21КБ38), уполномочен на проведение
                                    испытаний продукции при оценке соответствия в рамках Таможенного союза.
                                </p>
                                <p className={styles.aboutText}>
                                    В реестре центра более 100 крупнейших предприятий пищевой и перерабатывающей
                                    промышленности. Проводится более 60 видов экспертиз и анализов.
                                </p>
                                <Link to="/about" className={styles.btnPrimary}>
                                    Подробнее о нас
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                        <polyline points="12 5 19 12 12 19"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className={styles.aboutImage}>
                                <img
                                    src="/images/team/collective.jpg"
                                    alt="Коллектив Испытательного центра"
                                    className={styles.aboutPhoto}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;
