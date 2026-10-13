import Image from "next/image";
import IslamiclyLayout, { Section } from "@/components/IslamiclyLayout";
import styles from "./islamicly.module.css";

/* tiles are ~401px of a 1512 frame on desktop, half the card on phones */
const GALLERY_SIZES = "(max-width: 767px) 46vw, 27vw";

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

export default function IslamiclyPage() {
  return (
    <IslamiclyLayout title="Islamicly">
      <Section heading="The Result" columns="460fr 833fr">
        <div className={styles.resultText}>
          <h3 className={styles.overviewHeading}>Overview</h3>
          <ul className={styles.overviewList}>
            <li><em>Role</em>: Product Designer</li>
            <li><em>Timeline</em>: September 2025 &ndash; Present</li>
            <li><em>Tools</em>: Figma (currently building backend system)</li>
            <li>
              <em>Status</em>: Presented to the Board of Education at Muslim
              Education Center in Morton Grove, IL
            </li>
          </ul>

          <hr className={styles.divider} />

          <p className={styles.statusRow}>
            <span className={styles.statusLabel}>Done &middot;</span> A full
            curriculum, designed end to end.
          </p>
          <p className={styles.statusRow}>
            <span className={styles.statusLabel}>Next &middot;</span> Progress
            tracking for students and parents.
          </p>
          <p className={styles.statusRow}>
            <span className={styles.statusLabel}>Then &middot;</span> An AI layer
            that personalizes lessons, built in code.
          </p>
        </div>

        <div className={styles.gallery}>
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
                  loading="eager"
                  className={styles.galleryImg}
                />
              ))}
            </div>
          ))}
        </div>
      </Section>
      <Section heading="The Diagnosis" />
      <Section heading="The Audience’s Opinion" />
      <Section heading="Where’s the personality?" />
      <Section heading="Finding the Voice" />
    </IslamiclyLayout>
  );
}
