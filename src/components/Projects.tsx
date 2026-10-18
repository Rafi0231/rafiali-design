"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AutoplayVideo from "./AutoplayVideo";
import styles from "./Projects.module.css";

type VideoProps = { src: string; poster: string; width: number; height: number; label: string };

// A grey mat with a video or image inset in it; Figma px inside the card
type Frame = {
  mat: [x: number, y: number, w: number, h: number];
  inner: [x: number, y: number, w: number, h: number];
  radius: number;
  // which part of the media to keep when the frame crops it (default top)
  position?: "top" | "center" | "bottom";
} & ({ video: VideoProps } | { image: string });

type Project = {
  title: string;
  tags: string[];
  description: string;
  role: string;
  outcome: string;
  numeral: string;
  href: string;
  frames: Frame[];
  // Figma px inside the card, which differ between projects
  layout: {
    pillsTop: number;
    desc: [top: number, width: number];
    summary: [top: number, width: number];
    button: [x: number, y: number];
    numeralTracking?: string;
  };
};

const projects: Project[] = [
  {
    title: "Islamicly",
    tags: ["Learning", "Research", "AI"],
    description:
      "Rebuilding how we study online. Most learning apps run on decade-old design, so I designed Islamicly: a warm, library-like platform with an AI layer that tailors each lesson to the student.",
    role: "Solo product designer",
    outcome: "Presented to a school board of education",
    numeral: "01",
    href: "/projects/islamicly",
    frames: [
      {
        mat: [584, 106, 788, 517],
        inner: [9, 9, 770, 501],
        radius: 15,
        video: {
          src: "/videos/islamicly/islamicly-loop.mp4",
          poster: "/videos/islamicly/islamicly-loop-poster.webp",
          width: 1920,
          height: 1246,
          label: "A walkthrough of the Islamicly learning platform",
        },
      },
    ],
    layout: {
      pillsTop: 147,
      desc: [224, 450],
      summary: [393, 328],
      button: [328, 637],
    },
  },
  {
    title: "Clarity",
    tags: ["System Design", "Research", "AI", "Live"],
    description:
      "An AI-assisted calculator for zakat, the 2.5% annual charity Muslims owe on wealth held for a year. Describe your money in plain words, or answer seven short questions.",
    role: "Designer and Engineer (solo)",
    outcome: "Live · 135 automated tests · Tested by an Islamic scholar",
    numeral: "02",
    href: "/projects/clarity",
    frames: [
      {
        mat: [596, 159, 824, 445],
        inner: [9, 9, 806, 428],
        radius: 10,
        video: {
          src: "/videos/clarity/clarity-loop.mp4",
          poster: "/videos/clarity/clarity-loop-poster.webp",
          width: 1920,
          height: 1200,
          label: "A walkthrough of the Clarity zakat calculator",
        },
      },
    ],
    layout: {
      pillsTop: 151,
      desc: [235, 484],
      summary: [402, 466],
      button: [382, 619],
    },
  },
  {
    title: "Justice Is a Right",
    tags: ["First Author", "Research", "VR", "IBM Badge"],
    description:
      "A walk-in VR Community Hub that shows how food access shapes behavior. Every food in the Hub carries a research finding, like the link between omega-3s and aggression.",
    role: "Team Lead of 4 · Directed Research · Designed Community Hub",
    outcome: "A walk-in VR Community Hub · Accepted into ACM COMPASS ’26",
    numeral: "03",
    href: "/projects/justice-is-a-right",
    frames: [
      {
        mat: [686, 174, 718, 410],
        inner: [8, 6, 704, 396],
        radius: 10,
        // crops the thin black strip at the top of the footage
        position: "bottom",
        video: {
          src: "/videos/jiar/jiar-loop.mp4",
          poster: "/videos/jiar/jiar-loop-poster.webp",
          width: 1920,
          height: 1120,
          label: "Two people walk through the VR Community Hub on a curved screen wall",
        },
      },
    ],
    layout: {
      pillsTop: 151,
      desc: [236, 569],
      summary: [378, 559],
      button: [452, 637],
    },
  },
  {
    title: "Light to the Artists",
    tags: ["Presented", "Research", "Illustrator"],
    description:
      "A poster system for the Chicago Art Department. The frame stays the same and the color changes, so each artist still looks like themselves",
    role: "Solo Designer · Researcher",
    outcome: "Presented and exhibited at the Chicago Art Department",
    numeral: "04",
    href: "/projects/light-to-the-artists",
    frames: [
      { mat: [721, 173, 283, 431], inner: [9, 8, 266, 413], radius: 0, image: "/images/Sarah.webp" },
      { mat: [1078, 244, 283, 432], inner: [7, 8, 268, 417], radius: 0, image: "/images/Jassiel.webp" },
    ],
    layout: {
      pillsTop: 151,
      desc: [248, 484],
      summary: [402, 457],
      button: [350, 619],
      numeralTracking: "-0.1em",
    },
  },
];

const layoutVars = ({ layout: l }: Project) =>
  ({
    "--pills-top": l.pillsTop,
    "--desc-top": l.desc[0],
    "--desc-width": l.desc[1],
    "--summary-top": l.summary[0],
    "--summary-width": l.summary[1],
    "--btn-x": l.button[0],
    "--btn-y": l.button[1],
    ...(l.numeralTracking && { "--numeral-tracking": l.numeralTracking }),
  }) as React.CSSProperties;

const frameVars = (f: Frame) =>
  ({
    "--mat-x": f.mat[0],
    "--mat-y": f.mat[1],
    "--mat-w": f.mat[2],
    "--mat-h": f.mat[3],
    "--inner-x": f.inner[0],
    "--inner-y": f.inner[1],
    "--inner-w": f.inner[2],
    "--inner-h": f.inner[3],
    "--inner-radius": f.radius,
    "--media-pos": f.position ?? "top",
  }) as React.CSSProperties;

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // heading and each card fade up as they scroll in
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

    section.querySelectorAll(`.${styles.heading}, .${styles.cardWrap}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={styles.section} ref={sectionRef}>
      <h2 className={styles.heading}>Projects</h2>

      <div className={styles.list}>
        {projects.map((project) => (
          <article key={project.numeral} className={styles.cardWrap}>
            <div className={styles.card} style={layoutVars(project)}>
              <h3 className={styles.cardTitle}>{project.title}</h3>

              <div className={styles.pills}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.pill}>
                    {tag}
                  </span>
                ))}
              </div>

              <p className={styles.description}>{project.description}</p>

              <dl className={styles.summary}>
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>{project.outcome}</dd>
                </div>
              </dl>

              <span className={styles.ghostNumeral} aria-hidden="true">
                {project.numeral}
              </span>

              {project.frames.map((frame, i) => (
                <div key={i} className={styles.mat} style={frameVars(frame)}>
                  <div className={styles.frame}>
                    {"video" in frame ? (
                      <AutoplayVideo {...frame.video} className={styles.media} />
                    ) : (
                      <Image src={frame.image} alt="" fill sizes="20vw" className={styles.media} />
                    )}
                  </div>
                </div>
              ))}

              {/* stretches over the whole card, so anywhere on it opens the case study */}
              <Link href={project.href} className={styles.cardLink}>
                <span className={styles.viewBtn}>View Project</span>
                <span className={styles.srOnly}>: {project.title}</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
