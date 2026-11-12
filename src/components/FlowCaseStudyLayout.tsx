import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import chrome from "./CaseStudyLayout.module.css";
import link from "./TextLink.module.css";
import styles from "./FlowCaseStudyLayout.module.css";
import editorial from "./Editorial.module.css";

/* ── FlowCaseStudyLayout — flowing, scrollable version of CaseStudyLayout.
   Title, rule and Back pill reuse CaseStudyLayout's classes inside a
   1512 × 982 overlay so they land exactly where they do on the other pages. ── */

type LayoutProps = {
  title: string;
  backHref?: string;
  /* page background, title tracking and title-rule colour; default to the shared case study look */
  background?: string;
  titleTracking?: string;
  ruleColor?: string;
  children: ReactNode;
};

export default function FlowCaseStudyLayout({
  title,
  backHref = "/#projects",
  background,
  titleTracking,
  ruleColor,
  children,
}: LayoutProps) {
  const style = {
    ...(background && { "--frame-bg": background }),
    ...(titleTracking && { "--title-tracking": titleTracking }),
    ...(ruleColor && { "--rule-color": ruleColor }),
  } as CSSProperties;

  return (
    <div className={styles.frame} style={style}>
      <div className={styles.chrome}>
        <h1 className={`${chrome.title} ${styles.titleLow}`}>{title}</h1>
        <hr className={`${chrome.rule} ${styles.ruleSoft}`} />
        <div className={`${chrome.backPill} ${styles.backPillMobile}`}>
          <Link href={backHref} className={link.textLink}>
            <span className={link.line}>
              <span aria-hidden="true">← </span>Back
            </span>
          </Link>
        </div>
      </div>
      <article className={editorial.article}>{children}</article>
    </div>
  );
}
