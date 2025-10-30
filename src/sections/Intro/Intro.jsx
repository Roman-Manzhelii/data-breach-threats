import styles from './Intro.module.scss'
import { intro } from '../../content/intro'
import DecryptedText from '../../components/DecryptedText/DecryptedText'
import WarningCard from '../../components/WarningCard/WarningCard'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function Intro() {
  const reveal = useScrollReveal()
  return (
    <section className={styles.intro}>
      <div className="container">
        <h1 className={styles.question}>{intro.question}</h1>
        <p className={styles.definition}>{intro.definition}</p>
      </div>

      <div className={styles.stage}>
        <div className={styles.centerLine}>
          <DecryptedText
            text={intro.impactTitle}
            speed={40}
            sequential
            useOriginalCharsOnly
            animateOn="hover"
            revealDirection="start"
          />
        </div>

        <div ref={reveal} className={`${styles.warn} ${styles.tl}`}>
          <WarningCard text={intro.cards[0]} />
        </div>
        <div ref={reveal} className={`${styles.warn} ${styles.tr}`}>
          <WarningCard text={intro.cards[1]} />
        </div>
        <div ref={reveal} className={`${styles.warn} ${styles.bl}`}>
          <WarningCard text={intro.cards[2]} />
        </div>
        <div ref={reveal} className={`${styles.warn} ${styles.br}`}>
          <WarningCard text={intro.cards[3]} />
        </div>
      </div>
    </section>
  )
}
