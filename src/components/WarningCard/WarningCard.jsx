import styles from './WarningCard.module.scss'
import iconUrl from '../../assets/warning.svg'

export default function WarningCard({ title, text }) {
  return (
    <div className={styles.card}>
      <img src={iconUrl} alt="" className={styles.icon} aria-hidden="true" />
      <div>
        <div className={styles.title}>{title}</div>
        {text ? <div className={styles.text}>{text}</div> : null}
      </div>
    </div>
  )
}
