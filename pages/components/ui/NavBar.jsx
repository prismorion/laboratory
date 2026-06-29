import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const navLinks = [
    { to: '/home', label: 'Главная' },
    { to: '/about', label: 'О нас' },
    { to: '/services', label: 'Услуги' },
    { to: '/accreditation', label: 'Аккредитация' },
    { to: '/contacts', label: 'Контакты' },
];

function NavBar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <div className={styles.container}>
                    <div className={styles.contactInfo}>
                        <a href="tel:+78612536760" className={styles.contactItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            (861) 253-67-60
                        </a>
                        <a href="mailto:ktgr11@mail.ru" className={styles.contactItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                            ktgr11@mail.ru
                        </a>
                    </div>
                </div>
            </div>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <Link to="/home" className={styles.logo}>
                        <div className={styles.logoIcon}>ИЦ</div>
                        <div className={styles.logoText}>
                            <span className={styles.logoTitle}>Испытательный центр</span>
                            <span className={styles.logoSubtitle}>КубГТУ</span>
                        </div>
                    </Link>

                    <button
                        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Меню"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`${styles.navLink} ${location.pathname === link.to ? styles.active : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
            {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
        </header>
    );
}

export default NavBar;
