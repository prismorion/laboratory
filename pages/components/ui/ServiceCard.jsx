import { Link } from 'react-router-dom';
import styles from '../styles/ServiceCard.module.css';

function ServiceCard({ icon, title, description, link }) {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                <span className={styles.icon}>{icon}</span>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            {link && (
                <Link to={link} className={styles.link}>
                    Подробнее
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                    </svg>
                </Link>
            )}
        </div>
    );
}

export default ServiceCard;
