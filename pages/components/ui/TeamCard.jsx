import styles from '../styles/TeamCard.module.css';

function TeamCard({ photo, name, position, degree, description }) {
    return (
        <div className={styles.card}>
            <div className={styles.photoWrapper}>
                {photo ? (
                    <img src={photo} alt={name} className={styles.photo} />
                ) : (
                    <div className={styles.placeholder}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                    </div>
                )}
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                {degree && <span className={styles.degree}>{degree}</span>}
                <span className={styles.position}>{position}</span>
                {description && <p className={styles.description}>{description}</p>}
            </div>
        </div>
    );
}

export default TeamCard;
