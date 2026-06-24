import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <div className={styles.brand}>
                            <div className={styles.logoIcon}>ИЦ</div>
                            <div>
                                <div className={styles.brandTitle}>Испытательный центр</div>
                                <div className={styles.brandSubtitle}>ФГБОУ ВО «КубГТУ»</div>
                            </div>
                        </div>
                        <p className={styles.description}>
                            Аттестат аккредитации RA.RU.21КБ38.
                        </p>
                    </div>

                    <div className={`${styles.column} ${styles.navColumn}`}>
                        <h4 className={styles.columnTitle}>Навигация</h4>
                        <Link to="/home" className={styles.footerLink}>Главная</Link>
                        <Link to="/about" className={styles.footerLink}>О нас</Link>
                        <Link to="/services" className={styles.footerLink}>Услуги</Link>
                        <Link to="/accreditation" className={styles.footerLink}>Аккредитация</Link>
                        <Link to="/contacts" className={styles.footerLink}>Контакты</Link>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Контакты</h4>
                        <p className={styles.contactLine}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            г. Краснодар, ул. Московская, каб. 217
                        </p>
                        <p className={styles.contactLine}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            (861) 253-67-60
                        </p>
                        <p className={styles.contactLine}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                            ktgr11@mail.ru
                        </p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <span>&copy; {new Date().getFullYear()} Испытательный центр ФГБОУ ВО «КубГТУ». Все права защищены.</span>
                    <a href="https://fct.kubstu.ru" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
                        fct.kubstu.ru
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
