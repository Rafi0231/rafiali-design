"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AutoplayVideo from "./AutoplayVideo";
import styles from "./Projects.module.css";
import link from "./TextLink.module.css";

type VideoProps = { src: string; poster: string; width: number; height: number; label: string };

type Media =
  | { video: VideoProps }
  | { image: string; alt: string; width: number; height: number };

type Project = {
  title: string;
  // the one-line claim, the same headline the case study opens with
  claim: string;
  description: string;
  role: string;
  outcome: string;
  numeral: string;
  href: string;
  media: Media[];
};

const projects: Project[] = [
  {
    title: "Islamicly",
    claim: "A study app that changes when you struggle",
    description:
      "Most learning apps run on decade-old design, so I designed Islamicly: a warm, library-like platform with an AI layer that tailors each lesson to the student.",
    role: "Solo product designer",
    outcome: "Class demo · School pilot in progress",
    numeral: "01",
    href: "/projects/islamicly",
    media: [
      {
        video: {
          src: "/videos/islamicly/islamicly-loop.mp4",
          poster: "/videos/islamicly/islamicly-loop-poster.webp",
          width: 1920,
          height: 1246,
          label: "A walkthrough of the Islamicly learning platform",
        },
      },
    ],
  },
  {
    title: "Clarity",
    claim: "A zakat calculator you can just talk to",
    description:
      "Zakat is the 2.5% annual charity Muslims owe on wealth held for a year. Describe your money in plain words, or answer seven short questions.",
    role: "Designer and engineer (solo)",
    outcome: "Live · 135 automated tests · Tested by an Islamic scholar",
    numeral: "02",
    href: "/projects/clarity",
    media: [
      {
        video: {
          src: "/videos/clarity/clarity-loop.mp4",
          poster: "/videos/clarity/clarity-loop-poster.webp",
          width: 1920,
          height: 1200,
          label: "A walkthrough of the Clarity zakat calculator",
        },
      },
    ],
  },
  {
    title: "Justice Is a Right",
    claim: "A VR game about how diet and justice connect",
    description:
      "A walk-in VR Community Hub that shows how food access shapes behavior. Every food in the Hub carries a research finding, like the link between omega-3s and aggression.",
    role: "Team lead of 4 · Directed research · Designed the Community Hub",
    outcome: "First author · Accepted into ACM COMPASS ’26",
    numeral: "03",
    href: "/projects/justice-is-a-right",
    media: [
      {
        video: {
          src: "/videos/jiar/jiar-loop.mp4",
          poster: "/videos/jiar/jiar-loop-poster.webp",
          width: 1920,
          height: 1084,
          label: "Two people walk through the VR Community Hub on a curved screen wall",
        },
      },
    ],
  },
  {
    title: "Light to the Artists",
    claim: "A poster system that puts artists first",
    description:
      "Posters for the Chicago Art Department. The frame stays the same and the color changes, so each artist still looks like themselves.",
    role: "Solo designer and researcher",
    outcome: "Presented and exhibited at the Chicago Art Department",
    numeral: "04",
    href: "/projects/light-to-the-artists",
    media: [
      { image: "/images/Sarah.webp", alt: "Poster for the artist Sarah Whyte", width: 636, height: 987 },
      { image: "/images/Jassiel.webp", alt: "Poster for the artist Jassiel Serna", width: 638, height: 988 },
    ],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // heading and each project fade up as they scroll in
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    section.querySelectorAll(`.${styles.heading}, .${styles.project}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={styles.section} ref={sectionRef}>
      <h2 className={styles.heading}>Projects</h2>

      <div className={styles.list}>
        {projects.map((project) => (
          <article key={project.numeral} className={`${styles.project} ${link.swapTrigger}`}>
            <p className={styles.label}>
              {project.numeral} / {project.title}
            </p>

            <h3 className={styles.claim}>{project.claim}</h3>

            <div className={styles.media} data-count={project.media.length}>
              {project.media.map((m, i) =>
                "video" in m ? (
                  <AutoplayVideo
                    key={i}
                    {...m.video}
                    className={styles.mediaItem}
                  />
                ) : (
                  <Image
                    key={i}
                    src={m.image}
                    alt={m.alt}
                    width={m.width}
                    height={m.height}
                    sizes="(max-width: 1023px) 45vw, 25vw"
                    className={styles.mediaItem}
                  />
                )
              )}
            </div>

            <p className={styles.description}>{project.description}</p>

            <dl className={styles.facts}>
              <div className={styles.fact}>
                <dt className={styles.factLabel}>Role</dt>
                <dd className={styles.factText}>{project.role}</dd>
              </div>
              <div className={styles.fact}>
                <dt className={styles.factLabel}>Outcome</dt>
                <dd className={styles.factText}>{project.outcome}</dd>
              </div>
            </dl>

            {/* stretches over the whole project, so anywhere on it opens the case study */}
            <Link href={project.href} className={`${styles.link} ${link.textLink}`}>
              <span className={link.line}>
                View case study<span className={styles.srOnly}>: {project.title}</span>
                <span aria-hidden="true"> →</span>
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
