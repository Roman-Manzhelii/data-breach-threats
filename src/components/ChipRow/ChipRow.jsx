import styles from './ChipRow.module.scss'

export default function ChipRow({ items = [] }) {
    return (
        <ul className={styles.row} role="list">
            {items.map((t, i) => (
                <li key={i} className={styles.chip}>{t}</li>
            ))}
        </ul>
    )
}
