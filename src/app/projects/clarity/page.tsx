import Image from "next/image";
import {
  Chapter,
  DraftCaption,
  Note,
  Opener,
  Statement,
  Work,
  editorial as e,
} from "@/components/Editorial";
import type { WorkProps } from "@/components/Editorial";
import FlowCaseStudyLayout from "@/components/FlowCaseStudyLayout";
import styles from "./clarity.module.css";

const SITE_URL = "https://clarity-zakat.vercel.app";

const FACTS = [
  [
    "Problem",
    "Zakat, the charity Muslims are required to give each year, is easy to get wrong. People forget things like retirement accounts or jewelry.",
  ],
  [
    "My role",
    "I designed and built it on my own, from the look and feel to the code to connecting it with Claude, the AI behind the chat.",
  ],
  [
    "Key decisions",
    "There are two ways in: fill out a guided form, or just explain your situation in plain words. Clarity asks one question at a time so nothing slips through, and every number is broken down so you can check the math yourself.",
  ],
  [
    "Outcome",
    "Live at clarity-zakat.vercel.app, with a scholar confirming the exact amount for his own situation. Now being polished for release to a community of 10,000+ during Ramadan.",
  ],
] as const;

/* Served lossless at up to 3x so small text stays crisp */
function Shot(props: Omit<WorkProps, "unoptimized">) {
  return <Work {...props} unoptimized />;
}

export default function ClarityPage() {
  return (
    <FlowCaseStudyLayout
      title="Clarity"
      background="#E7E1D6"
      titleTracking="-0.025em"
      ruleColor="rgba(107, 82, 68, 0.4)"
    >
      <Opener
        headline="A zakat calculator you can just talk to"
        timeline="July 2026 – Present"
        tools="Figma, TypeScript, Claude API, Vercel, Vitest"
        facts={FACTS}
      >
        <figure>
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.siteLink}
            aria-label="Try out Clarity (opens in a new tab)"
          >
            {/* source is 2880 wide for sharp retina */}
            <Image
              src="/images/clarity/Deliverable.webp"
              alt="Clarity's home screen: the Clarity wordmark, the four schools of jurisprudence, and the Pure Engine and Converse chapters"
              width={2880}
              height={1800}
              sizes="(max-width: 1099px) 92vw, 1100px"
              quality={90}
              preload
              className={styles.siteImg}
            />
          </a>
          <figcaption className={`${e.caption} ${styles.siteCaption}`}>Click on the image to try out Clarity</figcaption>
        </figure>
      </Opener>

      <Chapter title="Deliverable" className={e.split}>
        <div className={e.splitText}>
          <Note label="Done">
            Two ways to calculate, one calculator behind both, checked by 135
            automated tests.
          </Note>
          <Note label="Next">A formal review by a scholar of Islamic law.</Note>
        </div>
      </Chapter>

      <Chapter title="What was missing">
        <div className={e.twoUp}>
          <div>
            <Note label="First idea">
              Use AI to check whether a quoted source is real, and cut down on false
              information. I paused it once I realized an AI that confidently
              confirms a fake source does more harm than good, if built&nbsp;incorrectly.
            </Note>
          </div>
          <div>
            <Note label="How it works">
              AI is good at understanding &ldquo;15 grams of my mom&rsquo;s
              gold&rdquo; but bad at math you can double-check. So Claude only fills
              in a form, and regular code does the&nbsp;calculating.
            </Note>
          </div>
        </div>
        <Statement label="Why it works" size="small" className={e.placed}>
          The math is regular code, not AI, so the same numbers always give the
          same answer, and every step can be checked.
        </Statement>
        <div className={e.wide}>
          <Shot
            src="/images/clarity/SystemDiagram.webp"
            alt="System diagram: the Pure Engine wizard sends typed input straight to a trust gate; Converse chat posts to /api/converse, where Claude fills in a form inside a dashed box marked the only place AI runs, then passes facts to the same trust gate. The gate feeds calculateZakat(), which uses live gold prices and outputs the result."
            width={2329}
            height={1038}
            caption="How Clarity works: the dashed box is the only place AI is used"
            zoom
          />
        </div>
      </Chapter>

      <Chapter title="The Trust Layer" room>
        <Statement label="The problem" size="small" className={e.placed}>
          AI can get things wrong, and live prices can go out of date. Neither can
          be allowed to reach the answer unchecked.
        </Statement>
        <div className={e.pair}>
          <div className={e.pairText}>
            <Note label="What I did">
              Claude can only answer by filling in a set form. A checkpoint then
              does one of three things: asks you one question, says &ldquo;I
              can&rsquo;t determine this,&rdquo; or lets the answer through. Live
              prices are saved for quick reuse and thrown out if they look off.
            </Note>
          </div>
          <div className={e.pairWork}>
            <Shot
              src="/images/clarity/Session.webp"
              alt="Sequence diagram of a real session: the person describes their savings, cash and gold; the chat UI posts to /api/converse; Claude records the finances and flags that time held is missing; the person is asked how long it has been above the threshold, answers 14 months, and once all facts are present the engine returns the result: zakat due now, $580.23."
              width={2324}
              height={1229}
              caption="A real session where Claude handled the conversation, but the final number came from the calculator"
              zoom
            />
          </div>
        </div>
        <div className={e.pair}>
          <div className={e.pairText}>
            <Note label="The proof">
              135 automated tests, half of them dedicated to that&nbsp;checkpoint.
            </Note>
          </div>
          <div className={e.pairWork}>
            <Shot
              src="/images/clarity/Tests.webp"
              alt="Bar chart of 135 passing Vitest tests by suite: validate 66, engine 31, intake 21, prices live 9, prices 6, nisab 2."
              width={2328}
              height={744}
              caption="66 tests make sure what you enter is valid before it ever reaches the math"
              zoom
            />
          </div>
        </div>
      </Chapter>

      <Chapter title="The Design System">
        <div className={e.twoUp}>
          <div>
            <Note label="The problem">
              People do this once a year, often anxious about getting it wrong, so
              it has to feel calm and certain.
            </Note>
          </div>
          <div>
            <Note label="What I did">
              It looks like a well-kept ledger: parchment, ink, and one green, saved
              for the answer. Square shapes where you enter your numbers, soft ones
              where you chat.
            </Note>
          </div>
        </div>
        <div className={e.row}>
          <Shot
            src="/images/clarity/Wizard.webp"
            alt="The Pure Engine wizard asking “How much money are you owed?” with 2500 entered, a yes-or-no question about whether it will be paid back, and Continue and skip options."
            width={1098}
            height={768}
            caption="The wizard: one question at a time, with an option to skip"
          />
          <Shot
            src="/images/clarity/Converse.webp"
            alt="A Converse chat: the person lists their savings, cash and gold, Clarity asks how long their wealth has been above the threshold, the person answers 14 months with no debts, and Clarity replies that zakat due now is $580.23."
            width={1224}
            height={957}
            caption="The chat, and how Clarity responds"
          />
          <Shot
            src="/images/clarity/Summary.webp"
            alt="The calculation summary: $391.97 due, with the net zakatable amount, the silver nisab, status, hawl, and each asset and debt that led to the total."
            width={615}
            height={894}
            caption="Shows not only the total but how each item led to it"
          />
        </div>
        <div className={e.wide}>
          <Shot
            src="/images/clarity/Buttons.webp"
            alt="Clarity's buttons in their default, hover, focus and disabled states, plus two quiet text buttons: “I don't have any” and “Back”."
            width={2471}
            height={244}
            caption="The buttons, and how they change as you use them"
            zoom
          />
        </div>
      </Chapter>

      <Chapter title="The Wizard" last>
        <Statement label="The problem" className={e.placed}>
          Nine empty fields at once felt intimidating.
        </Statement>
        <div className={e.twoUp}>
          <div>
            <Note label="What I did">
              A step-by-step form, called a wizard, that asks one question at a
              time, lets you go back and forth, and keeps a running total on the
              right.
            </Note>
          </div>
          <div>
            <Note label="What stayed">
              The calculator. Every draft ran on the same tested math, so I could
              redesign the screens without touching it.
            </Note>
          </div>
        </div>
        <div className={e.row}>
          <Shot
            src="/images/clarity/Draft1.webp"
            alt="Draft 1 of the Pure Engine: every field on one screen, cash on hand, gold, silver, money owed to you, debts and more, all empty, beside a calculation summary."
            width={1716}
            height={1131}
            caption={<DraftCaption text="Draft 1: Every field at once. It works, but it’s overwhelming" />}
          />
          <Shot
            src="/images/clarity/Draft2.webp"
            alt="Draft 2 of the Pure Engine: a single question, “How much cash do you have on hand?”, with 3000 entered, a Continue button, and the running calculation summary on the right."
            width={1890}
            height={1182}
            caption={<DraftCaption text="Draft 2: One question at a time, with a running total on the right" />}
          />
        </div>
      </Chapter>
    </FlowCaseStudyLayout>
  );
}
