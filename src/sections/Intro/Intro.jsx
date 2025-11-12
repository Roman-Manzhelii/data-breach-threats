import { useEffect, useRef, useState, useMemo } from 'react'
import styles from './Intro.module.scss'
import { intro } from '../../content/intro'
import DecryptedText from '../../components/DecryptedText/DecryptedText'
import WarningCard from '../../components/WarningCard/WarningCard'
import useReducedMotion from '../../hooks/useReducedMotion'
import Lottie from 'lottie-react'
import whatToDo from '../../assets/what-to-do.json'

export default function Intro() {
  const wrapRef = useRef(null)
  const lottieRef = useRef(null)
  const [p, setP] = useState(0)
  const reduced = useReducedMotion()

  // iOS WebKit детект
  const isIOSWebKit = useMemo(() => {
    const ua = navigator.userAgent || ''
    return /iPad|iPhone|iPod/.test(ua) && /AppleWebKit/.test(ua)
  }, [])

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    let raf = 0
    const clamp01 = (v) => Math.max(0, Math.min(1, v))
    const measure = () => {
      const start = el.offsetTop
      const end = start + el.offsetHeight - window.innerHeight
      const denom = Math.max(1, end - start)
      const prog = clamp01((window.scrollY - start) / denom)
      setP(prog)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    window.addEventListener('orientationchange', measure)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      window.removeEventListener('orientationchange', measure)
    }
  }, [])

  // Гарантований старт на iOS: після створення DOM шарів
  const handleDOMLoaded = () => {
    // деякі iOS збивають автоплей — перезапустимо явно з 0 кадру
    lottieRef.current?.stop?.()
    requestAnimationFrame(() => {
      lottieRef.current?.goToAndPlay?.(0, true)
    })
  }

  // Якщо iOS помилково репортує reduced — все одно вмикаємо автоплей
  const shouldAutoplay = !reduced || isIOSWebKit
  const shouldLoop = !reduced // для реального reduced лишаємо без петлі

  const step1 = p > 0.12
  const step2 = p > 0.32
  const step3 = p > 0.54
  const step4 = p > 0.74

  return (
    <section className={styles.intro}>
      <div className="container">
        <div className={styles.heroGrid}>
          <h1 className={styles.question}>{intro.question}</h1>

          <Lottie
            lottieRef={lottieRef}
            className={styles.lottie}
            animationData={whatToDo}
            // ключове: canvas на iOS, svg на решті
            renderer={isIOSWebKit ? 'canvas' : 'svg'}
            autoplay={shouldAutoplay}
            loop={shouldLoop}
            onDOMLoaded={handleDOMLoaded}
            rendererSettings={{
              // для canvas рендера на iOS
              clearCanvas: true,
              preserveAspectRatio: 'xMidYMid meet',
              progressiveLoad: false,
              hideOnTransparent: true,
            }}
          />

          <p className={styles.definition}>{intro.definition}</p>
        </div>
      </div>

      <div ref={wrapRef} className={styles.stageWrap}>
        <div className={styles.stagePin}>
          <div className={styles.center}>
            <DecryptedText
              text={intro.impactTitle}
              speed={25}
              sequential
              useOriginalCharsOnly
              animateOn="view"
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
