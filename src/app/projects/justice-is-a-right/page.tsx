"use client";

import Image from "next/image";
import CaseStudyLayout, { CaseStudyPanel } from "@/components/CaseStudyLayout";
import styles from "./jiar.module.css";

/* 4-panel dot tops (1451 × 743):  y: 518 545 572 599  →  (y−196)/743 */
const DOT_TOPS = ["43.338%", "46.972%", "50.606%", "54.240%"] as const;

export default function JIARPage() {
  return (
    <CaseStudyLayout title="Justice Is a Right" dotTops={DOT_TOPS}>

      {/* ── Panel 1: The Assignment (text only) ── */}
      <CaseStudyPanel index={0} heading="The Assignment">

        <div
          className={styles.body}
          style={{ left: "19.504%", top: "28.533%", width: "61.268%", fontSize: "1.653cqw" }}
        >
          <p>
            During the third week of Creative Coding, we received an assignment
            to choose one of the United Nations Sustainable Development Goals: a
            set of global challenges the UN aims to address. I chose Goal 16,
            which seeks to foster peaceful and inclusive societies, ensure access
            to justice for all, and build effective, accountable institutions.
          </p>
          <p>
            Once we had chosen the goal we wanted to address, we were placed
            into groups with peers who had selected the same goal or one closely
            related to it. I was grouped with three teammates, including a
            Computer Science major and a Design major with a minor in Computer
            Science. We had our goal and our team; now, it was time to get to
            work.
          </p>
        </div>

      </CaseStudyPanel>

      {/* ── Panel 2: How do you represent Justice? ── */}
      <CaseStudyPanel index={1} heading="How do you represent Justice?">

        {/* EmptyScale */}
        <div className={styles.imgFrame} style={{ left: "7.030%", top: "23.150%", width: "16.127%", height: "23.822%" }}>
          <Image src="/images/jiar/EmptyScale.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.caption} style={{ left: "7.030%", top: "47.510%", width: "9.717%" }}>
          Image 1: empty scale
        </p>

        {/* Obstacles */}
        <div className={styles.imgFrame} style={{ left: "24.328%", top: "23.150%", width: "16.127%", height: "23.688%" }}>
          <Image src="/images/jiar/Obstacles.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.caption} style={{ left: "24.328%", top: "47.510%", width: "15.851%" }}>
          Image 2: obstacles on the left side
        </p>

        {/* HubButton */}
        <div className={styles.imgFrame} style={{ left: "7.030%", top: "59.219%", width: "16.127%", height: "23.822%" }}>
          <Image src="/images/jiar/HubButton.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.captionSm} style={{ left: "7.030%", top: "83.445%", width: "16.471%" }}>
          Image 3: &ldquo;Community Hub&rdquo; button appears
        </p>

        {/* Balanced */}
        <div className={styles.imgFrame} style={{ left: "24.328%", top: "59.219%", width: "16.127%", height: "23.688%" }}>
          <Image src="/images/jiar/Balanced.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.captionSm} style={{ left: "24.259%", top: "83.445%", width: "16.747%" }}>
          Image 4: the balance after Community Hubs implemented
        </p>

        {/* Body */}
        <div
          className={styles.body}
          style={{ left: "44.521%", top: "22%", width: "54.652%", fontSize: "1.455cqw" }}
        >
          <p>
            My first idea was fairly simple. It featured a scale, and at the
            beginning of the game, words such as &ldquo;violence,&rdquo;
            &ldquo;poverty,&rdquo; and &ldquo;crime&rdquo; appeared on one side.
            These were meant to represent the obstacles that communities affected
            by poverty often face.
          </p>
          <p>
            A green button labeled &ldquo;Community Hub&rdquo; represented small
            community spaces that offer help and support to people experiencing
            hardships like these. As the user pressed the Community Hub button,
            words like &ldquo;justice,&rdquo; &ldquo;jobs,&rdquo;
            &ldquo;safety,&rdquo; and &ldquo;food&rdquo; appeared on the right
            side of the scale, visually representing the positive impact a
            community hub can provide.
          </p>
          <p>
            However, this was one of those ideas that sounded better on the
            drawing board. When I presented it to my professor, the feedback was
            direct and deflating: she told me we were bringing attention to the
            problem, but we weren&rsquo;t offering a solution. It took me weeks
            to understand that distinction. Several presentations came and went
            where I was put on the spot and could not yet deliver a sound answer.
          </p>
        </div>

      </CaseStudyPanel>

      {/* ── Panel 3: What we Eat ── */}
      <CaseStudyPanel index={2} heading="What we Eat">

        {/* Sketch1 */}
        <div className={styles.imgFrame} style={{ left: "5.720%", top: "14.939%", width: "15.851%", height: "38.089%" }}>
          <Image src="/images/jiar/Sketch1.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.caption} style={{ left: "5.720%", top: "53.567%", width: "8.063%" }}>
          Sketch iteration 1
        </p>

        {/* Sketch2 */}
        <div className={styles.imgFrame} style={{ left: "23.019%", top: "14.939%", width: "15.851%", height: "38.089%" }}>
          <Image src="/images/jiar/Sketch2.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.caption} style={{ left: "23.019%", top: "53.567%", width: "8.063%" }}>
          Sketch iteration 2
        </p>

        {/* Research1 */}
        <div className={styles.imgFrame} style={{ left: "5.720%", top: "58.951%", width: "14.473%", height: "36.608%" }}>
          <Image src="/images/jiar/Research1.webp" alt="" fill className={styles.img} />
        </div>

        {/* Research2 */}
        <div className={styles.imgFrame} style={{ left: "21.571%", top: "58.951%", width: "14.542%", height: "36.608%" }}>
          <Image src="/images/jiar/Research2.webp" alt="" fill className={styles.img} />
        </div>

        {/* Shared caption for Research1 + Research2 */}
        <p className={styles.caption} style={{ left: "16.334%", top: "95.559%", width: "9.649%" }}>
          (Pages from research)
        </p>

        {/* Body */}
        <div
          className={styles.body}
          style={{ left: "42.385%", top: "15%", width: "56.926%", fontSize: "1.257cqw" }}
        >
          <p>
            I continued to struggle. I was convinced the Community Hub idea was
            strong, but the way I was presenting it was off. It was never meant
            to be an abstract button; it was meant to be a real space that people
            in need could walk into and out of.
          </p>
          <p>
            The solution did not hit me until late one night while I was praying
            Taraweeh. Like most of my good ideas, it clicked mid-prayer. The
            obvious connection, the one everyone reaches for, is guns and crime.
            The overlooked one was diet and crime. We could build a correlation
            between the limited diets available in underserved communities and
            the crime that can stem from those conditions. The argument was never
            about the people; it was about access, and access is something a
            community can change.
          </p>
          <p>
            From that evening on, I assigned roles across the team. One member
            built the visual identity of the Community Hub, turning my sketches
            into 3D elements. Another coded the interactions and outcomes of the
            game. I took the role of lead researcher, thinking through what a
            real Community Hub would actually contain.
          </p>
          <p>
            The research became the game&rsquo;s content. Every item in the Hub
            carried a real finding. Grab the fish: omega-3s support mood
            regulation, and meta-analyses show modest but real reductions in
            aggression. Trash the frozen pizza: ultra-processed diets show
            addiction-like consumption patterns in the research.
          </p>
          <p>
            Toward the end, we finally got it. We built a Community Hub where
            people walk in and see different foods. They can grab or trash each
            item, and based on what they select, the game shows how those foods
            could affect their behavior. Now, we were ready to present.
          </p>
        </div>

      </CaseStudyPanel>

      {/* ── Panel 4: The Verdict ── */}
      <CaseStudyPanel index={3} heading="The Verdict">

        {/* Acceptance */}
        <div className={styles.imgFrame} style={{ left: "7.719%", top: "21.265%", width: "22.192%", height: "16.151%" }}>
          <Image src="/images/jiar/Acceptance.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.caption} style={{ left: "7.581%", top: "37.416%", width: "8.063%" }}>
          Poster acceptance
        </p>

        {/* Presentation */}
        <div className={styles.imgFrame} style={{ left: "9.373%", top: "42.799%", width: "19.021%", height: "24.764%" }}>
          <Image src="/images/jiar/Presentation.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.caption} style={{ left: "9.373%", top: "66.891%", width: "8.960%" }}>
          Presentation Image
        </p>

        {/* TeamPicture */}
        <div className={styles.imgFrame} style={{ left: "20.055%", top: "68.641%", width: "20.124%", height: "26.110%" }}>
          <Image src="/images/jiar/TeamPicture.webp" alt="" fill className={styles.img} />
        </div>
        <p className={styles.caption} style={{ left: "20.055%", top: "94.751%", width: "6.271%" }}>
          Team Picture
        </p>

        {/* Body */}
        <div
          className={styles.body}
          style={{ left: "45.279%", top: "14.670%", width: "52.791%", fontSize: "1.521cqw" }}
        >
          <p>
            The presentation was nerve-racking, but we were proud of what we had
            built. Before presenting, I delegated one final round of
            responsibilities. Our designer ran the camera, recording the
            presentation as the audience watched. Our developer took the
            controller, guiding everyone through the VR experience, while I
            narrated and fielded questions as they came.
          </p>
          <p>
            In the audience were professors, students, and a representative from
            IBM, who later awarded us Open Project Developer Level II badges. The
            project had come full circle: we showed our audience the relationship
            between restricted diets in underserved communities and the impact
            those conditions can have on behavior, in a way that was both
            thoughtfully designed and well engineered.
          </p>
          <p>
            After the semester ended, one more piece of news arrived: our
            documentation, with me as first author, was accepted to the ACM
            COMPASS 2026 posters track. I could not have been more proud of our
            team.
          </p>
        </div>

      </CaseStudyPanel>

    </CaseStudyLayout>
  );
}
