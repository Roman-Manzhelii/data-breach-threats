import { useLayoutEffect, useRef } from 'react'
import styles from './Cases.module.scss'
import useScrollReveal from '../../hooks/useScrollReveal'
import { cases } from '../../content/cases'
import CaseCard from '../../components/CaseCard/CaseCard'

export default function Cases() {
  const reveal = useScrollReveal({ rootMargin: '0px 0px -20% 0px', threshold: 0.1 })
  const gridRef = useRef(null)
  const itemsRef = useRef([])

  useLayoutEffect(() => {
    const update = () => {
      let max = 460
      for (const el of itemsRef.current) {
        if (!el) continue
        const f = el.querySelector('[data-face="front"]')
        const b = el.querySelector('[data-face="back"]')
        const h = Math.max(f?.scrollHeight || 0, b?.scrollHeight || 0)
        if (h > max) max = h
      }
      gridRef.current?.style.setProperty('--cardH', `${max}px`)
    }
    const ro = new ResizeObserver(update)
    itemsRef.current.forEach(el => {
      if (!el) return
      el.querySelectorAll('[data-face]').forEach(n => ro.observe(n))
    })
    update()
    return () => ro.disconnect()
  }, [])

  return (
    <section id="cases" className={`section container ${styles.wrap}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Case Studies</h2>
      </div>
      <div ref={gridRef} className={styles.grid}>
        {cases.slice(0, 3).map((item, i) => (
          <CaseCard
            key={item.id}
            item={item}
            ref={el => {
              itemsRef.current[i] = el
              if (el) reveal(el)
            }}
          />
        ))}
      </div>
    </section>
  )
}
