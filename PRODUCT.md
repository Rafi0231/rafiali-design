# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring teams — recruiters and design / engineering managers — screening Rafi Ali for full-time UX and design-engineer roles. They arrive from a resume, LinkedIn, or application link, skim the home page, and open one or two case studies to judge process, rigor, and craft.

## Product Purpose

A personal portfolio that gets Rafi shortlisted for full-time UX / design-engineer roles. Success is a reviewer opening a case study, understanding the problem, process, and outcome, and reaching the Resume or LinkedIn link.

## Positioning

- **Designs and builds:** a research-led designer who ships production code and protects the standard through to production — the site itself is hand-built (Next.js) from Rafi's own Figma.
- **Faith-rooted founder:** founder of Lantern Software, modeled on the waqf (Islamic endowment) rather than a startup; builds tools Muslims need, with a fixed share of revenue going to food, water, and education.
- **Published researcher:** first author on a paper accepted to ACM COMPASS 2026 (Justice Is a Right).
- **Calm, subtle craft:** interfaces that feel calm and simple with real depth underneath.

## Operating Context

Reviewed mostly on laptops/desktops, often in a quick skim between other candidates. Home page (Hero → Projects → About) leads to three case-study pages under `/projects/*`.

## Capabilities and Constraints

- Next.js 16 App Router, React 19, CSS Modules; no UI library.
- Desktop is the priority. Mobile does not need to match desktop, but must run and present all information legibly.
- Do not change the case-study "Back" buttons or the Resume / LinkedIn buttons without asking first (see CLAUDE.md).

## Brand Commitments

- Name: Rafi Ali. Tagline in metadata: "UX & Design Engineer".
- Credentials as stated on the site: Founder of Lantern Software; B.S. in Computer Science + Digital Design, University of Illinois Chicago.
- Voice: plain, first-person, understated; no hype.

## Evidence on Hand

- Case studies: Islamicly (`src/app/projects/islamicly`), Justice Is a Right (`src/app/projects/justice-is-a-right`), Light to the Artists (`src/app/projects/light-to-the-artists`), with imagery in `public/images/*` and a demo video in `public/videos/jiar`.
- Resume: `public/Rafi-Ali-Resume.pdf`. LinkedIn: linkedin.com/in/rafi-ali-design.
- No testimonials, client logos, or metrics beyond what case studies state; do not fabricate any.

## Product Principles

1. Show the work and the reasoning; the case studies are the proof.
2. Calm over loud — depth reveals itself on reading, not through spectacle.
3. Craft is the argument: the site's own build quality is evidence of the "designs and builds" claim.
4. Every claim must be true and sourced from Rafi's real work.
