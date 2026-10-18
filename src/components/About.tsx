"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import BorderGlow from "./BorderGlow";
import styles from "./About.module.css";
import pillStyles from "./GlassPill.module.css";

const pills = [
  { label: "Email", href: "mailto:rafiali.design@gmail.com" },
  { label: "Resume", href: "/Rafi-Ali-Resume.pdf", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rafi-ali-design", external: true },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add(styles.visible);
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.section} ref={sectionRef}>
      <h2 className={styles.heading}>About</h2>

      <div
        className={`${styles.photo} ${styles.revealItem}`}
        style={{ transitionDelay: "80ms" }}
      >
        <BorderGlow
          className={styles.photoGlow}
          borderRadius={18}
          backgroundColor="#BBB6B6"
          glowColor="114 25% 40%"
          glowIntensity={0.6}
          edgeSensitivity={30}
          glowRadius={32}
          coneSpread={30}
          animated={false}
          colors={['#1F351D', '#8B6B5C', '#6B5244']}
        >
          <Image
            src="/images/AboutPic.webp"
            alt="Rafi Ali"
            fill
            sizes="28vw"
            className={styles.img}
          />
        </BorderGlow>
      </div>

      {/* each heading runs in to the start of its paragraph */}
      <div
        className={`${styles.block} ${styles.bgBlock} ${styles.revealItem}`}
        style={{ transitionDelay: "120ms" }}
      >
        <h3 className={styles.blockHeading}>Background</h3>
        <p className={styles.blockBody}>
          I design products and build them, from the first sketch to the deployed
          code. I grew up in Skokie and study Computer Science and Design at the
          University of Illinois Chicago. I also run Lantern Software, a studio
          making tools for Muslim communities. It works like a charitable
          endowment: a fixed share of revenue funds food, water, and education in
          underserved communities.
        </p>
      </div>

      <hr className={`${styles.divider} ${styles.revealItem}`} style={{ transitionDelay: "160ms" }} />

      <div
        className={`${styles.block} ${styles.dpBlock} ${styles.revealItem}`}
        style={{ transitionDelay: "200ms" }}
      >
        <h3 className={styles.blockHeading}>Design Philosophy</h3>
        <p className={styles.blockBody}>
          Every design I make is centered around an audience. I find joy in
          bringing a mix of algorithmic and creative approaches to complex
          problems. It&rsquo;s a combination that I believe is underused and can
          build incredible tools if practiced more.
        </p>
      </div>

      <div className={styles.pills}>
        {pills.map((pill, i) => (
          <div
            key={pill.label}
            className={`${styles.pillWrap} ${styles.revealItem}`}
            style={{ transitionDelay: `${240 + i * 40}ms` }}
          >
            <div className={pillStyles.buttonWrap}>
              <a
                href={pill.href}
                {...(pill.external && { target: "_blank", rel: "noopener noreferrer" })}
                className={pillStyles.pill}
              >
                <span className={pillStyles.pillSpan}>{pill.label}</span>
              </a>
              <div className={pillStyles.buttonShadow} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
