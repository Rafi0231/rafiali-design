"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./About.module.css";
import link from "./TextLink.module.css";

const links = [
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

      <div className={styles.body}>
        <div className={`${styles.photo} ${styles.revealItem}`} style={{ transitionDelay: "80ms" }}>
          <Image
            src="/images/AboutPic.webp"
            alt="Rafi Ali"
            fill
            sizes="(max-width: 1023px) 92vw, 30vw"
            className={styles.img}
          />
        </div>

        <div className={styles.text}>
          <div className={`${styles.block} ${styles.revealItem}`} style={{ transitionDelay: "120ms" }}>
            <h3 className={styles.label}>Background</h3>
            <p className={styles.paragraph}>
              I design products and build them, from the first sketch to the deployed
              code. I grew up in Skokie and study Computer Science and Design at the
              University of Illinois Chicago. I also run Lantern Software, a studio
              making tools for Muslim communities. It works like a charitable
              endowment: a fixed share of revenue funds food, water, and education in
              underserved communities.
            </p>
          </div>

          <div className={`${styles.block} ${styles.revealItem}`} style={{ transitionDelay: "160ms" }}>
            <h3 className={styles.label}>Design Philosophy</h3>
            <p className={styles.paragraph}>
              Every design I make is centered around an audience. I find joy in
              bringing a mix of algorithmic and creative approaches to complex
              problems. It&rsquo;s a combination that I believe is underused and can
              build incredible tools if practiced more.
            </p>
          </div>

          <ul className={`${styles.links} ${styles.revealItem}`} style={{ transitionDelay: "200ms" }}>
            {links.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className={link.textLink}
                >
                  <span className={link.line}>
                    {item.label}
                    <span aria-hidden="true"> →</span>
                  </span>
                  {item.external && <span className={styles.srOnly}> (opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
