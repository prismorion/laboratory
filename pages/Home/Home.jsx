import { Link } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer';
import HeroBanner from '../components/ui/HeroBanner';
import styles from './Home.module.css';

const productCategories = [
    {
        icon: '🧪',
        title: 'Масложировая продукция',
        items: [
            'Масла растительные',
            'Жиры животные и растительные',
            'Маргарины и спреды',
            'Майонезы и соусы',
        ],
    },
    {
        icon: '🌾',
        title: 'Зерно и мукомольно-крупяная продукция',
        items: [
            'Зерно и зернобобовые',
            'Мука и крупа',
            'Хлебобулочные изделия',
            'Макаронные изделия',
        ],
    },
    {
        icon: '🥛',
        title: 'Молоко и молочные продукты',
        items: [
            'Молоко и сливки',
            'Кисломолочные продукты',
            'Масло сливочное',
            'Сыры и творог',
        ],
    },
    {
        icon: '🍖',
        title: 'Мясо и мясные продукты',
        items: [
            'Мясо и субпродукты',
            'Колбасные изделия',
            'Мясные полуфабрикаты',
            'Консервы мясные',
        ],
    },
    {
        icon: '🍷',
        title: 'Алкогольная продукция',
        items: [
            'Вина и винные напитки',
            'Водка и ликёроводочные изделия',
            'Коньяки и бренди',
            'Пиво и слабоалкогольные напитки',
        ],
    },
    {
        icon: '🧁',
        title: 'Кондитерские изделия',
        items: [
            'Сахаристые изделия',
            'Мучные кондитерские изделия',
            'Шоколад и какао-продукты',
            'Карамель и конфеты',
        ],
    },
    {
        icon: '💄',
        title: 'Парфюмерно-косметическая продукция',
        items: [
            'Косметические средства',
            'Парфюмерная продукция',
            'Средства гигиены',
            'Эфирные масла',
        ],
    },
    {
        icon: '🌱',
        title: 'Кормовые добавки',
        items: [
            'Кормовые добавки',
            'Комбикорма',
            'Премиксы',
            'Кормовое сырьё',
        ],
    },
];

function Home() {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <HeroBanner />

                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.categoriesGrid}>
                            {productCategories.map((cat, index) => (
                                <div key={index} className={styles.categoryCard}>
                                    <div className={styles.cardHeader}>
                                        <span className={styles.cardIcon}>{cat.icon}</span>
                                        <h3 className={styles.cardTitle}>{cat.title}</h3>
                                    </div>
                                    <ul className={styles.cardList}>
                                        {cat.items.map((item, i) => (
                                            <li key={i} className={styles.cardListItem}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2d6cc0" strokeWidth="2.5">
                                                    <polyline points="20 6 9 17 4 12"/>
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className={styles.servicesAction}>
                            <Link to="/services" className={styles.btnOutline}>
                                Все услуги и прайс-лист
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                    <polyline points="12 5 19 12 12 19"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

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
