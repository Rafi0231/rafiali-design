"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.css";

type Summary = { audience: string; role: string; outcome: string };

type SingleImageProject = {
  title: string;
  tags: string[];
  summary: Summary;
  numeral: string;
  href: string;
  imageType: "single";
  image: string;
  imageSize: readonly [number, number];
};

type PostersProject = {
  title: string;
  tags: string[];
  summary: Summary;
  numeral: string;
  href: string;
  imageType: "posters";
  images: readonly [string, string, string];
};

type Project = SingleImageProject | PostersProject;

const projects: Project[] = [
  {
    title: "Islamicly",
    tags: ["Learning", "Research", "AI"],
    imageType: "single",
    image: "/images/IslamiclyIM.webp",
    imageSize: [1600, 1044],
    summary: {
      audience: "Muslim students and Islamic schools",
      role: "Solo product designer: research, user testing, and three rounds of iteration",
      outcome:
        "A full Islamic curriculum in one warm, library-inspired platform. In development as Lantern Software’s flagship",
    },
    numeral: "01",
    href: "/projects/islamicly",
  },
  {
    title: "Justice Is a Right",
    tags: ["Published", "Research", "VR"],
    imageType: "single",
    image: "/images/JIAR_IM.webp",
    imageSize: [2098, 1399],
    summary: {
      audience:
        "Decision-makers who can improve food access: policymakers, community organizations, and companies",
      role: "Led a team of 4, directed research, sketched the Community Hub, first author",
      outcome:
        "A walk-in VR Community Hub explaining the diet–behavior link. Paper accepted to ACM COMPASS 2026",
    },
    numeral: "02",
    href: "/projects/justice-is-a-right",
  },
  {
    title: "Light to the Artists",
    tags: ["Partnered", "Research", "System"],
    imageType: "posters",
    images: [
      "/images/Sarah.webp",
      "/images/Jassiel.webp",
      "/images/Catie.webp",
    ],
    summary: {
      audience: "Exhibition visitors at the Chicago Art Department",
      role: "Solo designer: artist interviews and the exhibition poster system",
      outcome:
        "A poster system that matches color to each artist’s style and voice, designed to highlight them at exhibitions",
    },
    numeral: "03",
    href: "/projects/light-to-the-artists",
  },
];

const cardLefts = ["6.085%", "37.368%", "68.717%"] as const;

export default function Projects() {
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
    <section id="projects" className={styles.section} ref={sectionRef}>
      <h2 className={styles.heading}>Projects</h2>
      <hr className={styles.rule} />

      {projects.map((project, i) => (
        <div
          key={project.numeral}
          className={styles.cardWrap}
          style={{
            left: cardLefts[i],
            transitionDelay: `${i * 80}ms`,
          }}
        >
          {/* the whole card is the link; its accessible name is "Explore <title>" */}
          <Link
            href={project.href}
            className={styles.card}
            aria-label={`Explore ${project.title}`}
          >
            <h3 className={styles.cardTitle}>{project.title}</h3>

            <div className={styles.pills}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.pill}>
                  {tag}
                </span>
              ))}
            </div>

            {project.imageType === "single" && (
              <div className={i === 0 ? styles.imageFrame1 : styles.imageFrame2}>
                <Image src={project.image} alt="" fill className={styles.img} />
              </div>
            )}

            {project.imageType === "posters" && (
              <>
                <div className={styles.poster1}>
                  <Image src={project.images[0]} alt="" fill className={styles.img} />
                </div>
                <div className={styles.poster2}>
                  <Image src={project.images[1]} alt="" fill className={styles.img} />
                </div>
                <div className={styles.poster3}>
                  <Image src={project.images[2]} alt="" fill className={styles.img} />
                </div>
              </>
            )}

            <dl className={styles.summary}>
              <div>
                <dt>Audience</dt> <dd>&middot; {project.summary.audience}</dd>
              </div>
              <div>
                <dt>My role</dt> <dd>&middot; {project.summary.role}</dd>
              </div>
              <div>
                <dt>Outcome</dt> <dd>&middot; {project.summary.outcome}</dd>
              </div>
            </dl>

            <span className={styles.ghostNumeral} aria-hidden="true">
              {project.numeral}
            </span>

            <span className={styles.exploreBtn} aria-hidden="true">
              Explore
            </span>
          </Link>
        </div>
      ))}
    </section>
  );
}
