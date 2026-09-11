"use client";

import Image from "next/image";
import CaseStudyLayout, { CaseStudyPanel } from "@/components/CaseStudyLayout";
import styles from "./lta.module.css";

/* 5-panel dot tops matching spec exactly */
const DOT_TOPS = [
  "42.126%",
  "45.760%",
  "49.394%",
  "53.028%",
  "56.662%",
] as const;

export default function LTAPage() {
  return (
    <CaseStudyLayout title="Light to the Artists" dotTops={DOT_TOPS}>

      {/* ── Panel 1: The Gap ── */}
      <CaseStudyPanel index={0} heading="The Gap">

        <div className={styles.imgFrame} style={{ left: "10.269%", top: "28.667%", width: "19.090%", height: "49.664%" }}>
          <Image src="/images/lta/Workspace.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.caption} style={{ left: "14.817%", top: "79.139%", width: "11.716%" }}>
          Artist workspace in CAD
        </p>

        <div className={styles.body} style={{ left: "38.111%", top: "30.013%", width: "58.167%", fontSize: "1.653cqw" }}>
          <p>
            While touring the Chicago Art Department, I saw incredible art in
            the process of being made. The only indication of who was creating
            it was a small Polaroid photo.
          </p>
          <p>
            That gap inspired this project: a design system that makes each
            artist and their background visible, bringing a new level of
            appreciation to the art itself. The challenge was never the
            ingredients. I had their work, their words, their websites. The
            challenge was building a system where every artist looks
            unmistakably like themselves, while the set still reads as one
            family.
          </p>
        </div>

      </CaseStudyPanel>

      {/* ── Panel 2: Their Voice ── */}
      <CaseStudyPanel index={1} heading="Their Voice">

        {/* Quote box */}
        <div className={styles.quoteBox} style={{ left: "6.478%", top: "34.589%", width: "18.746%", height: "51.009%" }} />

        {/* Quote text — positioned independently over the box */}
        <p className={styles.quoteText} style={{ left: "7.374%", top: "35.936%", width: "17.505%" }}>
          I use painting and fiber techniques to tell my personal adoption
          stories and to bring the complexities of transnational adoption to the
          fore. As I piece together my identity as a transnational adoptee
          through making I explore the wider social and political constructs,
          including the complicated intersections of an international adoption
          with global issues such as imperialism, colonization, and militarism.
          My own story offers clues to reveal histories around human rights,
          international relations, and race politics.
        </p>
        <p className={styles.caption} style={{ left: "9.580%", top: "86.406%", width: "12.474%" }}>
          Direct quote from interview
        </p>

        {/* Sarah poster */}
        <div className={styles.imgFrame} style={{ left: "28.049%", top: "18.573%", width: "22.191%", height: "67.026%" }}>
          <Image src="/images/lta/SarahPoster.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.caption} style={{ left: "35.424%", top: "86.406%", width: "10.338%" }}>
          Typeset the exact reply
        </p>

        <div className={styles.body} style={{ left: "56.099%", top: "17%", width: "41.420%", fontSize: "1.455cqw" }}>
          <p>
            My next step was to ask the artists themselves. I reached out to all
            three residents with the same three questions: What should the
            audience know about you and your art? Which pieces best define your
            aesthetic? And where can people find you?
          </p>
          <p>
            Two of the three responded, and their replies shifted the direction
            of the project in an important way: I realized I should not
            paraphrase them. Sarah&rsquo;s response about her practice was
            already an artist statement, written in her own words. Catie&rsquo;s
            response was already her bio. So, the posters carry their words
            verbatim. The interview did not simply inform the copy; it became the
            copy.
          </p>
          <p>
            The third artist, Jassiel, did not respond in time, which turned his
            poster into a stress test: Could the system still hold an
            artist&rsquo;s voice using only the work itself? His pieces, his
            palette, and his public record had to speak where an interview could
            not.
          </p>
        </div>

      </CaseStudyPanel>

      {/* ── Panel 3: Brick by Brick ── */}
      <CaseStudyPanel index={2} heading="Brick by Brick">

        <p className={styles.introLine} style={{ left: "7.719%", top: "20.861%", width: "58.856%" }}>
          Drafts from the iteration process along with reasoning as to what
          changed and why.
        </p>

        {/* Draft1 */}
        <div className={styles.imgFrame} style={{ left: "7.788%", top: "33.513%", width: "15.162%", height: "45.895%" }}>
          <Image src="/images/lta/Draft1.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.captionSm} style={{ left: "7.719%", top: "81.158%", width: "15.300%" }}>
          Draft one, presented to my studio as the thesis. No system, honestly
          no direction yet. But this draft earned the note that became a rule:
          give people the fastest route to the artist.
        </p>

        {/* Draft2 */}
        <div className={styles.imgFrame} style={{ left: "26.396%", top: "33.513%", width: "15.231%", height: "45.760%" }}>
          <Image src="/images/lta/Draft2.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.captionSm} style={{ left: "26.396%", top: "81.158%", width: "15.300%" }}>
          This iteration was more organized: portrait, mono name, bio block, CAD
          mark, and the new QR. No interview to draw from, so his words came
          verbatim from CAD&rsquo;s public record.
        </p>

        {/* Draft3 */}
        <div className={styles.imgFrame} style={{ left: "45.003%", top: "33.647%", width: "15.231%", height: "45.895%" }}>
          <Image src="/images/lta/Draft3.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.captionSm} style={{ left: "45.072%", top: "81.158%", width: "15.300%" }}>
          This is where I took a strong stance on the gradient reflecting the
          artist. A note from critique that stuck: when you show someone
          else&rsquo;s art, show it whole. Nothing cropped, nothing layered over
          it, and the artists choose the pieces.
        </p>

        {/* Draft4 */}
        <div className={styles.imgFrame} style={{ left: "63.680%", top: "33.378%", width: "15.231%", height: "46.030%" }}>
          <Image src="/images/lta/Draft4.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.captionSm} style={{ left: "63.611%", top: "81.158%", width: "15.300%" }}>
          The iteration is where the QR met criticism: some artists have
          everything to link, others almost nothing. A fixed element that behaves
          differently on every poster isn&rsquo;t fixed. My professor&rsquo;s
          idea: the CAD mark. One destination all three artists share.
        </p>

        {/* Draft5 */}
        <div className={styles.imgFrame} style={{ left: "82.357%", top: "33.513%", width: "15.162%", height: "45.895%" }}>
          <Image src="/images/lta/Draft5.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.captionSm} style={{ left: "82.288%", top: "81.158%", width: "15.300%" }}>
          This is where the system came together. The gradient that looked clean
          on screen fell apart on paper, so it was rebuilt for ink. The film
          roll, the band, the terracotta pulled from his own work. Broken down
          next.
        </p>

      </CaseStudyPanel>

      {/* ── Panel 4: A System ── */}
      <CaseStudyPanel index={3} heading="A System">

        <div className={styles.imgFrame} style={{ left: "19.986%", top: "21.534%", width: "21.295%", height: "64.468%" }}>
          <Image src="/images/lta/SystemDiagram.webp" alt="" fill className={styles.img} />
        </div>

        {/* ── Left-side annotation labels (line right of label) ── */}

        <p className={styles.annotLabel} style={{ left: "8.891%", top: "52.086%", width: "9.235%", color: "#1F351D" }}>
          <strong>Film Roll</strong> - fixed, connects the set into one family
        </p>
        <div className={styles.annotLine} style={{ left: "18.470%", top: "53.028%", background: "#1F351D" }} />

        <p className={styles.annotLabel} style={{ left: "8.546%", top: "64.334%", width: "9.235%", color: "#8B6B5C" }}>
          <strong>Work</strong> - flex, the frame is consistent, but the art gets swapped
        </p>
        <div className={styles.annotLine} style={{ left: "18.470%", top: "65.410%", background: "#8B6B5C" }} />

        <p className={styles.annotLabel} style={{ left: "8.546%", top: "76.446%", width: "9.304%", color: "#8B6B5C" }}>
          <strong>Gradient</strong> - flex, drawn from the mood of each artist&rsquo;s work
        </p>
        <div className={styles.annotLine} style={{ left: "18.470%", top: "77.524%", background: "#8B6B5C" }} />

        {/* ── Below-poster annotation label ── */}

        <p className={styles.annotLabel} style={{ left: "20.675%", top: "88.560%", width: "14.748%", color: "#1F351D" }}>
          <strong>Logo</strong> - fixed, replaces the QR: the gallery is the destination
        </p>
        <div className={styles.annotLine} style={{ left: "21.227%", top: "86.406%", background: "#1F351D" }} />

        {/* ── Right-side annotation labels (line left of label) ── */}

        <div className={styles.annotLine} style={{ left: "41.764%", top: "26.379%", background: "#1F351D" }} />
        <p className={styles.annotLabel} style={{ left: "43.280%", top: "25.437%", width: "9.235%", color: "#1F351D" }}>
          <strong>Portrait</strong> - fixed, same square and placement
        </p>

        <div className={styles.annotLine} style={{ left: "41.764%", top: "51.817%", background: "#1F351D" }} />
        <p className={styles.annotLabel} style={{ left: "43.280%", top: "50.875%", width: "8.063%", color: "#1F351D" }}>
          <strong>Name</strong> - fixed, mono type, same position
        </p>

        <div className={styles.annotLine} style={{ left: "41.764%", top: "67.564%", background: "#1F351D" }} />
        <p className={styles.annotLabel} style={{ left: "43.280%", top: "66.622%", width: "9.786%", color: "#1F351D" }}>
          <strong>Bio</strong> - fixed position, her words, shifted to third person.
        </p>

        {/* Body */}
        <div className={styles.body} style={{ left: "57.064%", top: "19%", width: "40.317%", fontSize: "1.455cqw" }}>
          <p>
            As I got closer to a working system, I realized certain things had
            to stay constant across every poster. The colors and mood could
            change, but the structure could not. That split became the foundation
            of the design system.
          </p>
          <p>
            The central constant is the film roll. Each artist&rsquo;s work sits
            inside its frames, and repeating that structure across all three
            posters creates familiarity. The individuality lives in the
            gradients, each one drawn from the mood of the artist&rsquo;s own
            work. Sarah Whyte&rsquo;s work carries great meaning and weight, so
            her poster earned the most restrained choice: no color at all, black
            fading into white.
          </p>
          <p>
            One rule changed along the way. I wanted the biographies in first
            person, but critique feedback made me realize an introduction reads
            oddly as &ldquo;I.&rdquo; The bios shifted to third person, with the
            artists&rsquo; words kept as intact as possible.
          </p>
        </div>

      </CaseStudyPanel>

      {/* ── Panel 5: On Display ── */}
      <CaseStudyPanel index={4} heading="On Display">

        <div className={styles.imgFrame} style={{ left: "9.924%", top: "15.612%", width: "32.736%", height: "82.234%" }}>
          <Image src="/images/lta/Gallery.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.captionXs} style={{ left: "43.556%", top: "90.040%", width: "15.644%" }}>
          Sarah Whyte, Catie Burrill, and Jassiel Serna&rsquo;s work is at the
          Chicago Art Department, 1926 S. Halsted Street.
        </p>

        <div className={styles.body} style={{ left: "59.201%", top: "14%", width: "39.490%", fontSize: "1.653cqw" }}>
          <p>
            Full transparency: the printed poster misspells Catie&rsquo;s name.
            It&rsquo;s corrected in this portfolio, and I&rsquo;ve
            triple-checked every name I&rsquo;ve typeset since.
          </p>
          <p>
            In the end, the posters were printed and hung on the wall of the
            Chicago Art Department and presented to the Department admin and
            artists. After the presentation, Mike Nourse, the board chair and
            co-founder of CAD gave ideas on where else the system could live:
            handed to visitors as they walk the space, posted outside to announce
            new exhibitions. Nothing formal, but the client imagining more uses
            for the work was the best review it got.
          </p>
        </div>

      </CaseStudyPanel>

    </CaseStudyLayout>
  );
}
