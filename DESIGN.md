---
name: Rafi Ali
description: Editorial serif portfolio for a UX & design engineer — calm yet confident.
colors:
  forest-ink: "#1F351D"
  walnut: "#4A3530"
  walnut-light: "#8B6B5C"
  walnut-rule: "rgba(107, 82, 68, 0.8)"
  linen: "#DDD7CF"
  gallery-grey: "#BFBFBF"
  silver: "#BBB6B6"
  cream-glass: "#D9D9D9"
  slide-mat: "#A8A6A3"
  body-ink: "rgba(0, 0, 0, 0.6)"
  caption-ink: "rgba(31, 53, 29, 0.7)"
  summary-ink: "#352727"
  ivory: "#FFFFF0"
typography:
  hero-name:
    fontFamily: "Amiri, Georgia, Times New Roman, serif"
    fontSize: "19.841cqw"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0.015em"
  display:
    fontFamily: "Amiri, Georgia, Times New Roman, serif"
    fontSize: "9.921cqw"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Amiri, Georgia, Times New Roman, serif"
    fontSize: "7.606cqw"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Amiri, Georgia, Times New Roman, serif"
    fontSize: "max(3.307cqw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.15
  subtitle:
    fontFamily: "Amiri, Georgia, Times New Roman, serif"
    fontSize: "3.307cqw"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "Amiri, Georgia, Times New Roman, serif"
    fontSize: "max(1.455cqw, 17px)"
    fontWeight: 400
    lineHeight: 1.59
    letterSpacing: "-0.014em"
  caption:
    fontFamily: "Amiri, Georgia, Times New Roman, serif"
    fontSize: "max(1.323cqw, 15px)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Amiri, Georgia, Times New Roman, serif"
    fontSize: "1.364em"
    fontWeight: 700
    lineHeight: 1
rounded:
  hairline: "2px"
  mat: "6px"
  button: "15px"
  photo: "18px"
  card: "20px"
  pill: "999vw"
spacing:
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "6": "24px"
  "16": "64px"
components:
  project-card:
    backgroundColor: "rgba(229, 229, 229, 0.5)"
    textColor: "{colors.summary-ink}"
    rounded: "{rounded.card}"
  tag-pill:
    backgroundColor: "color-mix(in srgb, #1F351D 50%, transparent)"
    textColor: "rgba(255, 255, 255, 0.7)"
    rounded: "{rounded.card}"
    padding: "0 1.09cqw"
  explore-button:
    backgroundColor: "color-mix(in srgb, #1F351D 70%, transparent)"
    textColor: "#E0D2CC"
    rounded: "{rounded.button}"
  explore-button-hover:
    backgroundColor: "color-mix(in srgb, #1F351D 85%, transparent)"
  glass-pill:
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.pill}"
  case-study-card:
    backgroundColor: "color-mix(in srgb, #D9D9D9 60%, transparent)"
    rounded: "{rounded.card}"
    padding: "max(2.6cqw, 24px) max(4.233cqw, 16px)"
  slide-panel:
    backgroundColor: "{colors.slide-mat}"
    rounded: "{rounded.mat}"
    padding: "max(0.26cqw, 3px)"
---

# Design System: Rafi Ali

## Overview

**Creative North Star: "Calm Yet Confident"**

A single serif voice (Amiri) set at very large sizes on warm linen and gallery-grey grounds. The site reads like an editorial folio: enormous roman titles, a thin walnut rule beneath each, then content laid out like plates with italic captions. Confidence comes from scale. The name runs at 300px across the hero and section titles at 150px. Calm comes from restraint: one typeface, one ink color, muted grounds, and no ornament the work doesn't earn.

Every desktop surface is drawn against a 1512 × 982 Figma frame and scaled with container units (`cqw`), so proportions hold exactly at any desktop width. The home page sections are fixed-ratio compositions with absolutely placed elements. Case studies use a flowing column inside a frosted glass card, and their chrome (title, rule, Back pill) is pinned to the same frame coordinates.

Depth is tactile. Cards lift on hover, glass pills press and tilt, and frosted cards hold the case-study content like a vitrine.

**Key Characteristics:**
- One serif family at every level; hierarchy comes from size, weight (400/700) and italics, never from a second face.
- Forest Ink green is the voice of all headings and chrome text; case-study body copy is neutral black at 60%.
- Positions are locked to the 1512 frame; type sizes come from one shared scale of tokens.
- A walnut hairline rule under every page/section title is the recurring structural mark.
- Italic captions sit tight under images, like plate captions in a book.

## Colors

A warm, low-chroma palette: forest green ink on linen and grey, with walnut browns as the only accent.

### Primary
- **Forest Ink** (forest-ink): Every heading, the hero name, nav-adjacent chrome, glass-pill labels and focus outlines. It is the site's ink, and its transparent mixes tint the tag pills (50%) and Explore button (70%–85%).

### Secondary
- **Walnut** (walnut): Hero nav links.
- **Walnut Light** (walnut-light): Project card titles, case-study nav dots, the About photo glow.
- **Walnut Rule** (walnut-rule): The hairline rule under section and page titles (softened to 50% on case studies).

### Neutral
- **Linen** (linen): Page canvas behind the hero.
- **Gallery Grey** (gallery-grey): Projects and About section grounds, plus the gap band between them.
- **Silver** (silver): Case-study page ground.
- **Cream Glass** (cream-glass): Mixed at 60% for the frosted case-study card.
- **Slide Mat** (slide-mat): The thin grey mat framing screenshots and galleries.
- **Body Ink** (body-ink): Case-study body copy, neutral black at 60% (4.9:1 on the case-study card). About body is set in Forest Ink instead.
- **Caption Ink** (caption-ink): Italic captions.
- **Summary Ink** (summary-ink): Project-card summaries.

**The One Ink Rule.** Headings and chrome speak in Forest Ink; nothing else competes for that role. Walnut is accent-only, with one recorded exception: project-card titles are set in Walnut Light to mark a project's name apart from the green section heading above them.

## Typography

**Display Font:** Amiri (with Georgia, Times New Roman, serif)
**Body Font:** Amiri (same family)

**Character:** A classical Naskh-companion roman with calligraphic italics. It reads as literary and unhurried, and suits a portfolio rooted in Islamic scholarship and craft.

### Hierarchy
- **Hero name** (400, 300px at 1512, 1.15): The name only, overlapped by the cutout photo.
- **Display** (400, 150px at 1512, 1.15): Home section titles ("Projects", "About").
- **Headline** (400, 115px at 1512, 1.15): Case-study page titles.
- **Title** (400, 50px at 1512 with a 28px floor, 1.15): Case-study section headings, with a 3px grey accent bar.
- **Subtitle** (700, 50px at 1512): About sub-heads ("Background", "Design Philosophy").
- **Card title** (400, 45px at 1512): Project card titles in Walnut Light (the One Ink Rule's recorded exception).
- **Body** (400, 22px at 1512 with a 17px floor, ~1.6): Case-study body text. The About body is 20px at 1.65.
- **Caption** (italic 400, 15–20px, 1.65): Plate captions under images.
- **Label** (700, ~1.36em of body): Inline run-in labels ("Insight", "Constraint", "Presented") in side-text rows.

**The Scale-Is-Voice Rule.** Hierarchy is carried by dramatic size contrast within one family. Never add a second typeface for emphasis.

## Layout

The desktop grid is the 1512 × 982 Figma frame. The left margin is 6.085% (92px), and the content measure is 87.963% of the frame between margins. The home page uses three project cards, 417px wide at 1512, set at 6.085%, 37.368% and 68.717%. All home positions are percentages of the frame, and type is in `cqw`, so the composition scales as a single picture.

Case studies use a flowing glass card inset 28px (1.852%) from each edge, with 64px (4.233cqw) side padding. Sections are separated by 144px at 1512 (9.52cqw, 64px floor). Inside a section, heading and content sit about 23px apart (1.5cqw, 16px floor), and column gaps are about 30px (2cqw, 24px floor). Each section composes text and images asymmetrically, with offsets taken from the Figma frames.

Below 768px, case-study columns stack into one column with 24px gaps. The home page's fixed-ratio sections still scale down proportionally rather than reflowing.

**The Frame-Is-Truth Rule.** New desktop elements are positioned against the 1512 frame. Type sizes come from the scale tokens, never one-off values.

## Elevation & Depth

Depth is tactile. Surfaces respond physically to touch: cards lift, pills press, and glass refracts what is behind it. At rest, surfaces are tonal layers (linen → grey → frosted cream), and shadows mostly appear in response to state.

### Shadow Vocabulary
- **Soft** (`0 2px 8px rgba(31, 53, 29, 0.18)`): Text-shadow on hero nav links when hovered.
- **Lift** (`0 20px 48px rgba(31, 53, 29, 0.28)`): Project card on hover, with a 6px rise.
- **Glass pill stack**: Inner highlights plus a blurred ring shadow. It tightens on hover and tilts 25° on press.

**The Touch-Earns-Shadow Rule.** A surface gains or changes shadow only in response to the hand. Static decoration shadows are out of character.

## Shapes

Soft rectangles with generous corners on containers (20px cards, 18px photo) and near-square corners on imagery (2px images inside a 6px mat). Buttons are full pills, apart from the 15px Explore button. Rules are 1.5px hairlines.

## Components

### Glass Pill (Back, Resume, LinkedIn)
- **Character:** A tactile, liquid-glass capsule. *Do not modify without asking (see CLAUDE.md).*
- **Shape:** Full pill. Gradient glass fill, a conic-gradient 1.5px ring and a blurred drop shadow.
- **Hover / Press:** Scales to 0.975, the sheen sweeps, the ring angle rotates and the shadow tightens. On press it tilts 25° on X.

### Project Card
- **Corner Style:** 20px.
- **Background:** Translucent pale grey (`rgba(229,229,229,0.5)`).
- **Contents:** A centered Walnut Light title, Forest Ink tag pills, a plate image, an Audience / My role / Outcome summary, a ghost numeral (40% green, clipped) and an Explore button.
- **Hover:** Rises 6px and takes the Lift shadow. The Explore button darkens.
- **Focus:** A 2px Forest Ink outline at 4px offset.

### Tag Pill
- **Style:** 50% Forest Ink fill with white text at 70%, 22px tall at 1512 and fully rounded.

### Case-Study Card
- **Style:** Frosted cream glass (60%, 4px blur) with a 1px white rim at 35% and 20px corners. Content flows inside it.

### Section Heading (case studies)
- **Style:** Title type with a 3px, 30%-black accent bar running from cap height to baseline at its left.

### Slide Panel
- **Style:** A thin slide-mat (3–4px) around 2px-rounded screenshots, with an italic Caption Ink caption directly below.

## Do's and Don'ts

### Do:
- **Do** keep Amiri as the only typeface and express hierarchy through size, 700 weight and italics.
- **Do** place a walnut hairline rule under page and section titles.
- **Do** size type from the defined scale tokens (`--text-display` … `--text-xs`); no one-off sizes.
- **Do** caption images in italic Caption Ink, set tight beneath the plate.

### Don't:
- **Don't** introduce a sans-serif or second display face.
- **Don't** add saturated colors. The palette is forest ink, walnut and warm neutrals.
- **Don't** change the Back, Resume or LinkedIn glass pills without asking first.
- **Don't** add resting drop shadows to static content; shadow is a response to touch.
