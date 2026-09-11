"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Projects.module.css";

type SingleImageProject = {
  title: string;
  tags: string[];
  description: ReactNode;
  numeral: string;
  href: string;
  imageType: "single";
  image: string;
};

type PostersProject = {
  title: string;
  tags: string[];
  description: ReactNode;
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
    description:
      "Lantern Software’s flagship product: an AI-assisted Islamic learning platform, balancing religious sacredness while integrating new technology paired with a minimalist aesthetic.",
    numeral: "01",
    href: "/projects/islamicly",
  },
  {
    title: "Justice Is a Right",
    tags: ["Published", "Research", "VR"],
    imageType: "single",
    image: "/images/JIAR_IM.webp",
    description: (
      <>
        Led a team across four disciplines to create a VR game that built a
        correlation between dietary constraints within underserved communities
        and crimes committed in said community. Accepted into{" "}
        <strong>COMPASS 2026</strong> and earned the{" "}
        <strong>Open Project Developer Level II badge</strong> from IBM.
      </>
    ),
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
    description:
      "Interviews with CAD artists leading to building a design system that brings attention to artists through correlations between colors, moods and individual voices to build a coherent system.",
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
          <article className={styles.card}>
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

            <p className={styles.description}>{project.description}</p>

            <span className={styles.ghostNumeral} aria-hidden="true">
              {project.numeral}
            </span>

            <Link href={project.href} className={styles.exploreBtn}>
              Explore
            </Link>
          </article>
        </div>
      ))}
    </section>
  );
}
