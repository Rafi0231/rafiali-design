import Image from "next/image";
import FlowCaseStudyLayout from "@/components/FlowCaseStudyLayout";
import styles from "./clarity.module.css";

const SITE_URL = "https://clarity-zakat.vercel.app";

type Box = [x: number, y: number, w: number, h: number];

/* An image at its Figma box (px within the section) on the slim grey mat every case
   study uses, with a caption at its own Figma position. Images are served as lossless
   files at up to 3x so small text stays crisp */
function Shot({
  src,
  alt,
  image,
  caption,
  wrap = false,
  children,
}: {
  src: string;
  alt: string;
  image: Box;
  caption: [x: number, y: number, w: number];
  /* caption wraps within its width instead of staying on one line */
  wrap?: boolean;
  children: React.ReactNode;
}) {
  const vars = {
    ...boxVars(image),
    "--cap-x": caption[0],
    "--cap-y": caption[1],
    "--cap-w": caption[2],
  } as React.CSSProperties;

  return (
    <figure className={styles.shot} style={vars}>
      <div className={styles.mat}>
        <span className={styles.matImage}>
          <Image src={src} alt={alt} fill unoptimized className={styles.img} />
        </span>
      </div>
      <figcaption className={`${styles.shotCaption} ${wrap ? styles.shotCaptionWrap : ""}`}>
        {children}
      </figcaption>
    </figure>
  );
}

const boxVars = ([x, y, w, h]: Box) =>
  ({ "--img-x": x, "--img-y": y, "--img-w": w, "--img-h": h }) as React.CSSProperties;

export default function ClarityPage() {
  return (
    <FlowCaseStudyLayout
      title="Clarity"
      background="#B9ADA3"
      titleTracking="0"
      ruleColor="rgba(107, 82, 68, 0.4)"
      bare
    >
      <section className={styles.deliverable}>
        <h2 className={styles.heading}>Deliverable</h2>

        <div className={styles.overview}>
          <h3 className={styles.overviewHeading}>Overview</h3>
          <ul className={styles.overviewList}>
            <li><em>Role:</em> Product Designer &amp; Engineer (solo)</li>
            <li><em>Timeline:</em> July 2026 &ndash; Present</li>
            <li><em>Tools:</em> Figma, TypeScript, Claude API, Vercel, Vitest</li>
            <li><em>Status:</em> Live at clarity-zakat.vercel.app &middot; tested by an Islamic scholar</li>
          </ul>
        </div>

        <hr className={`${styles.divider} ${styles.dividerTop}`} />
        <p className={`${styles.status} ${styles.statusDone}`}>
          <strong>Done &middot; </strong>
          Two ways to calculate, one tested engine with 135 automated tests.
        </p>
        <hr className={`${styles.divider} ${styles.dividerBottom}`} />
        <p className={`${styles.status} ${styles.statusNext}`}>
          <strong>Next &middot; </strong>
          A formal review by a scholar of Islamic law.
        </p>

        <a
          href={SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.mat} ${styles.siteLink}`}
          style={boxVars([692, 159, 689, 431])}
          aria-label="Try out Clarity (opens in a new tab)"
        >
          <span className={styles.matImage}>
            {/* renders at 689px of a 1512 frame; source is 2880 wide for sharp retina */}
            <Image
              src="/images/clarity/Deliverable.webp"
              alt="Clarity's home screen: the Clarity wordmark, the four schools of jurisprudence, and the Pure Engine and Converse chapters"
              fill
              sizes="(max-width: 767px) 90vw, 46vw"
              quality={90}
              preload
              className={styles.img}
            />
          </span>
        </a>
        <p className={styles.caption}>Click on the image to try out Clarity</p>
      </section>

      <section className={styles.missing}>
        <h2 className={styles.heading}>What was missing</h2>

        <p className={`${styles.status} ${styles.statusIdea}`}>
          <strong>Original Idea &middot; </strong>
          Use AI to check the sources of citations and cut down on false
          information. I paused it once I realized an AI that confidently confirms
          a fake source does more harm than good, if built incorrectly.
        </p>
        <hr className={`${styles.divider} ${styles.dividerWorkflow}`} />
        <p className={`${styles.status} ${styles.statusWorkflow}`}>
          <strong>Workflow &middot; </strong>
          Language models are good at reading &ldquo;15 grams of my mom&rsquo;s
          gold&rdquo; but bad at math you can audit. So Claude only fills in a
          form, and tested code handles the actual calculations.
        </p>
        <hr className={`${styles.divider} ${styles.dividerWhy}`} />
        <p className={`${styles.status} ${styles.statusWhy}`}>
          <strong>Why it works &middot; </strong>
          The math is regular code, not AI, so the same input always gives the
          same answer, and every step can be checked.
        </p>

        <Shot
          src="/images/clarity/SystemDiagram.webp"
          alt="System diagram: the Pure Engine wizard sends typed input straight to a trust gate; Converse chat posts to /api/converse, where Claude fills in a form inside a dashed box marked the only place AI runs, then passes facts to the same trust gate. The gate feeds calculateZakat(), which uses live gold prices and outputs the result."
          image={[648, 496, 767, 342]}
          caption={[758, 849, 564]}
        >
          Diagram of Clarity&rsquo;s System, the dashed box is the only place where AI runs
        </Shot>
      </section>

      <section className={styles.trust}>
        <h2 className={styles.heading}>The Trust Layer</h2>

        <p className={`${styles.status} ${styles.statusConstraint}`}>
          <strong>Constraint &middot; </strong>
          AI output can be wrong, and live prices can be outdated. Neither can be
          allowed to reach the answer unchecked
        </p>
        <hr className={`${styles.divider} ${styles.dividerWide} ${styles.dividerSolution}`} />
        <p className={`${styles.status} ${styles.statusSolution}`}>
          <strong>My Solution &middot; </strong>
          Claude has to answer through a fixed form. A gate then asks one question,
          says &ldquo;I can&rsquo;t determine this,&rdquo; or lets the input
          through. Live prices are cached and rejected if they look off.
        </p>
        <hr className={`${styles.divider} ${styles.dividerWide} ${styles.dividerProof}`} />
        <p className={`${styles.status} ${styles.statusProof}`}>
          <strong>Proof &middot; </strong>
          135 automated tests, half of them guard the gate.
        </p>

        <Shot
          src="/images/clarity/Session.webp"
          alt="Sequence diagram of a real session: the person describes their savings, cash and gold; the chat UI posts to /api/converse; Claude records the finances and flags that time held is missing; the person is asked how long it has been above the threshold, answers 14 months, and once all facts are present the engine returns the result: zakat due now, $580.23."
          image={[674, 200, 736, 389]}
          caption={[669, 602, 705]}
        >
          A real session where Claude handled the conversation, but the final number came from the engine
        </Shot>

        <Shot
          src="/images/clarity/Tests.webp"
          alt="Bar chart of 135 passing Vitest tests by suite: validate 66, engine 31, intake 21, prices live 9, prices 6, nisab 2."
          image={[678, 695, 732, 234]}
          caption={[669, 938, 486]}
        >
          66 tests make sure the input is valid before it ever reaches the math
        </Shot>
      </section>

      <section className={styles.design}>
        <h2 className={styles.heading}>The Design System</h2>

        <p className={`${styles.status} ${styles.statusDesignConstraint}`}>
          <strong>Constraint &middot; </strong>
          People do this once a year, often anxious about getting it wrong, so the
          interface must feel calm and certain.
        </p>
        <hr className={`${styles.divider} ${styles.dividerWide} ${styles.dividerDesign}`} />
        <p className={`${styles.status} ${styles.statusDesignSolution}`}>
          <strong>My Solution &middot; </strong>
          An editorial ledger: parchment, ink, and one green, reserved for the
          answer. Square shapes where you keep accounts, soft ones where you can
          converse.
        </p>

        <Shot
          src="/images/clarity/Wizard.webp"
          alt="The Pure Engine wizard asking “How much money are you owed?” with 2500 entered, a yes-or-no question about whether it will be paid back, and Continue and skip options."
          image={[32, 405, 366, 256]}
          caption={[20, 668, 388]}
        >
          The wizard: one question at a time, with a skip option
        </Shot>

        <Shot
          src="/images/clarity/Converse.webp"
          alt="A Converse chat: the person lists their savings, cash and gold, Clarity asks how long their wealth has been above the threshold, the person answers 14 months with no debts, and Clarity replies that zakat due now is $580.23."
          image={[437, 457, 408, 319]}
          caption={[434, 787, 353]}
        >
          The Converse system, and how Clarity responds
        </Shot>

        <Shot
          src="/images/clarity/Summary.webp"
          alt="The calculation summary: $391.97 due, with the net zakatable amount, the silver nisab, status, hawl, and each asset and debt that led to the total."
          image={[889, 504, 205, 298]}
          caption={[1111, 496, 305]}
          wrap
        >
          Shows not only the output but a list of how each component led to the final sum
        </Shot>

        <Shot
          src="/images/clarity/Buttons.webp"
          alt="Clarity's buttons in their default, hover, focus and disabled states, plus two quiet text buttons: “I don't have any” and “Back”."
          image={[32, 840, 1114, 110]}
          caption={[1162, 831, 235]}
          wrap
        >
          The buttons and their hover, focus, and disabled states
        </Shot>
      </section>

      <section className={styles.wizard}>
        <h2 className={styles.heading}>The Wizard</h2>

        <p className={`${styles.status} ${styles.statusWizardConstraint}`}>
          <strong>Constraint &middot; </strong>
          Nine empty fields at once felt intimidating.
        </p>
        <hr className={`${styles.divider} ${styles.dividerWizard} ${styles.dividerWizardSolution}`} />
        <p className={`${styles.status} ${styles.statusWizardSolution}`}>
          <strong>My Solution &middot; </strong>
          A wizard that asks one question at a time, lets you go back and forth, and
          keeps a running total on the right.
        </p>
        <hr className={`${styles.divider} ${styles.dividerWizard} ${styles.dividerKept}`} />
        <p className={`${styles.status} ${styles.statusKept}`}>
          <strong>Kept &middot; </strong>
          The engine. Every draft ran on the same tested core, so I could redesign
          the screens without touching the math.
        </p>

        <Shot
          src="/images/clarity/Draft1.webp"
          alt="Draft 1 of the Pure Engine: every field on one screen, cash on hand, gold, silver, money owed to you, debts and more, all empty, beside a calculation summary."
          image={[70, 353, 572, 377]}
          caption={[70, 748, 478]}
        >
          Draft 1: Every field at once. It works, but it&rsquo;s overwhelming
        </Shot>

        <Shot
          src="/images/clarity/Draft2.webp"
          alt="Draft 2 of the Pure Engine: a single question, “How much cash do you have on hand?”, with 3000 entered, a Continue button, and the running calculation summary on the right."
          image={[725, 494, 630, 394]}
          caption={[713, 903, 614]}
        >
          Draft 2: One question at a time, with a running total on the right
        </Shot>
      </section>
    </FlowCaseStudyLayout>
  );
}
