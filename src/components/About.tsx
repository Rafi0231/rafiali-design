"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import BorderGlow from "./BorderGlow";
import styles from "./About.module.css";
import pillStyles from "./GlassPill.module.css";

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
      <hr className={styles.rule} />

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
            className={styles.img}
          />
        </BorderGlow>
      </div>

      <h3
        className={`${styles.bgHeading} ${styles.revealItem}`}
        style={{ transitionDelay: "120ms" }}
      >
        Background
      </h3>

      <p
        className={`${styles.bgBody} ${styles.revealItem}`}
        style={{ transitionDelay: "160ms" }}
      >
        I&rsquo;m a designer and engineer based in Chicago — studying Computer
        Science and Digital Design at the University of Illinois Chicago.
        I founded Lantern Software to build tools that sit at the intersection
        of faith, culture, and craft. My work spans interface design, VR, and
        design systems, always grounded in research and driven by the people I
        build for.
      </p>

      <h3
        className={`${styles.dpHeading} ${styles.revealItem}`}
        style={{ transitionDelay: "200ms" }}
      >
        Design Philosophy
      </h3>

      <p
        className={`${styles.dpBody} ${styles.revealItem}`}
        style={{ transitionDelay: "240ms" }}
      >
        Good design disappears. It earns trust through restraint — every
        decision justified, nothing decorative. I work from Figma specs to
        shipped code, keeping the gap between intent and implementation as
        small as possible. I believe the best systems feel inevitable, not
        invented.
      </p>

      <div
        className={`${styles.pillWrap} ${styles.pillResume} ${styles.revealItem}`}
        style={{ transitionDelay: "280ms" }}
      >
        <div className={pillStyles.buttonWrap}>
          <a
            href="/Rafi-Ali-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={pillStyles.pill}
          >
            <span className={pillStyles.pillSpan}>Resume</span>
          </a>
          <div className={pillStyles.buttonShadow} />
        </div>
      </div>

      <div
        className={`${styles.pillWrap} ${styles.pillLinkedIn} ${styles.revealItem}`}
        style={{ transitionDelay: "320ms" }}
      >
        <div className={pillStyles.buttonWrap}>
          <a
            href="https://www.linkedin.com/in/rafi-ali-design"
            target="_blank"
            rel="noopener noreferrer"
            className={pillStyles.pill}
          >
            <span className={pillStyles.pillSpan}>LinkedIn</span>
          </a>
          <div className={pillStyles.buttonShadow} />
        </div>
      </div>
    </section>
  );
}
