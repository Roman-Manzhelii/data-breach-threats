import styles from './Anchor.module.scss'
export default function Anchor({ id }) {
  return <span id={id} className={styles.anchor} aria-hidden="true" />
}
