import Image from "next/image";
import AutoplayVideo from "@/components/AutoplayVideo";
import FlowCaseStudyLayout, { Section } from "@/components/FlowCaseStudyLayout";
import content from "@/components/caseStudyContent.module.css";
import styles from "./jiar.module.css";

const IMAGE_QUALITY = 90;

/* Showtime photos render at ~567, ~397 and ~336px of a 1512 frame; nearly full card width on phones */
const SHOWTIME_IMAGES = {
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

/* sketches render at ~351px of a 1512 frame; two-up on phones */
const REPRESENT_SIZES = "(max-width: 767px) 45vw, 24vw";
const REPRESENT_IMAGES = [
  {
    src: "/images/jiar/EmptyScale.webp",
    alt: "Sketch of an empty, balanced scale",
    width: 1125,
    height: 851,
    caption: "Image 1: empty scale",
  },
  {
    src: "/images/jiar/Obstacles.webp",
    alt: "Sketch of the scale tipped left under violence, poverty, and crime",
    width: 1126,
    height: 848,
    caption: "Image 2: obstacles on the left side",
  },
  {
    src: "/images/jiar/HubButton.webp",
    alt: "Sketch of the tipped scale with a green Community Hub button beside it",
    width: 1123,
    height: 850,
    caption: "Image 3: “Community Hub” button appears",
  },
  {
    src: "/images/jiar/Balanced.webp",
    alt: "Sketch of the scale balanced again once Community Hubs are added to the right side",
    width: 1128,
    height: 847,
    caption: "Image 4: the balance after Community Hubs implemented",
  },
] as const;

/* sketches render at ~316px, research pages at ~270px of a 1512 frame; two-up on phones */
const TURN_SKETCHES = [
  {
    src: "/images/jiar/Sketch1.webp",
    alt: "First storyboard: six hand-drawn panels moving from the tipped scale into a Community Hub food room",
    width: 1538,
    height: 1889,
    caption: "Sketch iteration 1",
  },
  {
    src: "/images/jiar/Sketch2.webp",
    alt: "Second storyboard: six panels with a Nutrition vs. Food board and a Community Events wall inside the Hub",
    width: 1112,
    height: 1366,
    caption: "Sketch iteration 2",
  },
] as const;
const TURN_RESEARCH = [
  {
    src: "/images/jiar/Research1.webp",
    alt: "Research document page: Walkthrough Layout, listing foods and their links to mood and behavior",
    width: 822,
    height: 1064,
  },
  {
    src: "/images/jiar/Research2.webp",
    alt: "Research document page: food categories, type ideas, and the order of interactions in the Hub",
    width: 822,
    height: 1060,
  },
] as const;

export default function JIARPage() {
  return (
    <FlowCaseStudyLayout
      title="Justice Is a Right"
      background="#B9ADA3"
      titleTracking="0"
      ruleColor="rgba(107, 82, 68, 0.4)"
    >
      <Section heading="The Verdict">
        <div className={styles.verdict}>
          <div className={`${content.textBlock} ${styles.verdictText}`}>
            <h3 className={content.overviewHeading}>Overview</h3>
            <ul className={content.overviewList}>
              <li><em>Role</em>: Team Lead, Lead Researcher, &amp; Poster Author</li>
              <li><em>Team</em>: 4 (design, development, CS)</li>
              <li><em>Timeline</em>: Spring 2026 &middot; Creative Coding</li>
              <li><em>Tools</em>: Unity, C#, Illustrator, Maya</li>
              <li><em>Status</em>: Accepted to ACM COMPASS 2026 and first&nbsp;author</li>
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

          <figure className={styles.verdictVideo}>
            <div className={content.slidePanel}>
              <AutoplayVideo
                src="/videos/jiar/JIAR-demo.mp4"
                poster="/videos/jiar/JIAR-demo-poster.webp"
                width={1600}
                height={894}
                label="Demo of the Community Hub on a curved screen wall: two people walk in and use the grab-or-trash food board"
                className={styles.videoEl}
              />
            </div>
            <figcaption className={content.draftCaption}>(Presentation Video)</figcaption>
          </figure>
        </div>
      </Section>
      <Section heading="The Assignment">
        <div className={`${content.textBlock} ${styles.assignment}`}>
          <p className={content.statusRow}>
            <span className={content.statusLabel}>Brief &middot;</span> Choose a UN
            Sustainable Development Goal and build an interactive experience around
            it.
          </p>
          <p className={content.statusRow}>
            <span className={content.statusLabel}>Our goal &middot;</span> Goal 16:
            peaceful, inclusive societies with access to justice for all.
          </p>
          <p className={content.statusRow}>
            <span className={content.statusLabel}>Challenge &middot;</span> How do
            you make justice something people can see and interact with?
          </p>
        </div>
      </Section>
      <Section heading="How do you represent Justice?">
        <div className={styles.represent}>
          <div className={`${content.textBlock} ${styles.representText}`}>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>Concept &middot;</span> A scale
              where Community Hubs balance out poverty, violence, and crime.
            </p>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>Critique &middot;</span>{" "}
              &ldquo;You&rsquo;re bringing attention to the problem, but where&rsquo;s
              the solution.&rdquo;
            </p>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>What changed &middot;</span> The
              Hub had to become a real place people could walk into, not an abstract
              button.
            </p>
          </div>

          <div className={styles.representGrid}>
            {REPRESENT_IMAGES.map(({ caption, ...image }) => (
              <figure key={image.src} className={styles.representFigure}>
                <div className={content.slidePanel}>
                  <Image
                    {...image}
                    alt={image.alt}
                    sizes={REPRESENT_SIZES}
                    quality={IMAGE_QUALITY}
                    className={`${content.slideImg} ${styles.representImg}`}
                  />
                </div>
                <figcaption className={content.draftCaption}>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>
      <Section heading="The Turn">
        <div className={styles.turn}>
          <div className={`${content.textBlock} ${styles.turnText}`}>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>Insight &middot;</span> Everyone
              connects guns and crime. We looked at diet and crime, because access is
              something a community can change.
            </p>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>Research &middot;</span> I led
              the research. Every food in the Hub carries a real finding, like
              omega-3s and aggression, or ultra-processed food and addiction-like
              eating.
            </p>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>What changed &middot;</span> The
              research became the game&rsquo;s content.
            </p>
          </div>

          <div className={styles.turnImages}>
            <div className={styles.turnSketches}>
              {TURN_SKETCHES.map(({ caption, ...image }) => (
                <figure key={image.src} className={styles.turnFigure}>
                  <div className={content.slidePanel}>
                    <Image
                      {...image}
                      alt={image.alt}
                      sizes="(max-width: 767px) 45vw, 22vw"
                      quality={IMAGE_QUALITY}
                      className={content.slideImg}
                    />
                  </div>
                  <figcaption className={content.draftCaption}>{caption}</figcaption>
                </figure>
              ))}
            </div>

            <figure className={`${styles.turnFigure} ${styles.turnResearch}`}>
              <div className={`${content.slidePanel} ${styles.researchPanel}`}>
                {TURN_RESEARCH.map((image) => (
                  <Image
                    key={image.src}
                    {...image}
                    alt={image.alt}
                    sizes="(max-width: 767px) 45vw, 19vw"
                    quality={IMAGE_QUALITY}
                    className={`${content.slideImg} ${styles.researchImg}`}
                  />
                ))}
              </div>
              <figcaption className={content.draftCaption}>(Pages from research)</figcaption>
            </figure>
          </div>
        </div>
      </Section>
      <Section heading="Showtime">
        <div className={styles.showtime}>
          <div className={`${content.textBlock} ${styles.showtimeText}`}>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>Constraint &middot;</span> Make
              the link between diet and behavior understandable without blaming the
              people in those communities.
            </p>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>My solution &middot;</span> A
              walk-in Community Hub where players grab or trash each food and see how
              it could affect behavior.
            </p>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>Team &middot;</span> I set the
              direction and led research. One teammate built the 3D Hub from my
              sketches, and another coded the interactions.
            </p>
          </div>

          <div className={styles.showtimeImages}>
            <figure className={`${styles.showtimeFigure} ${styles.presentation}`}>
              <div className={content.slidePanel}>
                <Image
                  {...SHOWTIME_IMAGES.presentation}
                  alt={SHOWTIME_IMAGES.presentation.alt}
                  quality={IMAGE_QUALITY}
                  className={content.slideImg}
                />
              </div>
              <figcaption className={content.slideCaption}>Presentation Image</figcaption>
            </figure>

            <div className={styles.showtimeRow}>
              <figure className={`${styles.showtimeFigure} ${styles.acceptance}`}>
                <div className={content.slidePanel}>
                  <Image
                    {...SHOWTIME_IMAGES.acceptance}
                    alt={SHOWTIME_IMAGES.acceptance.alt}
                    quality={IMAGE_QUALITY}
                    className={content.slideImg}
                  />
                </div>
                <figcaption className={content.slideCaption}>Poster acceptance</figcaption>
              </figure>
              <figure className={`${styles.showtimeFigure} ${styles.teamPicture}`}>
                <div className={content.slidePanel}>
                  <Image
                    {...SHOWTIME_IMAGES.teamPicture}
                    alt={SHOWTIME_IMAGES.teamPicture.alt}
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
    </FlowCaseStudyLayout>
  );
}
