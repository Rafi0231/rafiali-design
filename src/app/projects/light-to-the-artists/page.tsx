import Image from "next/image";
import FlowCaseStudyLayout, { Section } from "@/components/FlowCaseStudyLayout";
import content from "@/components/caseStudyContent.module.css";
import styles from "./lta.module.css";

const IMAGE_QUALITY = 90;

export default function LTAPage() {
  return (
    <FlowCaseStudyLayout title="Light to the Artists">
      <Section heading="The Result">
        <div className={styles.result}>
          <div className={`${content.textBlock} ${styles.resultText}`}>
            <h3 className={content.overviewHeading}>Overview</h3>
            <ul className={content.overviewList}>
              <li><em>Role</em>: Solo Designer &amp; Researcher</li>
              <li><em>Client</em>: Chicago Art Department (CAD)</li>
              <li><em>Timeline</em>: September &ndash; December 2025</li>
              <li><em>Tools</em>: Illustrator</li>
              <li><em>Status</em>: Printed and exhibited at CAD, 1926 S. Halsted St.</li>
            </ul>

            <hr className={content.divider} />

            <p className={content.statusRow}>
              <span className={content.statusLabel}>Shipped &middot;</span> Three
              posters, hung and presented to CAD&rsquo;s admin and artists.
            </p>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>Client response &middot;</span>{" "}
              CAD&rsquo;s co-founder suggested new places the system could live:
              handouts for visitors and announcements for new exhibitions.
            </p>
          </div>

          <div className={styles.resultMedia}>
            <div className={`${content.slidePanel} ${styles.resultPanel}`}>
              {/* renders at ~489px of a 1512 frame; full card width on phones */}
              <Image
                src="/images/lta/Gallery.webp"
                alt="The three posters hung on a gallery wall at the Chicago Art Department, above a tote bag on a stand and a white plinth"
                width={2388}
                height={3052}
                sizes="(max-width: 767px) 90vw, 33vw"
                quality={IMAGE_QUALITY}
                loading="eager"
                className={`${content.slideImg} ${styles.resultImg}`}
              />
            </div>

            <p className={styles.resultNote}>
              Full transparency: the printed poster misspells Catie Burrill&rsquo;s
              name. It&rsquo;s corrected throughout this portfolio, and I now
              triple-check every name I typeset. Sarah Whyte, Catie Burrill, and
              Jassiel Serna&rsquo;s work is at the Chicago Art Department, 1926 S.
              Halsted Street.
            </p>
          </div>
        </div>
      </Section>
      <Section heading="The Gap">
        <div className={styles.gap}>
          <div className={`${content.textBlock} ${styles.gapText}`}>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>Problem &middot;</span> At CAD,
              the only sign of who made each piece was a small Polaroid.
            </p>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>Opportunity &middot;</span> A
              system that makes each artist visible, so people appreciate the person
              behind the work.
            </p>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>Challenge &middot;</span> Every
              artist should look unmistakably like themselves, while the set still
              reads as one family.
            </p>
          </div>

          <figure className={styles.gapFigure}>
            <div className={content.slidePanel}>
              {/* renders at ~489px of a 1512 frame; full card width on phones */}
              <Image
                src="/images/lta/Workspace.webp"
                alt="An artist's cluttered workspace at CAD: textile pieces on the walls, a portrait print, and stacked shipping boxes on the floor"
                width={2400}
                height={3200}
                sizes="(max-width: 767px) 90vw, 33vw"
                quality={IMAGE_QUALITY}
                className={content.slideImg}
              />
            </div>
            <figcaption className={content.draftCaption}>
              An artist&rsquo;s workspace at CAD
            </figcaption>
          </figure>
        </div>
      </Section>
      <Section heading="Their Voices">
        <div className={styles.voices}>
          <div className={styles.voicesMain}>
            <div className={`${content.textBlock} ${styles.voicesText}`}>
              <p className={content.statusRow}>
                <span className={content.statusLabel}>Research &middot;</span> Asked
                all three residents the same three questions: what should people
                know, which pieces define you, and where can they find you?
              </p>
              <p className={content.statusRow}>
                <span className={content.statusLabel}>Finding &middot;</span> Their
                answers were already artist statements.
              </p>
              <p className={content.statusRow}>
                <span className={content.statusLabel}>Decision &middot;</span> I
                don&rsquo;t need to speak when I have their words.
              </p>
              <p className={content.statusRow}>
                <span className={content.statusLabel}>Constraint &middot;</span> One
                artist didn&rsquo;t reply in time, so his poster became a stress
                test: could the work alone carry his voice?
              </p>
            </div>

            <figure className={styles.voicesQuote}>
              <figcaption className={styles.voicesQuoteTitle}>
                Direct quote from interview:
              </figcaption>
              <blockquote className={styles.voicesQuoteText}>
                &ldquo;I use painting and fiber techniques to tell my personal
                adoption stories and to bring the complexities of transnational
                adoption to the fore. As I piece together my identity as a
                transnational adoptee through making I explore the wider social and
                political constructs, including the complicated intersections of an
                international adoption with global issues such as imperialism,
                colonization, and militarism. My own story offers clues to reveal
                histories around human rights, international relations, and race
                politics.&rdquo;
              </blockquote>
            </figure>
          </div>

          <figure className={styles.voicesFigure}>
            <div className={content.slidePanel}>
              {/* renders at ~406px of a 1512 frame; full card width on phones */}
              <Image
                src="/images/lta/SarahPoster.webp"
                alt="Sarah Whyte's poster: her portrait, four of her works, and her own words as the biography"
                width={872}
                height={1350}
                sizes="(max-width: 767px) 90vw, 28vw"
                quality={IMAGE_QUALITY}
                className={content.slideImg}
              />
            </div>
            <figcaption className={content.draftCaption}>
              Using Whyte&rsquo;s words as her biography on the poster
            </figcaption>
          </figure>
        </div>
      </Section>
      <Section heading="Brick by Brick" />
      <Section heading="A System" />
    </FlowCaseStudyLayout>
  );
}
