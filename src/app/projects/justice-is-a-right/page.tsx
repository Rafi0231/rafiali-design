import Image from "next/image";
import FlowCaseStudyLayout, { Section } from "@/components/FlowCaseStudyLayout";
import content from "@/components/caseStudyContent.module.css";
import styles from "./jiar.module.css";

const IMAGE_QUALITY = 90;

/* render at ~567, ~397 and ~336px of a 1512 frame; nearly full card width on phones */
const VERDICT_IMAGES = {
  presentation: {
    src: "/images/jiar/Presentation.webp",
    alt: "Presenting the project on a curved wall of screens showing the virtual community hub",
    width: 2098,
    height: 1399,
    sizes: "(max-width: 767px) 90vw, 38vw",
  },
  acceptance: {
    src: "/images/jiar/Acceptance.webp",
    alt: "Acceptance email: Congratulations! We are pleased to inform that your paper has been accepted.",
    width: 1295,
    height: 218,
    sizes: "(max-width: 767px) 90vw, 27vw",
  },
  teamPicture: {
    src: "/images/jiar/TeamPicture.webp",
    alt: "Three team members standing in front of the curved screen wall",
    width: 1906,
    height: 1271,
    sizes: "(max-width: 767px) 90vw, 23vw",
  },
} as const;

export default function JIARPage() {
  return (
    <FlowCaseStudyLayout title="Justice Is a Right">
      <Section heading="The Verdict">
        <div className={styles.verdict}>
          <div className={`${content.textBlock} ${styles.verdictText}`}>
            <h3 className={content.overviewHeading}>Overview</h3>
            <ul className={content.overviewList}>
              <li><em>Role</em>: Team Lead, Lead Researcher, &amp; Poster Author</li>
              <li><em>Team</em>: 4 (design, development, CS)</li>
              <li><em>Timeline</em>: Spring 2026 &middot; Creative Coding</li>
              <li><em>Tools</em>: Unity, C#, Illustrator, Maya</li>
              <li><em>Status</em>: Accepted to ACM COMPASS 2026 as first&nbsp;author</li>
            </ul>

            <hr className={content.divider} />

            <p className={content.statusRow}>
              <span className={content.statusLabel}>Presented &middot;</span> To
              professors, students, and an IBM representative.
            </p>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>Recognition &middot;</span> IBM
              Open Project Developer Level II badges.
            </p>
          </div>

          <div className={styles.verdictImages}>
            <figure className={`${styles.verdictFigure} ${styles.presentation}`}>
              <div className={content.slidePanel}>
                <Image
                  {...VERDICT_IMAGES.presentation}
                  alt={VERDICT_IMAGES.presentation.alt}
                  quality={IMAGE_QUALITY}
                  loading="eager"
                  className={content.slideImg}
                />
              </div>
              <figcaption className={content.slideCaption}>Presentation Image</figcaption>
            </figure>

            <div className={styles.verdictRow}>
              <figure className={`${styles.verdictFigure} ${styles.acceptance}`}>
                <div className={content.slidePanel}>
                  <Image
                    {...VERDICT_IMAGES.acceptance}
                    alt={VERDICT_IMAGES.acceptance.alt}
                    quality={IMAGE_QUALITY}
                    className={content.slideImg}
                  />
                </div>
                <figcaption className={content.slideCaption}>Poster acceptance</figcaption>
              </figure>
              <figure className={`${styles.verdictFigure} ${styles.teamPicture}`}>
                <div className={content.slidePanel}>
                  <Image
                    {...VERDICT_IMAGES.teamPicture}
                    alt={VERDICT_IMAGES.teamPicture.alt}
                    quality={IMAGE_QUALITY}
                    className={content.slideImg}
                  />
                </div>
                <figcaption className={content.slideCaption}>
                  Team Picture (4th group member absent)
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Section>
      <Section heading="The Assignment" />
      <Section heading="How do you represent Justice?" />
      <Section heading="The Turn" />
      <Section heading="Showtime" />
    </FlowCaseStudyLayout>
  );
}
