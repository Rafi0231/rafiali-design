import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.pageCanvas}>
        <Hero />
        <Projects />
        <div className={styles.sectionGap} aria-hidden="true" />
        <About />
      </div>
      <section id="connect" />
    </>
  );
}
