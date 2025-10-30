import { useEffect, useRef, useState } from 'react'
import styles from './Intro.module.scss'
import { intro } from '../../content/intro'
import DecryptedText from '../../components/DecryptedText/DecryptedText'
import WarningCard from '../../components/WarningCard/WarningCard'
import useReducedMotion from '../../hooks/useReducedMotion'
import Lottie from 'lottie-react'
import whatToDo from '../../assets/what-to-do.json'

export default function Intro() {
  const wrapRef = useRef(null)
  const [p, setP] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = el.offsetHeight - vh
      const prog = total <= 0 ? 0 : Math.min(1, Math.max(0, (-rect.top) / total))
      setP(prog)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const step1 = reduced || p > 0.12
  const step2 = reduced || p > 0.32
  const step3 = reduced || p > 0.54
  const step4 = reduced || p > 0.74

  return (
    <section className={styles.intro}>
      <div className="container">
        <div className={styles.heroGrid}>
          <h1 className={styles.question}>{intro.question}</h1>
          <Lottie
            className={styles.lottie}
            animationData={whatToDo}
            autoplay={!reduced}
            loop={!reduced}
          />
          <p className={styles.definition}>{intro.definition}</p>
        </div>
      </div>

      <div ref={wrapRef} className={styles.stageWrap}>
        <div className={styles.stagePin}>
          <div className={styles.center}>
            <DecryptedText
              text={intro.impactTitle}
              speed={40}
              sequential
              useOriginalCharsOnly
              animateOn="hover"
              revealDirection="start"
              className={styles.centerText}
              encryptedClassName={styles.centerText}
            />
            <p className={styles.centerSub}>{intro.impactContent}</p>
          </div>

          <div className={`${styles.warn} ${styles.tl} ${step1 ? styles.show : ''}`}>
            <WarningCard title={intro.cards[0].title} text={intro.cards[0].text} />
          </div>
          <div className={`${styles.warn} ${styles.tr} ${step2 ? styles.show : ''}`}>
            <WarningCard title={intro.cards[1].title} text={intro.cards[1].text} />
          </div>
          <div className={`${styles.warn} ${styles.bl} ${step3 ? styles.show : ''}`}>
            <WarningCard title={intro.cards[2].title} text={intro.cards[2].text} />
          </div>
          <div className={`${styles.warn} ${styles.br} ${step4 ? styles.show : ''}`}>
            <WarningCard title={intro.cards[3].title} text={intro.cards[3].text} />
          </div>
        </div>
      </div>
    </section>
  )
}
