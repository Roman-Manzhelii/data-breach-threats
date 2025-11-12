import styles from './Anchor.module.scss';

export default function Anchor({ id, label }) {
  return (
    <div className={styles.wrap}>
      <span id={id} className={styles.marker} aria-hidden="true" />
      {label && (
        <div className={styles.rule} aria-hidden="true">
          <div className={styles.line} />
          <div className={styles.caption}>/{label.toUpperCase()}</div>
        </div>
      )}
    </div>
  );
}
