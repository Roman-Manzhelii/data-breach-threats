import styles from "./Footer.module.scss";
import { references } from "../../content/references";

function pick() {
    const cases = references.find(g => /case/i.test(g.group));
    const guidanceLinks = references
        .filter(g => /(guidance|official|security)/i.test(g.group))
        .flatMap(g => g.links);
    const design = references.find(g => /design/i.test(g.group));
    return {
        cases: cases?.links ?? [],
        guidance: guidanceLinks,
        design: design?.links ?? []
    };
}

export default function Footer() {
    const { cases, guidance, design } = pick();

    return (
        <footer id="references" className={styles.footer}>
            <div className={styles.angle} />
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.colLeft}>
                        <h3 className={styles.group}>Case studies</h3>
                        <ul className={styles.list}>
                            {cases.map(link => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        {link.label}
                                        <svg className={styles.ext} viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.colRight}>
                        <div className={styles.stackBlock}>
                            <h3 className={styles.group}>Guidance</h3>
                            <ul className={styles.list}>
                                {guidance.map(link => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}
                                        >
                                            {link.label}
                                            <svg className={styles.ext} viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.stackBlock}>
                            <h3 className={styles.group}>Design</h3>
                            <ul className={styles.list}>
                                {design.map(link => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}
                                        >
                                            {link.label}
                                            <svg className={styles.ext} viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.legal}>
                    <span>© {new Date().getFullYear()} DataDefense</span>
                </div>
            </div>
        </footer>
    );
}
