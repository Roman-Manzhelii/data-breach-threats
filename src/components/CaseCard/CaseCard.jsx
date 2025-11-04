import { forwardRef, useMemo, useState, useRef, useLayoutEffect } from 'react'
import styles from './CaseCard.module.scss'

function formatMoney({ amount, currency }) {
    if (typeof amount !== 'number') return null
    const symbol = currency === 'EUR' ? '€' : currency === 'USD' ? '$' : ''
    const compact = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(amount)
    return `${symbol}${compact}`
}

const CaseCard = forwardRef(function CaseCard({ item }, ref) {
    const [flipped, setFlipped] = useState(false)
    const fine = useMemo(() => formatMoney(item.enforcement || {}), [item.enforcement])

    const frontRef = useRef(null)
    const backRef = useRef(null)
    const [h, setH] = useState(460)

    useLayoutEffect(() => {
        const update = () => {
            const a = frontRef.current?.scrollHeight || 0
            const b = backRef.current?.scrollHeight || 0
            setH(Math.max(460, a, b))
        }
        const ro = new ResizeObserver(update)
        if (frontRef.current) ro.observe(frontRef.current)
        if (backRef.current) ro.observe(backRef.current)
        update()
        return () => ro.disconnect()
    }, [])

    const toggle = () => setFlipped(v => !v)
    const onKey = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle() } }

    return (
        <article
            ref={ref}
            className={`${styles.card} ${flipped ? styles.flipped : ''}`}
            tabIndex={0}
            role="button"
            aria-pressed={flipped}
            onClick={toggle}
            onKeyDown={onKey}
        >
            <div className={styles.inner} style={{ ['--h']: `${h}px` }}>
                <div ref={frontRef} data-face="front" className={`${styles.face} ${styles.front}`}>
                    <header className={styles.head}>
                        <h3 className={styles.title}>{item.title}</h3>
                        <span className={styles.year}>{item.year}</span>
                    </header>

                    <div className={styles.section}>
                        <div className={styles.label}>Attack vector</div>
                        <div className={styles.pill}>{item.vector}</div>
                    </div>

                    {fine && (
                        <div className={styles.section}>
                            <div className={styles.label}>Enforcement</div>
                            <div className={styles.pill}>{fine}</div>
                        </div>
                    )}

                    {!!item.dataTypes?.length && (
                        <div className={styles.section}>
                            <div className={styles.label}>Data types</div>
                            <div className={styles.tags}>
                                {item.dataTypes.slice(0, 2).map((t, i) => (
                                    <span key={i} className={styles.tag}>{t}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {!!item.timeline?.length && (
                        <div className={styles.section}>
                            <div className={styles.label}>Timeline</div>
                            <ul className={styles.timeline}>
                                {item.timeline.map((ev, i) => (
                                    <li key={i} className={styles.event}>
                                        <span className={styles.dot} />
                                        <div className={styles.eventBody}>
                                            <div className={styles.eventDate}>{ev.date}</div>
                                            <div className={styles.eventNote}>{ev.note}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div ref={backRef} data-face="back" className={`${styles.face} ${styles.back}`}>
                    <h4 className={styles.backTitle}>{item.title}</h4>
                    <p className={styles.story}>{item.story}</p>
                </div>
            </div>
        </article>
    )
})

export default CaseCard
