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

    const pressId = useRef(null)
    const onBtnPointerDown = e => {
        e.stopPropagation()
        pressId.current = e.pointerId
        if (e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId)
    }
    const onBtnPointerUp = e => {
        e.stopPropagation()
        if (pressId.current === e.pointerId) {
            pressId.current = null
            if (e.currentTarget.releasePointerCapture) e.currentTarget.releasePointerCapture(e.pointerId)
            toggle()
        }
    }
    const onBtnPointerCancel = () => { pressId.current = null }

    return (
        <article ref={ref} className={`${styles.card} ${flipped ? styles.flipped : ''}`}>
            <div className={styles.inner} style={{ ['--h']: `${h}px` }}>
                <div ref={frontRef} data-face="front" className={`${styles.face} ${styles.front}`}>
                    <header className={styles.head}>
                        <h3 className={styles.title}>{item.title}</h3>
                        <span className={styles.year}>{item.year}</span>
                    </header>

                    <div className={styles.kvRow}>
                        <div className={styles.label}>Attack vector</div>
                        {fine && <div className={`${styles.label} ${styles.labelRight}`}>Fine</div>}
                        <div className={styles.pillAccent}>{item.vector}</div>
                        {fine && <div className={styles.fineSoft}>{fine}</div>}
                    </div>

                    {!!item.dataTypes?.length && (
                        <div className={styles.section}>
                            <div className={styles.label}>Data types exposed</div>
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

                    <div className={styles.footer}>
                        <button
                            type="button"
                            className={styles.btn}
                            onPointerDown={onBtnPointerDown}
                            onPointerUp={onBtnPointerUp}
                            onPointerCancel={onBtnPointerCancel}
                        >
                            View Story
                        </button>
                    </div>
                </div>

                <div ref={backRef} data-face="back" className={`${styles.face} ${styles.back}`}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.story}>{item.story}</p>
                    <div className={styles.footer}>
                        <button
                            type="button"
                            className={styles.btn}
                            onPointerDown={onBtnPointerDown}
                            onPointerUp={onBtnPointerUp}
                            onPointerCancel={onBtnPointerCancel}
                        >
                            View Card
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
})

export default CaseCard
