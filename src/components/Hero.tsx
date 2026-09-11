import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      aria-label="Rafi Ali — designer and founder"
    >
      {/* Layer 1 — studio photo */}
      <div className={styles.base}>
        <Image
          src="/images/BaseImage.webp"
          alt=""
          fill
          priority
          className={styles.img}
        />
      </div>

      {/* Layer 2 — text sits between the two images */}
      <div className={styles.textLayer}>
        <a href="#projects" className={styles.navLink} style={{ left: "30.291%" }}>
          Projects
        </a>
        <a href="#about" className={styles.navLink} style={{ left: "46.892%" }}>
          About
        </a>
        <a href="#connect" className={styles.navLink} style={{ left: "61.706%" }}>
          Connect
        </a>

        <h1 className={styles.name}>Rafi Ali</h1>

        <div className={styles.rule} aria-hidden="true" />
        <p className={styles.founder}>Founder of Lantern Software</p>
        <p className={styles.credential}>
          B.S. in Computer Science + Digital Design at University of Illinois Chicago
        </p>
      </div>

      {/* Layer 3 — cutout; arm occludes the "i" in Ali */}
      <div className={styles.cutout}>
        <Image
          src="/images/Cutout.webp"
          alt=""
          fill
          className={styles.img}
        />
      </div>
    </section>
  );
}
