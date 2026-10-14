import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import chrome from "./CaseStudyLayout.module.css";
import pillStyles from "./GlassPill.module.css";
import styles from "./FlowCaseStudyLayout.module.css";

/* ── Section — heading with accent bar, children laid out as columns ── */

type SectionProps = {
  heading: string;
  /* grid-template-columns on desktop, e.g. "1fr 1.9fr"; defaults to equal columns */
  columns?: string;
  className?: string;
  children?: ReactNode;
};

export function Section({ heading, columns, className, children }: SectionProps) {
  const style = columns ? ({ "--cols": columns } as CSSProperties) : undefined;

  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <h2 className={styles.sectionHeading}>{heading}</h2>
      {children && (
        <div className={styles.columns} style={style}>
          {children}
        </div>
      )}
    </section>
  );
}

/* ── FlowCaseStudyLayout — flowing, scrollable version of CaseStudyLayout.
   Title, rule and Back pill reuse CaseStudyLayout's classes inside a
   1512 × 982 overlay so they land exactly where they do on the other pages. ── */

type LayoutProps = {
  title: string;
  backHref?: string;
  children: ReactNode;
};

export default function FlowCaseStudyLayout({
  title,
  backHref = "/#projects",
  children,
}: LayoutProps) {
  return (
    <div className={styles.frame}>
      <div className={styles.chrome}>
        <h1 className={chrome.title}>{title}</h1>
        <hr className={`${chrome.rule} ${styles.ruleSoft}`} />
        <div className={`${chrome.backPill} ${styles.backPillMobile}`}>
          <div className={pillStyles.buttonWrap}>
            <Link href={backHref} className={pillStyles.pill}>
              <span className={pillStyles.pillSpan}>Back</span>
            </Link>
            <div className={pillStyles.buttonShadow} />
          </div>
        </div>
      </div>
      <div className={styles.card}>{children}</div>
    </div>
  );
}
