import styles from './TopNav.module.scss'
import StaggeredMenu from '../StaggeredMenu/StaggeredMenu'

export default function TopNav({ items = [] }) {
  const menuItems = items.map(i => ({ label: i.label, ariaLabel: i.label, link: i.href }))
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

        <div className={styles.mobileMenu}>
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={[]}
            displaySocials={false}
            displayItemNumbering={false}
            menuButtonColor="#131313"
            openMenuButtonColor="#131313"
            changeMenuColorOnOpen={false}
            colors={['#F9F9F9', '#E5E5E5']}
            accentColor="#ffb100"
            isFixed={true}
          />
        </div>
      </div>
    </nav>
  )
}
