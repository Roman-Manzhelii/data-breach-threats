import { useEffect, useRef, useState } from 'react'
import styles from './TopNav.module.scss'
import StaggeredMenu from '../StaggeredMenu/StaggeredMenu'

export default function TopNav({ items = [] }) {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const touchStartY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastY.current = window.scrollY || 0

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const y = window.scrollY || 0
        const vh = window.innerHeight || 0
        const dh = document.documentElement.scrollHeight || 0

        const delta = y - lastY.current
        const goingDown = delta > 2
        const goingUp = delta < -2
        const nearTop = y <= 16
        const nearBottom = y + vh >= dh - 1

        if (nearTop || nearBottom) setHidden(false)
        else if (goingDown) setHidden(true)
        else if (goingUp) setHidden(false)

        lastY.current = y
        ticking.current = false
      })
    }

    const onWheel = (e) => {
      if (e.deltaY < 0) setHidden(false)
    }

    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0]?.clientY ?? 0
    }

    const onTouchMove = (e) => {
      const dy = (e.touches[0]?.clientY ?? 0) - touchStartY.current
      if (dy > 4) setHidden(false)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  const menuItems = items.map(i => ({ label: i.label, ariaLabel: i.label, link: i.href }))

  return (
    <nav className={`${styles.nav} ${hidden ? styles.hide : ''}`} aria-label="Primary">
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
            accentColor="#5227ff"
            isFixed={true}
          />
        </div>
      </div>
    </nav>
  )
}
