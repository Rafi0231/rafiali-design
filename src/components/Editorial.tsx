import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import styles from "./Editorial.module.css";

/* The editorial case study: warm paper, titles about 8× the body text, one spacing
   scale, and a single dark room per page. Pages compose these with their own layouts. */

export { styles as editorial };

export function Note({ label, children }: { label: string; children: ReactNode }) {
  return (
    <p className={styles.note}>
      <strong>{label}.</strong> {children}
    </p>
  );
}

/* Bolds the "Draft 1:" at the start of a caption */
export function DraftCaption({ text }: { text: string }) {
  const [, label, rest] = text.match(/^((?:Post-Feedback )?Draft \d+:)([\s\S]*)$/) ?? [];
  if (!label) return text;

  return (
    <>
      <strong className={styles.draftLabel}>{label}</strong>
      {rest}
    </>
  );
}

type ChapterProps = {
  title: string;
  /* the page's one dark section */
  room?: boolean;
  /* the final chapter, with room below it */
  last?: boolean;
  className?: string;
  children: ReactNode;
};

/* A chapter. Its title is the screen's anchor, fixed in place and revealed by the chapter
   passing over it: rotated on the left edge on desktop, a headline across the top on
   phones and tablets. */
export function Chapter({ title, room = false, last = false, className, children }: ChapterProps) {
  return (
    <section
      className={`${styles.band} ${styles.spaced} ${styles.chapter} ${title.length > 18 ? styles.chapterLong : ""} ${room ? styles.room : ""} ${last ? styles.last : ""}`}
    >
      <h2 className={styles.spine}>
        <span
          className={`${styles.title} ${styles.spineText}`}
          style={{ "--chars": title.length } as CSSProperties}
        >
          {title}
        </span>
      </h2>
      <div className={`${styles.grid} ${className ?? ""}`}>{children}</div>
    </section>
  );
}

type StatementProps = {
  label: string;
  /* "small" for longer lines that would run past four lines at full size */
  size?: "full" | "small";
  className?: string;
  children: ReactNode;
};

/* A line worth hearing, set as large as a title; its label stays above it */
export function Statement({ label, size = "full", className, children }: StatementProps) {
  return (
    <p
      className={`${styles.statement} ${size === "small" ? styles.statementSmall : ""} ${className ?? ""}`}
    >
      <strong className={styles.statementLabel}>{label}.</strong> {children}
    </p>
  );
}

/* Wraps an opening quotation mark at the start of a line */
export function Hang({ children }: { children: ReactNode }) {
  return <span className={styles.hang}>{children}</span>;
}

export const SIZES = {
  full: "(max-width: 1099px) 92vw, 1330px",
  pair: "(max-width: 1099px) 92vw, 870px",
  half: "(max-width: 899px) 92vw, 660px",
  third: "(max-width: 899px) 92vw, 440px",
  quarter: "(max-width: 899px) 92vw, 330px",
} as const;

export type WorkProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: ReactNode;
  sizes?: string;
  unoptimized?: boolean;
  /* screens dense with small text open at full size, so they can be read on a phone */
  zoom?: boolean;
};

/* A piece of work, whole at its true proportions on a hairline: never cropped or overlapped */
export function Work({ alt, caption, zoom = false, unoptimized = false, sizes, ...image }: WorkProps) {
  const img = (
    <Image
      {...image}
      alt={alt}
      sizes={sizes}
      unoptimized={unoptimized}
      quality={unoptimized ? undefined : 90}
      className={styles.workImg}
    />
  );

  return (
    <figure
      className={styles.figure}
      style={{ "--ratio": image.width / image.height } as CSSProperties}
    >
      {zoom ? (
        <a
          href={image.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open this image at full size (opens in a new tab)"
        >
          {img}
        </a>
      ) : (
        img
      )}
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

type OpenerProps = {
  headline: string;
  timeline: string;
  tools: string;
  facts: readonly (readonly [label: string, text: string])[];
  /* the finished work */
  children: ReactNode;
};

export function Opener({ headline, timeline, tools, facts, children }: OpenerProps) {
  return (
    <header className={`${styles.band} ${styles.grid} ${styles.opener}`}>
      <h2 className={styles.headline}>{headline}</h2>
      <p className={styles.meta}>
        {timeline}
        <span className={styles.dot}>&middot;</span>
        {tools}
      </p>
      <div className={styles.hero}>{children}</div>
      <dl className={styles.facts}>
        {facts.map(([label, text]) => (
          <div key={label} className={styles.fact}>
            <dt className={styles.factLabel}>{label}</dt>
            <dd className={styles.factText}>{text}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
