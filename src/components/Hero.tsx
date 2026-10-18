import Image from "next/image";
import HeroStats from "./HeroStats";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      aria-label="Rafi Ali — UX / Product Designer"
    >
      {/* Layer 1 — studio photo */}
      <div className={styles.base}>
        <Image
          src="/images/BaseImage.webp"
          alt=""
          fill
          sizes="100vw"
          quality={90}
          preload
          className={styles.img}
        />
      </div>

      {/* Floor fades into the Projects background; sits under the cutout so only the photo fades */}
      <div className={styles.fade} aria-hidden="true" />

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

        <p className={styles.role}>UX / Product Designer</p>
        <HeroStats />
      </div>

      {/* Layer 3 — cutout; arm occludes the "i" in Ali */}
      <div className={styles.cutout}>
        <Image
          src="/images/Cutout.webp"
          alt=""
          fill
          sizes="100vw"
          quality={90}
          preload
          className={styles.img}
        />
      </div>
    </section>
  );
}
