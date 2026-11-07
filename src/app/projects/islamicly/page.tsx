import Image from "next/image";
import {
  Chapter,
  DraftCaption,
  Hang,
  Note,
  Opener,
  Statement,
  SIZES,
  Work,
  editorial as e,
} from "@/components/Editorial";
import FlowCaseStudyLayout from "@/components/FlowCaseStudyLayout";
import styles from "./islamicly.module.css";

const SITE_URL = "https://islamicly.vercel.app";

const FACTS = [
  [
    "Problem",
    "Most learning apps are built around the content, not the person learning it. Students couldn’t tell how they were doing or where they were getting stuck.",
  ],
  [
    "My role",
    "I was the only designer. I ran the research, designed 68 pages across three units, decided how the AI should behave, and built the working demo.",
  ],
  [
    "Key decisions",
    "I went with warm, library-like tones instead of the usual edtech look. The AI can change how a lesson is shown, but it never touches the content itself. Every chapter is reviewed by a scholar before it goes live.",
  ],
  [
    "Outcome",
    "After the class demo, the impact Islamicly can have on students was clear. The school gave me the green light to build the complete version, with new content added weekly.",
  ],
] as const;

/* two columns, read top to bottom; the right column sits lower (stagger) */
const RESULT_COLUMNS = [
  [
    {
      src: "/images/islamicly/Landing.webp",
      alt: "Islamicly landing page: a sunset framed by an arched doorway, with a quote from Shaykh Mostafa Al Shaybani",
    },
    {
      src: "/images/islamicly/SahabaFinal.webp",
      alt: "Sahaba Studies page set on a palm-lined street at golden hour",
    },
  ],
  [
    {
      src: "/images/islamicly/Course.webp",
      alt: "Course Lectures page showing students seated in a circle under a beam of light",
    },
    {
      src: "/images/islamicly/Quran.webp",
      alt: "Qur’anic Vocabulary page showing hands holding an open book",
    },
  ],
] as const;

const DIAGNOSIS_SLIDES = {
  marketResearch: {
    src: "/images/islamicly/MarketResearchCropped.webp",
    alt: "Design Seminar slide titled Market Research, listing what students wanted from Islamic learning apps and the flaws found in existing ones",
    width: 2257,
    height: 1305,
  },
  survey: {
    src: "/images/islamicly/Survey.webp",
    alt: "Design Seminar slide titled Survey Pt.2, showing four revised survey questions arranged around a central Survey 2 node",
    width: 2330,
    height: 1316,
  },
} as const;

const PERSONALITY_DRAFTS = {
  faith: {
    src: "/images/islamicly/Faith.webp",
    alt: "Draft 1 home screen titled Strengthen Your Faith, with Sahaba Stories, Quran, and Lectures cards on a soft blue gradient",
    width: 1546,
    height: 814,
  },
  learning: {
    src: "/images/islamicly/Learning.webp",
    alt: "Draft 2 screen titled Your Learning Path, with Arabic calligraphy of the Basmala above the heading",
    width: 1564,
    height: 1106,
  },
  sahaba: {
    src: "/images/islamicly/Sahaba.webp",
    alt: "Draft 3 Sahaba Stories page with a manuscript-style Arabic banner and cards for companions of the Prophet",
    width: 1946,
    height: 1060,
  },
} as const;

const VOICE_DRAFTS = {
  unit1: {
    src: "/images/islamicly/Unit1.webp",
    alt: "Post-feedback draft 1: a Select a Unit to begin screen in warm brown, with Fiqh, The Seerah, and Hadith unit cards",
    width: 956,
    height: 624,
  },
  unit2: {
    src: "/images/islamicly/Unit2.webp",
    alt: "Post-feedback draft 2: an Explore a topic screen on a textured parchment background framed by minarets",
    width: 1092,
    height: 710,
  },
  courseTopics: {
    src: "/images/islamicly/CourseTopics.webp",
    alt: "Post-feedback draft 3: the Explore a topic screen set inside an arched doorway between tall library bookshelves",
    width: 2400,
    height: 1559,
  },
} as const;

const AI_SCREENS = {
  results: {
    src: "/images/islamicly/QuizResults.webp",
    alt: "Results screen after a chapter quiz: an 80% B score with Active Recall, Linguistic and Numeric breakdowns, and a note that dates will be emphasized in the next reading",
    width: 1750,
    height: 1136,
  },
  chapter: {
    src: "/images/islamicly/Chapter.webp",
    alt: "Chapter 1.2, Early Adulthood, a two-column reading page about Abu Bakr with the dates set in bold",
    width: 2366,
    height: 1534,
  },
} as const;

export default function IslamiclyPage() {
  return (
    <FlowCaseStudyLayout
      title="Islamicly"
      background="#E7E1D6"
      titleTracking="-0.025em"
      ruleColor="rgba(107, 82, 68, 0.4)"
    >
      <Opener
        headline="A study app that changes when you struggle"
        timeline="September 2025 – Present"
        tools="Figma (currently building the pilot)"
        facts={FACTS}
      >
        <figure className={styles.heroFigure}>
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.gallery} ${e.lift}`}
            aria-label="Visit Islamicly (opens in a new tab)"
          >
            {RESULT_COLUMNS.map((images, col) => (
              <div
                key={col}
                className={`${styles.galleryCol} ${col === 1 ? styles.galleryColLow : ""}`}
              >
                {images.map(({ src, alt }) => (
                  <Image
                    key={src}
                    src={src}
                    alt={alt}
                    width={2400}
                    height={1559}
                    sizes="(max-width: 1099px) 46vw, 480px"
                    quality={90}
                    loading="eager"
                    className={styles.galleryImg}
                  />
                ))}
              </div>
            ))}
          </a>
          <figcaption className={e.caption}>Click on any image to visit Islamicly</figcaption>
        </figure>
      </Opener>

      <Chapter title="The Result">
        <Statement label="Class demo" size="small" className={e.placed}>
          A full class used an early version of Islamicly and loved it,
          consistently rating it 8/10 or higher for recommending it to a friend.
        </Statement>
        <div className={e.twoUp}>
          <div>
            <Note label="What they said">Very engaging and easy to understand.</Note>
            <Note label="After the quiz">The class noticed the next lesson change for them.</Note>
            <Note label="Done">A demo version with the functioning AI.</Note>
          </div>
          <div>
            <Note label="What students would change">
              Faded buttons and cluttered navigation. One wrote, &ldquo;I didn&rsquo;t
              know you could click on the button.&rdquo; Both are going into the
              pilot.
            </Note>
            <Note label="Next">
              The school is on board, and I&rsquo;m building the pilot now, starting
              with progress tracking for students and parents.
            </Note>
            <Note label="Then">The complete AI layer that personalizes lessons, built in code.</Note>
          </div>
        </div>
      </Chapter>

      <Chapter title="Diagnosis and Direction">
        <div className={e.pair}>
          <div className={e.pairText}>
            <Note label="Problem">
              Most learning apps were built around the content, instead of the
              person learning it. Most still use decade-old layouts, and each one
              only does one thing.
            </Note>
          </div>
          <div className={e.pairWork}>
            <Work {...DIAGNOSIS_SLIDES.marketResearch} sizes={SIZES.pair} />
          </div>
        </div>
        <div className={e.pair}>
          <div className={e.pairText}>
            <Note label="Research">
              I surveyed students about the apps they use, then tested with a
              scholar and a school&rsquo;s board of education.
            </Note>
          </div>
          <div className={e.pairWork}>
            <Work {...DIAGNOSIS_SLIDES.survey} sizes={SIZES.pair} />
          </div>
        </div>
        <Statement label="Finding" size="small" className={e.placed}>
          Students didn&rsquo;t just want more lessons. They wanted feedback on
          how they were doing, and help where they were stuck.
        </Statement>
        <div className={e.twoUp}>
          <div>
            <Note label="Opportunity">
              One platform with a full curriculum and modern craft, using AI to
              tailor learning to each student.
            </Note>
          </div>
        </div>
      </Chapter>

      <Chapter title="Where’s the personality?">
        <Statement label="Critique" size="small" className={e.placed}>
          <Hang>&ldquo;</Hang>There&rsquo;s no personality in that design.&rdquo;
          my professor said. I&rsquo;d designed for familiarity over identity.
        </Statement>
        <div className={e.twoUp}>
          <div>
            <Note label="What changed">Three drafts searching for a voice of its own.</Note>
          </div>
        </div>
        <div className={e.row}>
          <Work
            {...PERSONALITY_DRAFTS.faith}
            sizes={SIZES.third}
            caption={<DraftCaption text="Draft 1: tested and received feedback of not having personality." />}
          />
          <Work
            {...PERSONALITY_DRAFTS.learning}
            sizes={SIZES.third}
            caption={<DraftCaption text="Draft 2: the fix, added Arabic and general “Islamic” aesthetic to show&nbsp;personality." />}
          />
          <Work
            {...PERSONALITY_DRAFTS.sahaba}
            sizes={SIZES.third}
            caption={<DraftCaption text="Draft 3: a voice that got closer to Islamicly with the manuscript and visual layout." />}
          />
        </div>
      </Chapter>

      <Chapter title="Finding the Voice" room>
        <Statement label="Constraint" size="small" className={e.placed}>
          Feel distinct, not generic, without losing the familiarity students
          expect.
        </Statement>
        <div className={e.twoUp}>
          <div>
            <Note label="My solution">
              Dim, warm tones that feel like a library, a place people seek out and
              full of&nbsp;knowledge.
            </Note>
          </div>
          <div>
            <Note label="Kept">Elements such as rounded buttons, and nav bar for familiarity.</Note>
          </div>
        </div>
        <div className={e.row}>
          <Work
            {...VOICE_DRAFTS.unit1}
            sizes={SIZES.third}
            caption={<DraftCaption text="Post-Feedback Draft 1: new color palette, new layout" />}
          />
          <Work
            {...VOICE_DRAFTS.unit2}
            sizes={SIZES.third}
            caption={<DraftCaption text="Post-Feedback Draft 2: kept the color palette, added new texture, a new layout, and more topics." />}
          />
          <Work
            {...VOICE_DRAFTS.courseTopics}
            sizes={SIZES.third}
            caption={<DraftCaption text="Post-Feedback Draft 3: added a new image in the back to add depth, kept the same topics and layout." />}
          />
        </div>
      </Chapter>

      <Chapter title="Tailored to You" last>
        <div className={e.twoUp}>
          <div>
            <Note label="How it works">
              After each chapter, a short quiz shows the AI what you understood. The
              next lesson changes the layout to help you. If you miss a date, the
              next chapter highlights dates.
            </Note>
          </div>
          <div>
            <Note label="Integrity">
              The AI never writes the actual content. Every chapter is reviewed by a
              scholar, and the AI only changes how the information is&nbsp;presented.
            </Note>
          </div>
        </div>
        <div className={e.row}>
          <Work
            {...AI_SCREENS.results}
            sizes={SIZES.half}
            caption="After the quiz, the AI tells you what will change in your next reading. (bottom left)"
          />
          <Work
            {...AI_SCREENS.chapter}
            sizes={SIZES.half}
            caption="Chapter 1.2: the dates are now bold, because dates were missed in 1.1."
          />
        </div>
      </Chapter>
    </FlowCaseStudyLayout>
  );
}
