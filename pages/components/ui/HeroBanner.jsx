import { Link } from 'react-router-dom';
import styles from '../styles/HeroBanner.module.css';

function HeroBanner() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <div className={styles.accreditBanner}>
                    <div className={styles.accreditIcon}>
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            <polyline points="9 12 11 14 15 10" stroke="#10b981" strokeWidth="2"/>
                        </svg>
                    </div>
                    <span className={styles.accreditText}>Аттестат аккредитации RA.RU.21КБ38</span>
                </div>
                <h1 className={styles.title}>
                    Испытательный центр<br />
                    ФГБОУ ВО<br />
                    Кубанский государственный<br />
                    технологический университет
                </h1>
                <div className={styles.actions}>
                    <Link to="/services" className={styles.btnPrimary}>Наши услуги</Link>
                    <Link to="/contacts" className={styles.btnSecondary}>Связаться с нами</Link>
                </div>
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>100+</span>
                        <span className={styles.statLabel}>предприятий-заказчиков</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>60+</span>
                        <span className={styles.statLabel}>видов экспертиз</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>3</span>
                        <span className={styles.statLabel}>лаборатории</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;
