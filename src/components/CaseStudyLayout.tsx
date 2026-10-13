"use client";

import { createContext, useContext, useRef } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./CaseStudyLayout.module.css";
import pillStyles from "./GlassPill.module.css";

/* ── context ── */

type CaseStudyCtx = {
  scrollToPanel: (idx: number) => void;
  dotTops: readonly string[];
  headingAccent: boolean;
  hideDots: boolean;
};

const CaseStudyContext = createContext<CaseStudyCtx>({
  scrollToPanel: () => {},
  dotTops: [],
  headingAccent: false,
  hideDots: false,
});

export function useCaseStudy() {
  return useContext(CaseStudyContext);
}

/* ── default dot tops — 5-panel case study (1451 × 743)
   y: 509 536 563 590 617  →  (y−196)/743 */
const FIVE_PANEL_DOT_TOPS = [
  "42.126%",
  "45.763%",
  "49.396%",
  "53.030%",
  "56.663%",
] as const;

/* ── CaseStudyPanel — one slide inside the scroll area ── */

type PanelProps = {
  index: number;
  heading: string;
  children: ReactNode;
};

export function CaseStudyPanel({ index, heading, children }: PanelProps) {
  const { scrollToPanel, dotTops, headingAccent, hideDots } = useCaseStudy();

  return (
    <div className={styles.panel}>
      <h2
        className={`${styles.sectionHeading} ${headingAccent ? styles.sectionHeadingAccent : ""}`}
      >
        {heading}
      </h2>
      {!hideDots && dotTops.map((top, i) => (
        <button
          key={i}
          type="button"
          className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
          style={{ top }}
          onClick={() => scrollToPanel(i)}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
      {children}
    </div>
  );
}

/* ── CaseStudyLayout — shared outer frame + fixed chrome ── */

type LayoutProps = {
  title: string;
  backHref?: string;
  dotTops?: readonly string[];
  /* heading sits further left with a thin accent bar before it */
  headingAccent?: boolean;
  /* hide the per-panel nav dots */
  hideDots?: boolean;
  /* continuous scrolling instead of snapping one panel at a time */
  freeScroll?: boolean;
  children: ReactNode;
};

export default function CaseStudyLayout({
  title,
  backHref = "/#projects",
  dotTops = FIVE_PANEL_DOT_TOPS,
  headingAccent = false,
  hideDots = false,
  freeScroll = false,
  children,
}: LayoutProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToPanel = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: idx * el.clientHeight, behavior: "smooth" });
  };

  return (
    <CaseStudyContext.Provider value={{ scrollToPanel, dotTops, headingAccent, hideDots }}>
      <div className={styles.frame}>
        <h1 className={styles.title}>{title}</h1>
        <hr className={styles.rule} />
        <div className={styles.backPill}>
          <div className={pillStyles.buttonWrap}>
            <Link href={backHref} className={pillStyles.pill}>
              <span className={pillStyles.pillSpan}>Back</span>
            </Link>
            <div className={pillStyles.buttonShadow} />
          </div>
        </div>
        <div
          className={`${styles.scrollArea} ${freeScroll ? styles.scrollAreaFree : ""}`}
          ref={scrollRef}
        >
          {children}
        </div>
      </div>
    </CaseStudyContext.Provider>
  );
}
