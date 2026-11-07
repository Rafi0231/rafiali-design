import Image from "next/image";
import AutoplayVideo from "@/components/AutoplayVideo";
import {
  Chapter,
  Hang,
  Note,
  Opener,
  SIZES,
  Statement,
  Work,
  editorial as e,
} from "@/components/Editorial";
import FlowCaseStudyLayout from "@/components/FlowCaseStudyLayout";
import styles from "./jiar.module.css";

const FACTS = [
  [
    "Problem",
    "Conversations about crime in underserved communities usually focus on what happens after, not what’s behind it. One factor that rarely comes up is diet, and how it shapes behavior.",
  ],
  [
    "My role",
    "I led research and design on a team of four, and I was first author on the research paper.",
  ],
  [
    "Key decisions",
    "We grounded the game in research on how diet affects behavior. The centerpiece is a Community Hub, so players see a practical, community-led way forward instead of just the problem.",
  ],
  [
    "Outcome",
    "Our 6-page paper was accepted to ACM COMPASS 2026 as a poster, with me as first author.",
  ],
] as const;

const SHOWTIME_IMAGES = {
  presentation: {
    src: "/images/jiar/Presentation.webp",
    alt: "Presenting the project on a curved wall of screens showing the virtual community hub",
    width: 2098,
    height: 1399,
  },
  acceptance: {
    src: "/images/jiar/Acceptance.webp",
    alt: "Acceptance email: Congratulations! We are pleased to inform that your paper has been accepted.",
    width: 1295,
    height: 218,
  },
  teamPicture: {
    src: "/images/jiar/TeamPicture.webp",
    alt: "Three team members standing in front of the curved screen wall",
    width: 1906,
    height: 1271,
  },
} as const;

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
    caption: "Image 4: the balance after Community Hubs\u00A0implemented",
  },
] as const;

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
      background="#E7E1D6"
      titleTracking="-0.025em"
      ruleColor="rgba(107, 82, 68, 0.4)"
    >
      <Opener
        headline="A VR game about how diet and justice connect"
        timeline="Spring 2026 · Creative Coding"
        tools="Unity, C#, Illustrator, Maya"
        facts={FACTS}
      >
        <figure>
          <AutoplayVideo
            src="/videos/jiar/JIAR-demo.mp4"
            poster="/videos/jiar/JIAR-demo-poster.webp"
            width={1600}
            height={894}
            label="Demo of the Community Hub on a curved screen wall: two people walk in and use the grab-or-trash food board"
            className={styles.video}
          />
          <figcaption className={e.caption}>(Presentation Video)</figcaption>
        </figure>
      </Opener>

      <Chapter title="The Verdict" className={e.split}>
        <div className={e.splitText}>
          <Note label="Presented">To professors, students, and an IBM&nbsp;representative.</Note>
          <Note label="Recognition">IBM Open Project Developer Level II badges.</Note>
        </div>
      </Chapter>

      <Chapter title="The Assignment" className={e.split}>
        <div className={e.twoUp}>
          <div>
            <Note label="Brief">
              Choose a UN Sustainable Development Goal and build an interactive
              experience around it.
            </Note>
          </div>
          <div>
            <Note label="Our goal">
              Goal 16: peaceful, inclusive societies with access to justice for all.
            </Note>
          </div>
        </div>
        <Statement label="Challenge" className={e.placed}>
          How do you make justice something people can see and interact with?
        </Statement>
      </Chapter>

      <Chapter title="How do you represent Justice?">
        <div className={e.twoUp}>
          <div>
            <Note label="Concept">
              A scale where Community Hubs balance out poverty, violence, and crime.
            </Note>
          </div>
        </div>
        <Statement label="Critique" className={e.placed}>
          <Hang>&ldquo;</Hang>You&rsquo;re bringing attention to the problem, but
          where&rsquo;s the solution.&rdquo;
        </Statement>
        <div className={e.pair}>
          <div className={e.pairText}>
            <Note label="What changed">
              The Hub had to become a real place people could walk into, not an
              abstract button.
            </Note>
          </div>
          <div className={`${e.pairWork} ${styles.sketchGrid}`}>
            {REPRESENT_IMAGES.map(({ caption, ...image }) => (
              <Work key={image.src} {...image} sizes={SIZES.quarter} caption={caption} />
            ))}
          </div>
        </div>
      </Chapter>

      <Chapter title="The Turn" room>
        <div className={e.twoUp}>
          <div>
            <Note label="Insight">
              Everyone connects guns and crime. We looked at diet and crime, because
              access is something a community can change.
            </Note>
          </div>
          <div>
            <Note label="Research">
              I led the research. Every food in the Hub carries a real finding, like
              omega-3s and aggression, or ultra-processed food and addiction-like
              eating.
            </Note>
          </div>
        </div>
        <Statement label="What changed" className={e.placed}>
          The research became the game&rsquo;s content.
        </Statement>
        <div className={e.row}>
          {TURN_SKETCHES.map(({ caption, ...image }) => (
            <Work key={image.src} {...image} sizes={SIZES.quarter} caption={caption} />
          ))}
          <figure className={e.figure} style={{ "--ratio": 1.55 } as React.CSSProperties}>
            <div className={styles.researchPages}>
              {TURN_RESEARCH.map((image) => (
                <Image
                  key={image.src}
                  {...image}
                  alt={image.alt}
                  sizes={SIZES.quarter}
                  quality={90}
                  className={e.workImg}
                />
              ))}
            </div>
            <figcaption className={e.caption}>(Pages from research)</figcaption>
          </figure>
        </div>
      </Chapter>

      <Chapter title="Showtime" last>
        <Statement label="Constraint" size="small" className={e.placed}>
          Make the link between diet and behavior understandable without blaming
          the people in those&nbsp;communities.
        </Statement>
        <div className={e.twoUp}>
          <div>
            <Note label="My solution">
              A walk-in Community Hub where players grab or trash each food and see
              how it could affect behavior.
            </Note>
          </div>
          <div>
            <Note label="Team">
              I set the direction and led research. One teammate built the 3D Hub
              from my sketches, and another coded the interactions.
            </Note>
          </div>
        </div>
        <div className={e.row}>
          <Work {...SHOWTIME_IMAGES.presentation} sizes={SIZES.half} caption="Presentation Image" />
          <Work {...SHOWTIME_IMAGES.teamPicture} sizes={SIZES.half} caption="Team Picture (4th group member absent)" />
        </div>
        <div className={e.wide}>
          <Work {...SHOWTIME_IMAGES.acceptance} sizes={SIZES.full} caption="Poster acceptance" />
        </div>
      </Chapter>
    </FlowCaseStudyLayout>
  );
}
