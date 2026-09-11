"use client";

import Image from "next/image";
import CaseStudyLayout, { CaseStudyPanel } from "@/components/CaseStudyLayout";
import styles from "./islamicly.module.css";

export default function IslamiclyPage() {
  return (
    <CaseStudyLayout title="Islamicly">

      {/* ── Panel 1: The Diagnosis ── */}
      <CaseStudyPanel index={0} heading="The Diagnosis">

        {/* MarketResearch: (165−28)/1451=9.442%  (383−196)/743=25.168%  350/1451=24.121%  198/743=26.648% */}
        <div className={styles.imgFrame} style={{ left: "9.442%", top: "25.168%", width: "24.121%", height: "26.648%" }}>
          <Image src="/images/islamicly/MarketResearch.webp" alt="" fill className={styles.img} />
        </div>

        {/* SimilarProduct: (597−196)/743=53.971%  197/743=26.514% */}
        <div className={styles.imgFrame} style={{ left: "9.442%", top: "53.971%", width: "24.121%", height: "26.514%" }}>
          <Image src="/images/islamicly/SimilarProduct.webp" alt="" fill className={styles.img} />
        </div>

        {/* Caption: (810−196)/743=82.638%  388/1451=26.740% */}
        <p className={styles.caption} style={{ left: "9.442%", top: "82.638%", width: "26.740%" }}>
          (Actual slides from Fall 2025 Design Seminar presentation)
        </p>

        {/* Body: (676−28)/1451=44.659%  (366−196)/743=22.881%  776/1451=53.480% */}
        <div className={styles.body} style={{ left: "44.659%", top: "22.881%", width: "53.480%" }}>
          <p>
            The gap I found in online learning apps, especially those that
            teach religion isn&rsquo;t one of content, but craft. Most of the
            apps that are available use design patterns from the early 2010s,
            haven&rsquo;t touched AI, and have very little familiarity with
            current design practices.
          </p>
          <p>
            Islamic learning apps narrow this further, each focusing on one
            feature: reading Quran, prayer time apps, video lessons. As
            righteous and needed as these apps are, none bring it all together
            to present a cohesive piece of technological sophistication and
            elegant design. That&rsquo;s where Islamicly comes in.
          </p>
        </div>

      </CaseStudyPanel>

      {/* ── Panel 2: The Audience's Opinion ── */}
      <CaseStudyPanel index={1} heading="The Audience's Opinion">

        {/* Questions: (143−28)/1451=7.926%  (343−196)/743=19.784%  319/1451=21.985%  180/743=24.225% */}
        <div className={styles.imgFrame} style={{ left: "7.926%", top: "19.784%", width: "21.985%", height: "24.225%" }}>
          <Image src="/images/islamicly/Questions.webp" alt="" fill className={styles.img} />
        </div>

        {/* Survey: (541−196)/743=46.432% */}
        <div className={styles.imgFrame} style={{ left: "7.926%", top: "46.432%", width: "21.985%", height: "24.225%" }}>
          <Image src="/images/islamicly/Survey.webp" alt="" fill className={styles.img} />
        </div>

        {/* Form: (476−28)/1451=30.876%  (372−196)/743=23.688%  342/1451=23.570%  338/743=45.492% */}
        <div className={styles.imgFrame} style={{ left: "30.876%", top: "23.688%", width: "23.570%", height: "45.492%" }}>
          <Image src="/images/islamicly/Form.webp" alt="" fill className={styles.img} />
        </div>

        {/* Quote pill 1: (133−28)/1451=7.236%  (743−196)/743=73.620%  463/1451=31.909%  78/743=10.498% */}
        <div className={styles.quotePill} style={{ left: "7.236%", top: "73.620%", width: "31.909%", height: "10.498%" }}>
          Maybe add an option to read more about the life of the Prophet (the Sirah)
        </div>

        {/* Quote pill 2: (830−196)/743=85.330%  343/1451=23.639%  51/743=6.864% */}
        <div className={styles.quotePill} style={{ left: "7.236%", top: "85.330%", width: "23.639%", height: "6.864%" }}>
          Probably the seera of the Prophet PBUH
        </div>

        {/* Body: (879−28)/1451=58.649%  (329−196)/743=17.900%  558/1451=38.456% */}
        <div className={styles.body} style={{ left: "58.649%", top: "17.900%", width: "38.456%" }}>
          <p>
            My natural second step was to survey my target demographic: I
            conducted a formal survey with 3 participants, and asked about their
            experiences with Islamic apps and whether Islamicly was something
            they would use. The responses were mixed. Some participants said they
            would like to use it, while others said they would want to try it
            first. Perhaps the most significant finding was that Islamicly did
            not yet include a place for the Seerah&mdash;the biography of the
            Prophet Muhammad (peace and blessings be upon him).
          </p>
          <p>
            This presented a real challenge because my existing layout did not
            allow me to simply add the biography for the sake of including it.
            I had already structured the units and their content. So the Seerah
            became a requirement I carried into every draft that followed within
            the Course Lectures unit, making this much-needed feature available
            to all users.
          </p>
        </div>

      </CaseStudyPanel>

      {/* ── Panel 3: Where's the personality? ── */}
      <CaseStudyPanel index={2} heading="Where's the personality?">

        {/* Faith: (167−28)/1451=9.580%  (387−196)/743=25.707%  387/1451=26.671%  204/743=27.456% */}
        <div className={styles.imgFrame} style={{ left: "9.580%", top: "25.707%", width: "26.671%", height: "27.456%" }}>
          <Image src="/images/islamicly/Faith.webp" alt="" fill className={styles.img} />
        </div>

        {/* Sahaba: (171−28)/1451=9.856%  (599−196)/743=54.240%  379/1451=26.119%  206/743=27.726% */}
        <div className={styles.imgFrame} style={{ left: "9.856%", top: "54.240%", width: "26.119%", height: "27.726%" }}>
          <Image src="/images/islamicly/Sahaba.webp" alt="" fill className={styles.img} />
        </div>

        {/* Learning: (558−28)/1451=36.527%  (558−196)/743=48.722%  299/1451=20.606%  211/743=28.398% */}
        <div className={styles.imgFrame} style={{ left: "36.527%", top: "48.722%", width: "20.606%", height: "28.398%" }}>
          <Image src="/images/islamicly/Learning.webp" alt="" fill className={styles.img} />
        </div>

        {/* Caption 1 (beside Faith): (566−28)/1451=37.078%  (402−196)/743=27.726%  210/1451=14.473% */}
        <p className={styles.captionSm} style={{ left: "37.078%", top: "27.726%", width: "14.473%" }}>
          Draft 1, tested and received feedback of not having personality.
        </p>

        {/* Caption 3 (beside Learning): (558−28)/1451=36.527%  (775−196)/743=77.928% */}
        <p className={styles.captionSm} style={{ left: "36.527%", top: "77.928%", width: "14.473%" }}>
          Draft 2, the fix, added Arabic and general &lsquo;Islamic&rsquo; aesthetic to
          show personality.
        </p>

        {/* Caption 2 (below Sahaba): (171−28)/1451=9.856%  (813−196)/743=83.041% */}
        <p className={styles.captionSm} style={{ left: "9.856%", top: "83.041%", width: "14.473%" }}>
          Draft 3, a voice that got closer to Islamicly with the manuscript and
          visual layout.
        </p>

        {/* Body: (918−28)/1451=61.337%  (383−196)/743=25.168%  512/1451=35.286% */}
        <div className={styles.body} style={{ left: "61.337%", top: "25.168%", width: "35.286%" }}>
          <p>
            This part was the most frustrating. After listening to my audience
            and considering what the market needed, I decided to begin building
            Islamicly. I leaned into current design practices: soft colors,
            rounded buttons, aesthetic calligraphy, and stale gradients.
          </p>
          <p>
            However, when I presented the design to my professor in design
            seminar, she made one statement that really clicked for me:
            &lsquo;There&rsquo;s no personality in that design.&rsquo; In the
            moment, it stung, but it was also very clear. I had muted my own
            voice for the sake of creating a design that everyone would be
            familiar with and would not experience friction while using it.
          </p>
        </div>

      </CaseStudyPanel>

      {/* ── Panel 4: 3 Drafts ── */}
      <CaseStudyPanel index={3} heading="3 Drafts">

        {/* Unit1: (130−28)/1451=7.029%  (342−196)/743=19.650%  265/1451=18.263%  173/743=23.283% */}
        <div className={styles.imgFrame} style={{ left: "7.029%", top: "19.650%", width: "18.263%", height: "23.283%" }}>
          <Image src="/images/islamicly/Unit1.webp" alt="" fill className={styles.img} />
        </div>

        {/* Unit2: (402−28)/1451=25.775%  172/743=23.149% */}
        <div className={styles.imgFrame} style={{ left: "25.775%", top: "19.650%", width: "18.263%", height: "23.149%" }}>
          <Image src="/images/islamicly/Unit2.webp" alt="" fill className={styles.img} />
        </div>

        {/* Unit3: (676−28)/1451=44.659% */}
        <div className={styles.imgFrame} style={{ left: "44.659%", top: "19.650%", width: "18.263%", height: "23.149%" }}>
          <Image src="/images/islamicly/Unit3.webp" alt="" fill className={styles.img} />
        </div>

        {/* Captions — all at (518−196)/743=43.337% */}
        {/* Cap1: (131−28)/1451=7.098%  210/1451=14.473% */}
        <p className={styles.captionSm} style={{ left: "7.098%", top: "43.337%", width: "14.473%" }}>
          Post-Feedback Draft 1: new color palette, new layout and includes the
          Seerah.
        </p>
        {/* Cap2: (408−28)/1451=26.189%  236/1451=16.264% */}
        <p className={styles.captionSm} style={{ left: "26.189%", top: "43.337%", width: "16.264%" }}>
          Post-Feedback Draft 2: kept the color palette, added new texture, a
          new layout, and more topics.
        </p>
        {/* Cap3: (676−28)/1451=44.659%  241/1451=16.609% */}
        <p className={styles.captionSm} style={{ left: "44.659%", top: "43.337%", width: "16.609%" }}>
          Post-Feedback Draft 3: added a new image in the back to add depth,
          kept the same topics and layout.
        </p>

        {/* Body: (770−28)/1451=51.137%  (604−196)/743=54.912%  672/1451=46.312% */}
        <div className={styles.body} style={{ left: "51.137%", top: "54.912%", width: "46.312%" }}>
          <p>
            However, my voice found its way home. After thinking through what
            Islamicly was meant to be for students, I realized it needed to feel
            like an inviting digital space. To achieve this, I completely
            reworked the color palette, choosing dimmer tones meant to evoke the
            comfort, safety, and warmth of a library.
          </p>
          <p>
            I also found a balance by keeping the rounded buttons I used in
            earlier drafts, preserving the sense of familiarity students have
            with other apps. I continued iterating and building on the design.
            Each draft revealed a gap. But by the end, I had created something
            students would feel eager to return to.
          </p>
        </div>

      </CaseStudyPanel>

      {/* ── Panel 5: Current Status ── */}
      <CaseStudyPanel index={4} heading="Current Status">

        {/* Landing: (181−28)/1451=10.544%  (354−196)/743=21.264%  300/1451=20.675%  194/743=26.109% */}
        <div className={styles.imgFrame} style={{ left: "10.544%", top: "21.264%", width: "20.675%", height: "26.109%" }}>
          <Image src="/images/islamicly/Landing.webp" alt="" fill className={styles.img} />
        </div>

        {/* SahabaFinal: (211−28)/1451=12.612%  (566−196)/743=49.799%  196/743=26.379% */}
        <div className={styles.imgFrame} style={{ left: "12.612%", top: "49.799%", width: "20.675%", height: "26.379%" }}>
          <Image src="/images/islamicly/SahabaFinal.webp" alt="" fill className={styles.img} />
        </div>

        {/* Quran: (536−28)/1451=35.010%  (450−196)/743=34.186%  195/743=26.244% */}
        <div className={styles.imgFrame} style={{ left: "35.010%", top: "34.186%", width: "20.675%", height: "26.244%" }}>
          <Image src="/images/islamicly/Quran.webp" alt="" fill className={styles.img} />
        </div>

        {/* Course: (685−196)/743=65.815% */}
        <div className={styles.imgFrame} style={{ left: "35.010%", top: "65.815%", width: "20.675%", height: "26.244%" }}>
          <Image src="/images/islamicly/Course.webp" alt="" fill className={styles.img} />
        </div>

        {/* Body: (897−28)/1451=59.890%  (350−196)/743=20.727%  561/1451=38.663% */}
        <div className={styles.body} style={{ left: "59.890%", top: "20.727%", width: "38.663%" }}>
          <p>
            Today, Islamicly is a nearly complete design. It&rsquo;s a cohesive
            learning platform that offers a full curriculum in Islamic education.
            It still lacks some student-specific features, such as tools that
            show progress through the units and communicate that progress to
            parents or teachers.
          </p>
          <p>
            The AI system is in its early stages. Its purpose is to monitor user
            progress and personalize the curriculum, making the content easier to
            understand and better suited to each student&rsquo;s individual
            needs. The next step is to build the technical backend that will
            bring this design to life. Taking Islamicly from a Figma file to a
            genuinely beneficial learning platform, and the flagship product of
            Lantern Software.
          </p>
        </div>

      </CaseStudyPanel>

    </CaseStudyLayout>
  );
}
