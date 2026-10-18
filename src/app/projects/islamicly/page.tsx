import Image from "next/image";
import FlowCaseStudyLayout, { Section } from "@/components/FlowCaseStudyLayout";
import content from "@/components/caseStudyContent.module.css";
import styles from "./islamicly.module.css";

/* rendered tile width: ~410px of a 1512 frame (27.1vw) on desktop, ~43vw on phones.
   Kept slightly above so a 2× screen always gets at least 2× the pixels. */
const GALLERY_SIZES = "(max-width: 767px) 46vw, 28vw";
const IMAGE_QUALITY = 90;

/* clickable Figma prototype of Islamicly */
const PROTOTYPE_URL =
  "https://www.figma.com/proto/6n18GZvoJGU8DbyrpbX43M/Islamicly-Drafts?node-id=6495-3152&t=uCC5GGTLOzq7Jw9I-1&scaling=min-zoom&content-scaling=fixed&page-id=6015%3A87&starting-point-node-id=6493%3A2832";

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

/* slides render at ~628px and ~595px of a 1512 frame; nearly full card width on phones */
const DIAGNOSIS_SLIDES = {
  marketResearch: {
    src: "/images/islamicly/MarketResearch.webp",
    alt: "Design Seminar slide titled Market Research, listing what students wanted from Islamic learning apps and the flaws found in existing ones",
    width: 2328,
    height: 1314,
    sizes: "(max-width: 767px) 90vw, 43vw",
  },
  similarProducts: {
    src: "/images/islamicly/SimilarProduct.webp",
    alt: "Design Seminar slide titled Similar Products, noting that no existing app covers all three topics Islamicly plans to teach",
    width: 2330,
    height: 1312,
    sizes: "(max-width: 767px) 90vw, 41vw",
  },
} as const;

/* slides render at ~570px of a 1512 frame; nearly full card width on phones */
const AUDIENCE_SLIDES = {
  questions: {
    src: "/images/islamicly/Questions.webp",
    alt: "Design Seminar slide titled Turning Research into Questions, with a diagram linking survey questions to learning formats, payment, and specific features",
    width: 2328,
    height: 1314,
  },
  survey: {
    src: "/images/islamicly/Survey.webp",
    alt: "Design Seminar slide titled Survey Pt.2, showing four revised survey questions arranged around a central Survey 2 node",
    width: 2330,
    height: 1316,
  },
} as const;
const AUDIENCE_SIZES = "(max-width: 767px) 90vw, 40vw";

/* drafts render at ~591, ~440 and ~600px of a 1512 frame */
const PERSONALITY_DRAFTS = {
  faith: {
    src: "/images/islamicly/Faith.webp",
    alt: "Draft 1 home screen titled Strengthen Your Faith, with Sahaba Stories, Quran, and Lectures cards on a soft blue gradient",
    width: 1546,
    height: 814,
    sizes: "(max-width: 767px) 90vw, 42vw",
  },
  learning: {
    src: "/images/islamicly/Learning.webp",
    alt: "Draft 2 screen titled Your Learning Path, with Arabic calligraphy of the Basmala above the heading",
    width: 1564,
    height: 1106,
    sizes: "(max-width: 767px) 90vw, 32vw",
  },
  sahaba: {
    src: "/images/islamicly/Sahaba.webp",
    alt: "Draft 3 Sahaba Stories page with a manuscript-style Arabic banner and cards for companions of the Prophet",
    width: 1946,
    height: 1060,
    sizes: "(max-width: 767px) 90vw, 42vw",
  },
} as const;

/* Unit 1 and Unit 2 render at ~321px, Course Topics at ~561px of a 1512 frame */
const VOICE_DRAFTS = {
  unit1: {
    src: "/images/islamicly/Unit1.webp",
    alt: "Post-feedback draft 1: a Select a Unit to begin screen in warm brown, with Fiqh, The Seerah, and Hadith unit cards",
    width: 956,
    height: 624,
    sizes: "(max-width: 767px) 90vw, 22vw",
  },
  unit2: {
    src: "/images/islamicly/Unit2.webp",
    alt: "Post-feedback draft 2: an Explore a topic screen on a textured parchment background framed by minarets",
    width: 1092,
    height: 710,
    sizes: "(max-width: 767px) 90vw, 22vw",
  },
  courseTopics: {
    src: "/images/islamicly/CourseTopics.webp",
    alt: "Post-feedback draft 3: the Explore a topic screen set inside an arched doorway between tall library bookshelves",
    width: 2400,
    height: 1559,
    sizes: "(max-width: 767px) 90vw, 38vw",
  },
} as const;

export default function IslamiclyPage() {
  return (
    <FlowCaseStudyLayout
      title="Islamicly"
      background="#B9ADA3"
      titleTracking="0"
      ruleColor="rgba(107, 82, 68, 0.4)"
    >
      <Section heading="The Result" columns="460fr 833fr">
        <div className={`${content.textBlock} ${styles.resultText}`}>
          <h3 className={content.overviewHeading}>Overview</h3>
          <ul className={content.overviewList}>
            <li><em>Role</em>: Product Designer</li>
            <li><em>Timeline</em>: September 2025 &ndash; Present</li>
            <li><em>Tools</em>: Figma (currently building backend system)</li>
            <li>
              <em>Status</em>: Presented to the Board of Education at Muslim
              Education Center in Morton Grove, IL
            </li>
          </ul>

          <hr className={content.divider} />

          <p className={content.statusRow}>
            <span className={content.statusLabel}>Done &middot;</span> A full
            curriculum, designed end to end.
          </p>
          <p className={content.statusRow}>
            <span className={content.statusLabel}>Next &middot;</span> Progress
            tracking for students and parents.
          </p>
          <p className={content.statusRow}>
            <span className={content.statusLabel}>Then &middot;</span> An AI layer
            that personalizes lessons, built in code.
          </p>
        </div>

        <div className={styles.resultMedia}>
          <a
            href={PROTOTYPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.gallery}
            aria-label="Visit the Islamicly prototype (opens in a new tab)"
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
                    sizes={GALLERY_SIZES}
                    quality={IMAGE_QUALITY}
                    loading="eager"
                    className={styles.galleryImg}
                  />
                ))}
              </div>
            ))}
          </a>
          <p className={styles.galleryCaption}>Click on any image to visit Islamicly</p>
        </div>
      </Section>
      <Section heading="The Diagnosis" className={styles.diagnosisSection}>
        <div className={styles.diagnosis}>
          <div className={styles.sideText}>
            <p className={styles.sideRow}>
              <span className={content.statusLabel}>Problem</span>
              <span className={styles.labelDot}> &middot; </span>
              Most learning apps were built around the content and not the person
              learning it. Most of them still use layouts from ten years ago, and
              each one only does one thing.
            </p>
            <p className={styles.sideRow}>
              <span className={content.statusLabel}>Opportunity</span>
              <span className={styles.labelDot}> &middot; </span>
              One platform with a full curriculum and modern craft.
            </p>
          </div>

          <div className={styles.slides}>
            <div className={`${content.slidePanel} ${styles.slideLeft}`}>
              <Image
                {...DIAGNOSIS_SLIDES.marketResearch}
                alt={DIAGNOSIS_SLIDES.marketResearch.alt}
                quality={IMAGE_QUALITY}
                className={content.slideImg}
              />
            </div>
            <div className={`${content.slidePanel} ${styles.slideRight}`}>
              <Image
                {...DIAGNOSIS_SLIDES.similarProducts}
                alt={DIAGNOSIS_SLIDES.similarProducts.alt}
                quality={IMAGE_QUALITY}
                className={content.slideImg}
              />
            </div>
          </div>
        </div>
      </Section>
      <Section heading="The Audience’s Opinion">
        <div className={styles.audience}>
          <div className={styles.audienceRow}>
            <div className={`${content.slidePanel} ${styles.audienceQuestions}`}>
              <Image
                {...AUDIENCE_SLIDES.questions}
                alt={AUDIENCE_SLIDES.questions.alt}
                sizes={AUDIENCE_SIZES}
                quality={IMAGE_QUALITY}
                className={content.slideImg}
              />
            </div>
            <div className={styles.sideText}>
              <p className={styles.sideRow}>
                <span className={content.statusLabel}>Research &middot;</span>{" "}
                Surveyed students about learning apps, and conducted usability
                tests with an Islamic scholar, and a school&rsquo;s board of
                education
              </p>
              <p className={styles.sideRow}>
                <span className={content.statusLabel}>Finding &middot;</span>{" "}
                Students don&rsquo;t want more lessons, they want a place they
                want to return to, and one that can act as a teacher that adapts
                to their learning.
              </p>
              <p className={styles.sideRow}>
                <span className={content.statusLabel}>What changed &middot;</span>{" "}
                Added an AI layer that tailors to the student and creates an
                environment that feels comfortable and welcoming.
              </p>
            </div>
          </div>

          <div className={`${content.slidePanel} ${styles.audienceSurvey}`}>
            <Image
              {...AUDIENCE_SLIDES.survey}
              alt={AUDIENCE_SLIDES.survey.alt}
              sizes={AUDIENCE_SIZES}
              quality={IMAGE_QUALITY}
              className={content.slideImg}
            />
          </div>
        </div>
      </Section>
      <Section heading="Where’s the personality?">
        <div className={styles.personality}>
          <div className={styles.personalityLeft}>
            <p className={content.draftCaption}>
              Draft 1: tested and received feedback of not having personality.
            </p>
            <div className={`${content.slidePanel} ${styles.faith}`}>
              <Image
                {...PERSONALITY_DRAFTS.faith}
                alt={PERSONALITY_DRAFTS.faith.alt}
                quality={IMAGE_QUALITY}
                className={content.slideImg}
              />
            </div>
            <div className={styles.learningRow}>
              <p className={content.draftCaption}>
                Draft 2: the fix, added Arabic and general &ldquo;Islamic&rdquo;
                aesthetic to show personality.
              </p>
              <div className={`${content.slidePanel} ${styles.learning}`}>
                <Image
                  {...PERSONALITY_DRAFTS.learning}
                  alt={PERSONALITY_DRAFTS.learning.alt}
                  quality={IMAGE_QUALITY}
                  className={content.slideImg}
                />
              </div>
            </div>
          </div>

          <div className={styles.personalityRight}>
            <div className={`${styles.sideText} ${styles.personalityText}`}>
              <p className={`${styles.sideRow} ${styles.sideRowTight}`}>
                <span className={content.statusLabel}>Critique</span>
                <span className={styles.labelDotSmall}> &middot; </span>
                &ldquo;There&rsquo;s no personality in that design.&rdquo; my
                professor said. I&rsquo;d designed for familiarity over identity.
              </p>
              <p className={`${styles.sideRow} ${styles.sideRowTight}`}>
                <span className={content.statusLabel}>What changed</span>
                <span className={styles.labelDotSmall}> &middot; </span>
                Three drafts searching for a voice of its own.
              </p>
            </div>
            <div className={`${content.slidePanel} ${styles.sahaba}`}>
              <Image
                {...PERSONALITY_DRAFTS.sahaba}
                alt={PERSONALITY_DRAFTS.sahaba.alt}
                quality={IMAGE_QUALITY}
                className={content.slideImg}
              />
            </div>
            <p className={`${content.draftCaption} ${styles.draftCaptionBelow}`}>
              Draft 3: a voice that got closer to Islamicly with the manuscript and
              visual layout.
            </p>
          </div>
        </div>
      </Section>
      <Section heading="Finding the Voice">
        <div className={styles.voice}>
          <div className={`${styles.sideText} ${styles.voiceText}`}>
            <p className={`${styles.sideRow} ${styles.sideRowLoose}`}>
              <span className={content.statusLabel}>Constraint &middot;</span> Feel
              distinct, not generic, without losing the familiarity students
              expect.
            </p>
            <p className={`${styles.sideRow} ${styles.sideRowLoose}`}>
              <span className={content.statusLabel}>My solution &middot;</span> Dim,
              warm tones that feel like a library, a place people seek out and
              full of knowledge.
            </p>
            <p className={`${styles.sideRow} ${styles.sideRowLoose}`}>
              <span className={content.statusLabel}>Kept &middot;</span> Elements
              such as rounded buttons, and nav bar for familiarity.
            </p>
          </div>

          <div className={styles.voiceImages}>
            <div className={`${styles.voiceRow} ${styles.voiceRowOne}`}>
              <div className={content.slidePanel}>
                <Image
                  {...VOICE_DRAFTS.unit1}
                  alt={VOICE_DRAFTS.unit1.alt}
                  quality={IMAGE_QUALITY}
                  className={content.slideImg}
                />
              </div>
              <p className={content.draftCaption}>
                Post-Feedback Draft 1: new color palette, new layout
              </p>
            </div>
            <div className={`${styles.voiceRow} ${styles.voiceRowTwo}`}>
              <div className={content.slidePanel}>
                <Image
                  {...VOICE_DRAFTS.unit2}
                  alt={VOICE_DRAFTS.unit2.alt}
                  quality={IMAGE_QUALITY}
                  className={content.slideImg}
                />
              </div>
              <p className={content.draftCaption}>
                Post-Feedback Draft 2: kept the color palette, added new texture, a
                new layout, and more topics.
              </p>
            </div>
            <div className={`${styles.voiceRow} ${styles.voiceRowThree}`}>
              <div className={content.slidePanel}>
                <Image
                  {...VOICE_DRAFTS.courseTopics}
                  alt={VOICE_DRAFTS.courseTopics.alt}
                  quality={IMAGE_QUALITY}
                  className={content.slideImg}
                />
              </div>
              <p className={content.draftCaption}>
                Post-Feedback Draft 3: added a new image in the back to add depth,
                kept the same topics and layout.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </FlowCaseStudyLayout>
  );
}
