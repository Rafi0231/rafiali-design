import Image from "next/image";
import FlowCaseStudyLayout, { Section } from "@/components/FlowCaseStudyLayout";
import content from "@/components/caseStudyContent.module.css";
import styles from "./lta.module.css";

const IMAGE_QUALITY = 90;

/* drafts render at ~259px of a 1512 frame; two-up on phones */
const BRICK_DRAFTS = [
  {
    src: "/images/lta/Draft1.webp",
    width: 1138,
    height: 1736,
    alt: "Draft 1 of Jassiel Serna's poster: his name running vertically beside photos of him and his red fiber sculptures",
    caption:
      "Draft 1: presented as the thesis, with no system yet. This draft earned the note that became a rule: give people the fastest route to the artist.",
  },
  {
    src: "/images/lta/Draft2.webp",
    width: 1136,
    height: 1733,
    alt: "Draft 2: a pink poster with a circular portrait, his name in mono type, a bio block, the CAD mark, and a QR code",
    caption:
      "Draft 2: more organized, with portrait, mono name, bio block, CAD mark, and a QR code. With no interview, his words came verbatim from CAD’s public record.",
  },
  {
    src: "/images/lta/Draft3.webp",
    width: 1136,
    height: 1733,
    alt: "Draft 3: a red gradient poster with a circular portrait above his name and a row of cropped artworks",
    caption:
      "Draft 3: the gradient starts reflecting the artist. Critique: show the art whole. Nothing cropped, nothing layered over it, and the artists choose the pieces.",
  },
  {
    src: "/images/lta/Draft4.webp",
    width: 1140,
    height: 1739,
    alt: "Draft 4: a large portrait over a red-brown gradient, his name split across the poster, and one sculpture shown whole",
    caption:
      "Draft 4: the QR code broke the system. Some artists had everything to link and others almost nothing. My professor’s fix: the CAD mark, one destination all three share.",
  },
  {
    src: "/images/lta/Draft5.webp",
    width: 638,
    height: 973,
    alt: "Draft 5, the final poster: portrait and name on a print-ready red gradient, a column of whole artworks, and the CAD mark",
    caption:
      "Draft 5: the system comes together. The gradient that looked clean on screen fell apart on paper, so it was rebuilt for print.",
  },
] as const;

export default function LTAPage() {
  return (
    <FlowCaseStudyLayout
      title="Light to the Artists"
      background="#B9ADA3"
      titleTracking="0"
      ruleColor="rgba(107, 82, 68, 0.4)"
    >
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
            <div className={content.slidePanel}>
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
          </div>
        </div>
      </Section>
      <Section heading="A System">
        <div className={styles.system}>
          <div className={`${content.textBlock} ${styles.systemText}`}>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>Fixed &middot;</span> Film roll,
              portrait, name, and CAD mark, so the set reads as one family.
            </p>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>Flexes &middot;</span> The art
              and a gradient drawn from the mood of each artist&rsquo;s work.
            </p>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>Rule change &middot;</span> Bios
              moved from first person to third person, with the artists&rsquo; words
              kept as intact as possible.
            </p>
          </div>

          <div className={styles.systemDiagram}>
            <figure className={`${content.slidePanel} ${styles.systemPanel}`}>
              {/* renders at ~413px of a 1512 frame; full card width on phones */}
              <Image
                src="/images/lta/SystemDiagram.webp"
                alt="Sarah Whyte's final poster: film-roll strip of her work on the left, portrait top right, her name in mono type, her bio, and the CAD mark"
                width={636}
                height={981}
                sizes="(max-width: 767px) 90vw, 28vw"
                quality={IMAGE_QUALITY}
                className={`${content.slideImg} ${styles.systemImg}`}
              />
            </figure>

            <ul className={styles.callouts}>
              <li className={`${styles.callout} ${styles.calloutLeft} ${styles.calloutFilm}`}>
                <strong>Film Roll</strong> &ndash; fixed, connects the set into one family
              </li>
              <li className={`${styles.callout} ${styles.calloutLeft} ${styles.calloutFlex} ${styles.calloutWork}`}>
                <strong>Work</strong> &ndash; flex, the frame is consistent, but the art
                gets swapped
              </li>
              <li className={`${styles.callout} ${styles.calloutLeft} ${styles.calloutFlex} ${styles.calloutGradient}`}>
                <strong>Gradient</strong> &ndash; flex, drawn from the mood of each
                artist&rsquo;s work
              </li>
              <li className={`${styles.callout} ${styles.calloutRight} ${styles.calloutPortrait}`}>
                <strong>Portrait</strong> &ndash; fixed, same square and placement
              </li>
              <li className={`${styles.callout} ${styles.calloutRight} ${styles.calloutName}`}>
                <strong>Name</strong> &ndash; fixed, mono type, same position
              </li>
              <li className={`${styles.callout} ${styles.calloutRight} ${styles.calloutBio}`}>
                <strong>Bio</strong> &ndash; fixed position, her words, shifted to third
                person.
              </li>
              <li className={`${styles.callout} ${styles.calloutLogo}`}>
                <strong>Logo</strong> &ndash; fixed, replaces the QR: the gallery is the
                destination
              </li>
            </ul>
          </div>
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
      <Section heading="Brick by Brick">
        <div>
          <div className={`${content.textBlock} ${styles.brickText}`}>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>Critique &middot;</span>{" "}
              &ldquo;Give people the fastest route to the artist,&rdquo; and &ldquo;When
              you show someone else&rsquo;s art, show it whole.&rdquo;
            </p>
            <p className={content.statusRow}>
              <span className={content.statusLabel}>What changed &middot;</span> Five
              drafts, each one turning a critique into a rule.
            </p>
          </div>

          <div className={styles.brickRow}>
            {BRICK_DRAFTS.map(({ caption, ...image }) => (
              <figure key={image.src} className={styles.brickFigure}>
                <div className={content.slidePanel}>
                  <Image
                    {...image}
                    alt={image.alt}
                    sizes="(max-width: 767px) 45vw, 18vw"
                    quality={IMAGE_QUALITY}
                    className={`${content.slideImg} ${styles.brickImg}`}
                  />
                </div>
                <figcaption className={styles.brickCaption}>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>
    </FlowCaseStudyLayout>
  );
}
