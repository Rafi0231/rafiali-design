"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroStats.module.css";

type Stat = {
  value: number;
  suffix?: string;
  sup?: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 130, suffix: "+", label: "tests behind a\nlive AI product" },
  { value: 4, label: "products\nshipped 0→1" },
  { value: 1, sup: "st", label: "Author, ACM\nCOMPASS ’26" },
  { value: 3, label: "works exhibited at the\nChicago Art Department" },
];

// Left edge of each divider in the 1512px Figma frame; a closing divider sits at 969
const X = [144, 360, 525, 739];

// Timeline (ms): lines part, then the stats fade up and count
const PART_MS = 900;
const COUNT_DELAY_MS = 550;
const COUNT_MS = 1300;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function HeroStats() {
  const ref = useRef<HTMLUListElement>(null);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Numbers render at their final values; reset them so they can count up
    const values = valueRefs.current;
    values.forEach((v) => v && (v.textContent = "0"));
    let raf = 0;
    let timer = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        el.classList.add(styles.played);

        timer = window.setTimeout(() => {
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / COUNT_MS, 1);
            const e = easeOutCubic(t);
            STATS.forEach((s, i) => {
              const v = values[i];
              if (v) v.textContent = String(Math.round(s.value * e));
            });
            if (t < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }, COUNT_DELAY_MS);
      },
      { threshold: 0.6 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <ul
      ref={ref}
      className={styles.stats}
      style={{ "--part-ms": `${PART_MS}ms` } as React.CSSProperties}
    >
      {STATS.map((s, i) => (
        <li
          key={s.label}
          className={styles.stat}
          style={{ "--x": X[i], "--i": i } as React.CSSProperties}
        >
          <span className={styles.line} aria-hidden="true" />
          <span className={styles.srOnly}>
            {`${s.value}${s.suffix ?? ""}${s.sup ?? ""} ${s.label.replace("\n", " ")}`}
          </span>
          <span className={styles.content} aria-hidden="true">
            <span className={styles.number}>
              <span ref={(node) => { valueRefs.current[i] = node; }}>{s.value}</span>
              {s.suffix}
              {s.sup && <sup className={styles.sup}>{s.sup}</sup>}
            </span>
            <span className={styles.label}>{s.label}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
