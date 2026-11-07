import Image from "next/image";
import { Chapter, DraftCaption, Hang, Note, Opener, Statement, editorial as e } from "@/components/Editorial";
import FlowCaseStudyLayout from "@/components/FlowCaseStudyLayout";
import styles from "./lta.module.css";

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
      "Draft 2: more organized, with portrait, mono name, bio block, CAD mark, and a QR code. With no interview, his words came verbatim from CAD’s public\u00A0record.",
  },
  {
    src: "/images/lta/Draft3.webp",
    width: 1136,
    height: 1733,
    alt: "Draft 3: a red gradient poster with a circular portrait above his name and a row of cropped artworks",
    caption:
      "Draft 3: the gradient starts reflecting the artist. Critique: show the art whole. Nothing cropped, nothing layered over it, and the artists choose the\u00A0pieces.",
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

const FACTS = [
  ["Problem", "Artists make beautiful work, but the people behind it often go unseen."],
  [
    "My role",
    "I worked solo. I interviewed the artists over email and Zoom, then designed the poster system around what they told me.",
  ],
  [
    "Key decisions",
    "Each poster’s color comes from the artist’s own style, and every poster carries a short bio. The artists chose which of their works were shown.",
  ],
  [
    "Outcome",
    "The posters were displayed in CAD’s gallery, and one of the founders proposed using the system outside CAD to promote upcoming shows.",
  ],
] as const;

export default function LTAPage() {
  return (
    <FlowCaseStudyLayout
      title="Light to the Artists"
      background="#E7E1D6"
      titleTracking="-0.025em"
      ruleColor="rgba(107, 82, 68, 0.4)"
    >
      <Opener
        headline="A poster system that puts artists first"
        timeline="September – December 2025"
        tools="Illustrator"
        facts={FACTS}
      >
        <Image
          src="/images/lta/Gallery.webp"
          alt="The three posters hung on a gallery wall at the Chicago Art Department, above a tote bag on a stand and a white plinth"
          width={2388}
          height={3052}
          sizes="(max-width: 1099px) 92vw, 1150px"
          quality={90}
          loading="eager"
          className={styles.heroImg}
        />
      </Opener>

      <Chapter title="The Result" className={e.split}>
        <div className={e.splitText}>
          <Note label="Shipped">Three posters, hung and presented to CAD&rsquo;s admin and artists.</Note>
          <Note label="Client response">
            CAD&rsquo;s co-founder suggested new places the system could live:
            handouts for visitors and announcements for new&nbsp;exhibitions.
          </Note>
        </div>
      </Chapter>

      <Chapter title="A System" className={styles.system}>
        <div className={styles.systemText}>
          <Note label="Fixed">Film roll, portrait, name, and CAD mark, so the set reads as one family.</Note>
          <Note label="Flexes">The art and a gradient drawn from the mood of each artist&rsquo;s work.</Note>
          <Note label="Rule change">
            Bios moved from first person to third person, with the artists&rsquo;
            words kept as intact as possible.
          </Note>
        </div>
        <Image
          src="/images/lta/SystemDiagram.webp"
          alt="Sarah Whyte's final poster: film-roll strip of her work on the left, portrait top right, her name in mono type, her bio, and the CAD mark"
          width={636}
          height={981}
          sizes="(max-width: 1099px) 92vw, 480px"
          quality={90}
          className={styles.systemPoster}
        />
        <ul className={styles.parts}>
          <li><strong>Film Roll</strong> &ndash; fixed, connects the set into one family</li>
          <li className={styles.flexPart}><strong>Work</strong> &ndash; flex, the frame is consistent, but the art gets swapped</li>
          <li className={styles.flexPart}><strong>Gradient</strong> &ndash; flex, drawn from the mood of each artist&rsquo;s work</li>
          <li><strong>Portrait</strong> &ndash; fixed, same square and placement</li>
          <li><strong>Name</strong> &ndash; fixed, mono type, same position</li>
          <li><strong>Bio</strong> &ndash; fixed position, her words, shifted to third person.</li>
          <li><strong>Logo</strong> &ndash; fixed, replaces the QR: the gallery is the&nbsp;destination</li>
        </ul>
      </Chapter>

      <Chapter title="Their Voices" room className={styles.voices}>
        <div className={styles.voicesIntro}>
          <Note label="Research">
            Asked all three residents the same three questions: what should people
            know, which pieces define you, and where can they find you?
          </Note>
          <Note label="Finding">Their answers were already artist statements.</Note>
        </div>
        <Statement label="Decision" className={styles.voicesStatement}>I don&rsquo;t need to speak when I have their words.</Statement>
        <div className={styles.voicesBody}>
          <Note label="Constraint">
            One artist didn&rsquo;t reply in time, so his poster became a stress
            test: could the work alone carry his voice?
          </Note>
          <figure className={styles.quote}>
            <figcaption className={styles.quoteSource}>Direct quote from interview:</figcaption>
            <blockquote className={styles.quoteText}>
              <Hang>&ldquo;</Hang>I use painting and fiber techniques to tell my personal adoption
              stories and to bring the complexities of transnational adoption to the
              fore. As I piece together my identity as a transnational adoptee
              through making I explore the wider social and political constructs,
              including the complicated intersections of an international adoption
              with global issues such as imperialism, colonization, and militarism.
              My own story offers clues to reveal histories around human rights,
              international relations, and race politics.&rdquo;
            </blockquote>
          </figure>
        </div>
        <figure className={styles.voicesPoster}>
          <Image
            src="/images/lta/SarahPoster.webp"
            alt="Sarah Whyte's poster: her portrait, four of her works, and her own words as the biography"
            width={872}
            height={1350}
            sizes="(max-width: 1099px) 92vw, 440px"
            quality={90}
            className={styles.posterImg}
          />
          <figcaption className={styles.posterCaption}>
            Using Whyte&rsquo;s words as her biography on the poster
          </figcaption>
        </figure>
      </Chapter>

      <Chapter title="Brick by Brick" last className={styles.brick}>
        <Statement label="Critique" size="small" className={`${styles.brickWide} ${styles.brickStatement}`}>
          <Hang>&ldquo;</Hang>Give people the fastest route to the artist,&rdquo; and &ldquo;When
          you show someone else&rsquo;s art, show it whole.&rdquo;
        </Statement>
        <div className={`${styles.brickWide} ${styles.brickNote}`}>
          <Note label="What changed">Five drafts, each one turning a critique into a rule.</Note>
        </div>
        <ol className={styles.drafts}>
          {BRICK_DRAFTS.map(({ caption, ...image }) => (
            <li key={image.src} className={styles.draft}>
              <Image
                {...image}
                alt={image.alt}
                sizes="(max-width: 1099px) 40vw, 260px"
                quality={90}
                className={styles.draftImg}
              />
              <p className={`${e.caption} ${styles.draftText}`}>
                <DraftCaption text={caption} />
              </p>
            </li>
          ))}
        </ol>
      </Chapter>
    </FlowCaseStudyLayout>
  );
}
