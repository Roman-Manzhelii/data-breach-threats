import styles from './TopNav.module.scss'

export default function TopNav({ items = [] }) {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className="container">
        <a className={styles.brand} href="#intro">DataDefense</a>
        <div className={styles.links}>
          {items.map(i => (
            <a key={i.id} href={i.href} className={styles.link} aria-label={i.label}>
              {i.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
