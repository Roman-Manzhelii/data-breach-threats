import { useEffect, useState } from 'react'
import { routes } from './routes.jsx'
import TopNav from '../components/TopNav/TopNav.jsx'
import Anchor from '../components/Anchor/Anchor.jsx'
import Intro from '../sections/Intro/Intro.jsx'
import Cases from '../sections/Cases/Cases.jsx'
import GDPR from '../sections/GDPR/GDPR.jsx'
import Playbook from '../sections/Playbook/Playbook.jsx'
import Footer from '../sections/Footer/Footer.jsx'

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    let restoreTimer
    let raf = 0
    let lastY = window.scrollY

    const disableSnap = () => {
      root.classList.add('snap-off')
      clearTimeout(restoreTimer)
    }

    const restoreSnapSoon = (delay = 400) => {
      clearTimeout(restoreTimer)
      restoreTimer = setTimeout(() => {
        root.classList.remove('snap-off')
      }, delay)
    }

    const onTouchStart = () => disableSnap()
    const onTouchEnd = () => restoreSnapSoon(450)
    const onWheel = () => {
      disableSnap()
      restoreSnapSoon(350)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const nowY = window.scrollY
        if (Math.abs(nowY - lastY) < 1) restoreSnapSoon(200)
        lastY = nowY
      })
    }

    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      clearTimeout(restoreTimer)
      cancelAnimationFrame(raf)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <TopNav items={routes} />
      <main>
        <Anchor id="intro" />
        <Intro />

        <Anchor id="cases" label="Case Studies" />
        <section className="section snapSection">
          <div className="snapInner">
            <Cases />
          </div>
        </section>

        <Anchor id="gdpr" label="GDPR" />
        <section className="section snapSection">
          <div className="snapInner">
            <GDPR />
          </div>
        </section>

        <Anchor id="playbook" label="Playbook" />
        <section className="section snapSection">
          <div className="snapInner">
            <Playbook />
          </div>
        </section>

        <Anchor id="references" />
        <Footer />
      </main>
    </>
  )
}
