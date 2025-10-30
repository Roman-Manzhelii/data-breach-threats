import styles from './WarningCard.module.scss'
import iconUrl from '../../assets/warning.svg'

export default function WarningCard({ text }) {
    return (
        <div className={styles.card}>
            <img src={iconUrl} alt="" className={styles.icon} aria-hidden="true" />
            <span className={styles.text}>{text}</span>
        </div>
    )
}
