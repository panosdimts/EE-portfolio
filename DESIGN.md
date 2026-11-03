---
name: Panagiotis Dimtsoudis, Engineering Portfolio
description: A bound research lab notebook on quadrille, where every number carries its condition and hand estimates are corrected in red pen.
colors:
  cloth: "#173a32"
  cloth-deep: "#0f2a24"
  pen: "#bf2a20"
  paper: "#f6f8f7"
  sheet: "#fcfdfd"
  grid: "rgb(63 143 150 / 0.15)"
  ink: "#16223a"
  ink-2: "#3c4860"
  ink-3: "#4d5871"
  rule: "rgb(22 34 58 / 0.16)"
  rule-strong: "rgb(22 34 58 / 0.5)"
  cloth-ink: "#eef3ef"
  cloth-ink-2: "#b2c5bc"
  cloth-rule: "rgb(238 243 239 / 0.2)"
  tape: "rgb(232 225 188 / 0.78)"
typography:
  display:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.75rem, 1.4rem + 3.9vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.375rem, 1.45rem + 3.6vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1.1vw, 2.125rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 112"
  title-small:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 112"
  lede:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.1875rem, 1.05rem + 0.45vw, 1.4375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  ui:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 650
    lineHeight: 1.2
    fontVariation: "'wdth' 108"
  label:
    fontFamily: "'Martian Mono', ui-monospace, 'SFMono-Regular', Consolas, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.06em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 87.5"
  data:
    fontFamily: "'Martian Mono', ui-monospace, 'SFMono-Regular', Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 87.5"
rounded:
  radius: "3px"
spacing:
  g: "1.25rem"
  g-1-25: "1.5625rem"
  g-1-5: "1.875rem"
  g-2: "2.5rem"
  g-2-5: "3.125rem"
  g-3: "3.75rem"
  g-4: "5rem"
  g-5: "6.25rem"
  g-12: "15rem"
  margin: "clamp(1.25rem, 4.5vw, 3.75rem)"
  page-max: "75rem"
  measure: "34em"
components:
  masthead:
    backgroundColor: "{colors.cloth}"
    textColor: "{colors.cloth-ink}"
    height: "4rem"
  index-tab:
    textColor: "{colors.cloth-ink}"
    rounded: "{rounded.radius}"
    padding: "0 0.875rem"
    height: "2.75rem"
  index-tab-hover:
    backgroundColor: "rgb(238 243 239 / 0.1)"
    textColor: "{colors.cloth-ink}"
  index-tab-active:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-primary:
    backgroundColor: "{colors.cloth}"
    textColor: "{colors.cloth-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.radius}"
    padding: "0 1.125rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.cloth-deep}"
    textColor: "{colors.cloth-ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.radius}"
    padding: "0 1.125rem"
    height: "2.75rem"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.radius}"
    padding: "0 1.125rem"
    height: "2.75rem"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.data}"
  taped-figure:
    backgroundColor: "{colors.sheet}"
    padding: "0.625rem"
  tape-strip:
    backgroundColor: "{colors.tape}"
    width: "4.5rem"
    height: "1.375rem"
  callout-pin:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    size: "1.375rem"
  figure-caption:
    textColor: "{colors.ink-2}"
    typography: "{typography.data}"
  correction-estimate:
    textColor: "{colors.ink-3}"
    typography: "{typography.data}"
  correction-result:
    textColor: "{colors.pen}"
    typography: "{typography.data}"
  readings-head:
    textColor: "{colors.ink-3}"
    typography: "{typography.label}"
  readings-group:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  readings-value:
    textColor: "{colors.ink}"
    typography: "{typography.data}"
  status-line:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
  note-box:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    padding: "1rem 1.125rem 0.875rem"
  ledger-row:
    padding: "1.5625rem 0"
  ledger-figure:
    width: "17rem"
    padding: "0.5rem"
  contents-row:
    textColor: "{colors.ink}"
    padding: "1.25rem 0"
  contents-thumb:
    backgroundColor: "{colors.sheet}"
    padding: "0.3rem"
    width: "{spacing.g-12}"
  jump-list:
    textColor: "{colors.ink}"
    typography: "{typography.data}"
    height: "2rem"
  credits-part:
    textColor: "{colors.ink-3}"
    typography: "{typography.label}"
  credits-entry:
    textColor: "{colors.ink-2}"
    typography: "{typography.data}"
  stack-sketch:
    backgroundColor: "{colors.sheet}"
    padding: "3.5rem 1rem 1.5rem"
  log-date:
    textColor: "{colors.ink-2}"
    typography: "{typography.data}"
  back-cover:
    backgroundColor: "{colors.cloth}"
    textColor: "{colors.cloth-ink}"
    padding: "3.75rem 0 1.875rem"
  switcher-button:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.radius}"
    size: "2.75rem"
  switcher-button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
---

# Design System: Panagiotis Dimtsoudis, Engineering Portfolio

## Overview

**Creative North Star: "The Bound Lab Notebook"**

Every page of the site is a page of one bound research notebook. Cool page stock is ruled in a pale blue-green quadrille; text is written in blue-black ink; the masthead and the back cover are the deep green bookcloth of the binding. Prints of layouts, boards and waveforms are taped onto the grid and annotated with numbered pins and leader lines. Where an entry reports a hand estimate against a simulated or measured result, the estimate is struck through in red pen and the result is written beside it. That red pen is the only colour inside the page.

The notebook keeps a working scientist's record rather than a printed form: figures are numbered within each entry (Fig. 1, Fig. 2) and the readings cite them, long entries open with a jump list of their parts, team work is credited part by part, and the back cover is signed. Words are set in Archivo, stretched wider as their rank rises; the instrument's voice, the numbers, units, dates, figure captions and the captions of tables and fact grids, is Martian Mono, condensed, with tabular figures. Status is drawn, not coloured: a solid rule for complete work, a dashed rule for work in progress.

Density is that of a working notebook: ruled tables and fact grids rather than cards, figures at working size, prose held to a fixed measure. Motion is the hand at work, and it happens once: on the home page the print settles onto the paper, the tape presses down, the pins are stamped, the leader lines are ruled out to their labels and then the red pen strikes the estimate; elsewhere, heading rules are inked as they arrive, pages turn under a cover that stays still, and the estimate is struck when it comes into view. The world sets itself against two stock portfolio looks it never uses: the dark developer portfolio (headshot hero, card grids, pill chips, eyebrow labels) and the empty white resume page.

**Key Characteristics:**
- Quadrille paper (1.25rem squares) behind every page; layout spacing in whole and quarter multiples of the square.
- Three materials only: paper and ink, bookcloth green for the cover regions and primary actions, red pen for corrections.
- Archivo for words (100% to 118% width by rank), Martian Mono for data and captions (87.5% width, tabular figures).
- Prints are taped, matted on bright sheet stock, and the only lifted objects on the page.
- Structure is drawn with rules: hairlines, ruled lines, 2px inked heading rules, dashed rules for open work.
- Figures are numbered and anchored within an entry, and the readings cite them.
- Motion is drawn once and only forward: settle, press, stamp, rule, strike, and a page turn; every piece has a finished reduced-motion state.

## Colors

A cool, nearly colourless paper-and-ink palette bound in deep green, with one red pen reserved for corrections.

### Primary
- **Bookcloth Green** (#173a32): the binding. Fills the sticky masthead, the back-cover footer, and the primary button; it is also the colour a body link turns on hover, and the theme colour of the browser chrome. Paper-coloured lettering on it reads at 11:1.
- **Spine Green** (#0f2a24): the deeper cloth. The hairline seam under the masthead, the primary button's hover fill, and, at 94% opacity, the scrim behind the fullscreen figure viewer.

### Secondary
- **Correction Red** (#bf2a20): the red pen. It draws the stroke across a struck estimate and writes the result beside it, and nothing else. 5.5:1 on the page stock.

### Neutral
- **Cool Page Stock** (#f6f8f7): the page itself, under the quadrille. Also the colour of the open index tab, the paper button on the back cover, the brand label glued to the cover, and the lettering on the electrodes of the device-stack sketch.
- **Print Stock** (#fcfdfd): the brighter stock of things laid on the page: taped prints and their mattes, fact grids, note boxes, code blocks, gallery frames, callout pins, drawn sketches.
- **Quadrille Blue-Green** (rgb(63 143 150 / 0.15)): the 1px ruling of the grid, drawn as two background gradients (also inside the sketched Tetris board); at 28%, the text-selection wash.
- **Blue-Black Ink** (#16223a): all headings and body text, 2px heading rules, 1.5px borders on notes and controls, the ghost button, focus outlines, callout pins and leaders, group heads in readings tables. 14.9:1 on the page.
- **Faded Ink** (#3c4860): secondary text: meta lines, conditions, captions, summaries, tags, log dates, credit lines, the electrodes in the stack sketch. 8.6:1.
- **Graphite** (#4d5871): form-cell labels, table heads, credit part labels, callout numbers, the struck estimate and its notes, list dashes, the pager direction. 6.7:1, the lightest text the page uses.
- **Hairline Rule** (rgb(22 34 58 / 0.16)): row separators inside tables, logs and class lists.
- **Ruled Line** (rgb(22 34 58 / 0.5)): the printed lines: ledger and contents row rules, fact-grid cells, readings group rules, tag separators, link underlines at rest, gallery ticks at rest, the outlines of the stack layers.
- **Cover Lettering** (#eef3ef): text, outlines and focus rings on the cloth.
- **Faded Lettering** (#b2c5bc): secondary text and labels on the cloth, the signature line, the closed menu toggle's border. 6.9:1 on cloth.
- **Cover Rule** (rgb(238 243 239 / 0.2)): rules between the contact-form rows and above the signature on the back cover, and between menu rows on small screens.
- **Masking Tape** (rgb(232 225 188 / 0.78)): the translucent strips holding prints to the page.

### Named Rules
**The Red Pen Rule.** Correction Red appears only inside a correction: the 2px stroke across the struck estimate and the result written beside it. Never a fill, a panel, a link, a hover, a badge, an icon, an error state, or a highlight.

**The Bookcloth Rule.** Green belongs to the binding and to the actions that leave the page: masthead, back cover, primary buttons, link hover, the viewer scrim. Inside the page it never fills a section, a card or a table; it appears only as a pencil tint inside a drawn figure (the ferroelectric layer of the device stack at 40% into print stock, the sketched Tetris pieces).

**The No Game Colours Rule.** Even a figure that would naturally be coloured (the Tetris board, a device cross-section) is redrawn in ink, faded ink and cloth tints on print stock.

## Typography

**Display Font:** Archivo (variable width 62 to 125, weight 100 to 900), with system-ui, -apple-system, Segoe UI, sans-serif fallback
**Body Font:** Archivo, same stack
**Label/Mono Font:** Martian Mono (variable width 75 to 112.5, weight 100 to 800), with ui-monospace, SFMono-Regular, Consolas, monospace fallback

**Character:** one grotesque that widens as it rises in rank, from 100% for prose to 118% for page titles, against a condensed technical mono that reads like the printed figures on a datasheet. The pairing is engineering paperwork, not a code editor.

The whole notebook scales together: the root size is 16px up to a 1440px window and grows linearly to 20px at 1920px (`clamp(100%, 0.25rem + 0.8333vw, 125%)`), so every rem and every quadrille square scales like browser zoom.

### Hierarchy
- **Display** (800, clamp(2.75rem → 5.25rem), 0.95, width 112%, −0.03em): the owner's name on the home page, narrowed to 104% width between 901 and 1100px so it holds its column; the 404 numeral at clamp(4rem → 9rem).
- **Headline** (800, clamp(2.375rem → 4.25rem), 1.0, width 118%, −0.025em): project titles and page openings (Projects, About), where the heading default line height of 1.12 applies.
- **Title** (700, clamp(1.5rem → 2.125rem), 1.12, width 112%, −0.015em): section heads on an inked rule, entry panel heads, the back-cover sign-off.
- **Title Small** (700, 1.1875rem, 1.25, width 112%): h3 entries in the log and bench, pager titles. Ledger titles step between title and title small at clamp(1.25rem → 1.625rem); contents titles at clamp(1.1875rem → 1.5rem).
- **Lede** (400, clamp(1.1875rem → 1.4375rem), 1.5): the opening sentence of a page or entry, held to 30 to 32em.
- **Body** (400, 1.0625rem, 1.6): prose at a 34em measure, about 66 characters. Strong text is 650.
- **UI** (400, 0.9375rem, 1.5): meta lines, margin notes, table bodies, summaries.
- **Button** (650, 0.9375rem, 1.2, width 108%): buttons; index tabs use 600 at width 106%.
- **Label** (Martian Mono 500, 0.6875rem, 1.3, 0.06em, uppercase, width 87.5%): fact-cell captions, table heads, margin-note heads, credit part labels, status words (0.04em); readings group heads use the same size at 700 in ink.
- **Data** (Martian Mono 400, 0.8125rem, width 87.5%, tabular figures): readings, values, corrections, dates, figure captions, credit lines, contact values, the jump list, and the text links that send the reader to another page.

### Named Rules
**The Instrument Voice Rule.** Martian Mono is for the record, not the prose: numbers and units set as data, dates, and the printed captions of tables and figures (cell labels, table heads, group heads, margin-note heads, figure captions, callout labels, status words). Display, headings, ledes and body prose are Archivo; a number inside a running sentence, including a callout's value line, stays in Archivo.

**The Stretch With Rank Rule.** Archivo's width rises with importance: 100% text, 106% tabs, 108% buttons, 112% headings and display, 118% page titles. Mono always runs condensed at 87.5%.

**The Labels Label Values Rule.** An uppercase mono label names the value, table rows or credit lines beside or under it, like the caption on a form box. It never sits above a heading as a decorative tag.

## Layout

The page is a centred column `min(page-max, 100% − 2 × margin)`; the masthead and back cover share it. Behind it the quadrille runs edge to edge in 1.25rem squares. Block spacing is set in multiples of that square: section tops 4 squares, page openings 2.5, column gaps 3, row gaps 2, ledger rows 1.25 squares top and bottom, figure grids 1.5 squares between rows and 1.25 between columns, the back cover 5 squares below the page with 3 squares of inner top padding. Inside components a rem sub-grid takes over (0.375, 0.5, 0.625, 0.75, 1 and 1.125rem). The blocks register to the square by size; their edges are not locked to the ruling's lines.

Column splits are fractional, never a 12-column framework: home opening 5fr | 7fr (copy, then the taped plate); project hero 7fr | 5fr; about 7fr | 4fr; back cover 5fr | 6fr. The ledger is two columns, the entry and a 17rem figure. The contents carry a 12-square (15rem) thumbnail column; the log an 11rem date column; entry pages a 15.5rem margin-note column beside the body. Inline figures sit two to a row inside an entry panel. Prose never runs wider than 34em.

The masthead is sticky; scroll padding clears it plus one square, and panels and figures anchored from a jump list or a Fig. link clear it the same way. Margin notes on entry pages stick under it (masthead height + 1.5 squares) and are unstuck by script when they are taller than the space below.

**Responsive behaviour (max-width breakpoints).**
- 1100px to 901px: the home name narrows to 104% width.
- 1080px: the project hero stacks; the cover print is capped at 40rem.
- 900px: home opening, about opening and entry body collapse to one column; margin notes flow into an auto-fit row above the body; the ledger figure narrows to 13rem; three-column groups (bench, areas) stack; the back cover stacks.
- 760px: the index tabs fold behind a Menu toggle; the home opening restacks in reading order (name, lede, availability note, actions, degree line, then the plate and its correction); the project hero restacks (title, discipline line, lede, cover, facts, actions); log dates move above their entries; contents thumbnails narrow to 7 squares; fact grids, figure grids and the pager go single column.
- 560px: callouts leave their leader lines and drop under the print as a numbered list while the pins stay on it; ledger and contents rows go single column (thumbnails capped at 14rem); gallery position ticks hide; tape strips shorten.

Print turns the notebook onto white paper: masthead, actions, gallery controls, the PDF viewer, the pager and tape are dropped, the back cover prints black on white under a 2px rule, external link addresses are written out, and every correction and heading rule prints already drawn.

### Named Rules
**The Quadrille Rule.** Spacing between blocks is a multiple of the 1.25rem square (1, 1.25, 1.5, 2, 2.5, 3, 4, 5); rem values smaller than a square belong inside components only.

**The Measure Rule.** Prose stops at 34em. Ledes stop at 30 to 32em.

## Elevation & Depth

The page is flat paper; depth belongs to objects laid on it. One lift shadow is shared by every print taped or laid onto the page (taped figures, inline figures, project covers, design sketches, gallery frames, contents thumbnails) and by the skip link that appears over the masthead. A contents thumbnail picked up under a fine pointer takes a deeper lift. Everything else separates by rules, borders and stock: sheet-white boxes on page-stock paper, ruled lines between rows, inked rules under headings. The cover cloth is joined to the page by a hairline seam, not a shadow.

### Shadow Vocabulary
- **Print lift** (`box-shadow: 0 1px 2px rgb(22 34 58 / 0.14), 0 0.75rem 1.75rem -1rem rgb(22 34 58 / 0.45)`): a print resting on the page, with a soft fall below it. Removed in print.
- **Print picked up** (`box-shadow: 0 2px 3px rgb(22 34 58 / 0.12), 0 1.25rem 2rem -1rem rgb(22 34 58 / 0.5)`): a contents thumbnail lifted 3px and turned −0.6° under a hovering fine pointer.
- **Tape edge** (`box-shadow: 0 0 0 1px rgb(22 34 58 / 0.04)`): the faint edge of a tape strip.
- **Pin ring** (`box-shadow: 0 0 0 1.5px #16223a, 0 0 0 4px rgb(252 253 253 / 0.65)`): the inked ring and paper halo of a callout pin.
- **Leader halo** (`box-shadow: 0 0 0 1px rgb(252 253 253 / 0.75)`): keeps a leader line legible where it crosses a dark print.
- **Cover seam** (`box-shadow: 0 1px 0 #0f2a24`): the masthead's lower edge.
- **Menu drop** (`box-shadow: 0 1.5rem 2rem -1.5rem rgb(15 42 36 / 0.6)`): the small-screen menu panel hanging from the masthead.

### Named Rules
**The Taped Print Rule.** Only a print lifts off the page. Tables, notes, fact grids, rows and panels stay flat on the paper and are drawn with rules.

## Shapes

Paper is square. Sheets, prints, fact grids, note boxes, tables, sketches and the back cover have no radius. A 3px radius softens only the things a hand presses: buttons, the gallery arrows, the copy and menu toggles, and the index tabs, which round only their top corners so they read as tabs cut into the cover's lower edge. Callout pins are the only circles.

The recurring forms are drawn, not filled: 1px hairlines and ruled lines, 1.5px inked borders on notes and controls, 2px inked rules under section and panel heads and above the contents and pager, a dashed 2px rule for open work. Tape strips sit at ±35° across the top corners of a print; the pen stroke is a 2px line with rounded ends tilted −7°. Schematics are built from flat rectangles outlined in a 1px ruled inset, with an open bracket for a dimension and a 2px ink needle for a probe. The brand label is a small paper rectangle with a double-ruled inset border.

## Components

### Masthead and index tabs
The notebook's cover, sticky at the top of every page.
- **Band:** Bookcloth Green, 4rem (3.2 squares) tall, Cover Lettering text, a Spine Green seam beneath.
- **Brand:** a paper label (2.5 × 1.875rem, mono bold "PD", double-ruled inset) glued to the cloth, then the name at 112% width and the role line in Faded Lettering (hidden under 760px).
- **Tabs:** sit on the band's lower edge, 2.75rem tall, 0.875rem side padding, top corners at 3px. Hover lays a 10% lettering wash. The open section's tab is Cool Page Stock with ink text, so it reads as a paper tab joined to the page below. Focus rings turn lettering-coloured on the cloth and ink-coloured, inset 4px, on the open tab.
- **Small screens:** a mono uppercase Menu toggle with a Faded Lettering outline opens a cloth panel of full-width rows separated by Cover Rules; the open toggle inverts to paper.
- **Page turn:** moving between pages is a cross-document view transition. The masthead is its own transition layer and holds still while the page beneath turns: the old page lifts 6px and fades over 160ms, the new one rises from 10px below over 320ms, both on the ease-out curve. Reduced motion cuts straight to the new page.

### Buttons
- **Shape:** 3px corners, 2.75rem minimum height, 1.125rem side padding, 1.5px border, Archivo 650 at 108% width, no wrapping.
- **Primary:** Bookcloth Green fill and border with Cover Lettering; hover deepens to Spine Green.
- **Ghost:** transparent with an ink border and ink text; on fine pointers hover fills with ink and turns the text to paper. A report button that is currently open in the viewer holds that inked state.
- **Paper:** the back cover's primary, page-stock fill with ink text; hover goes to pure white.
- **Press:** buttons scale to 0.98 over 120ms on the ease-out curve (gallery arrows to 0.96); reduced motion removes the press. Colour changes take 150ms.
- **Text links that send the reader elsewhere** ("All seven projects", "Full resume (PDF)", the back link, the pager direction) are set in mono data size, underlined.
- **Body links:** inherit the text colour with a 1px Ruled Line underline offset 0.22em; hover turns text and underline Bookcloth Green.

### Taped figures with callouts
The signature figure: a print taped onto the quadrille and annotated in place.
- **Print:** Print Stock matte (0.625rem, 0.75rem on the home plate), image full width, Print lift.
- **Tape:** two Masking Tape strips, 4.5 × 1.375rem, overhanging the top corners at −35° and +35°; smaller (3 to 3.25 × 1.125rem) on ledger thumbnails and inline figures, shorter under 560px, gone in print.
- **Caption:** mono data in Faded Ink, the figure number ("Fig. 1") in bold ink, an em dash, then what the figure shows and the condition of any number in it.
- **Callouts:** numbered pins (1.375rem circles, sheet fill, mono bold numeral, Pin ring) placed on the feature as fractions of the print; each runs a 1px ink leader line with a Leader halo out to a label column beside the print (56% print, 44% labels). Each label gives the pin number in Graphite, the feature name in bold mono, and the value with its condition in Faded Ink below. Under 560px the leaders are dropped and the labels become a numbered list under the print.
- **Home sequence:** on the home plate the figure assembles once on load, all on the ease-out curve except the leaders: the print settles from 14px below and −0.9° over 620ms; the tape presses down from 112% scale and transparent over 300ms after 420ms; the pins stamp from 60% scale over 260ms, starting at 640ms and 110ms apart; each leader line rules out left to right over 360ms on the in-out curve, starting at 700ms and 110ms apart; each label slides 6px in over 280ms, starting at 900ms and 110ms apart. On screens wider than 760px the red pen waits a further 1300ms so it strikes after the annotations. With reduced motion none of this plays and the plate is simply there.

### Inline figures
Figures set beside the claims they support on long entries.
- **Grid:** two taped prints per row inside an entry panel (1.5 squares between rows, 1.25 between columns), single column under 760px. Images are contained, never cropped, up to 28rem tall.
- **Numbering:** figures are numbered in order through the whole entry, starting from the cover as Fig. 1, and each carries an anchor (#fig-N) that clears the masthead when followed.
- **Citations:** a readings row cites its evidence in its Condition cell as a parenthesised "Fig. N" link.

### The correction
The world's most important component: a hand estimate corrected by the result.
- **Form:** an inline mono row: condition note in Graphite ("logical-effort estimate", "target", "LTspice"), the estimate in Graphite struck through, the next note ("simulated", "measured"), then the result in bold Correction Red. Marked up as a deletion and an insertion.
- **The stroke:** a 2px Correction Red line with rounded ends, overhanging the estimate by 0.15em each side, tilted −7°.
- **Motion:** the stroke draws once, left to right, over 420ms on the in-out curve, when the whole correction is in view, after a 240ms beat (on the wide home page, after the 1300ms wait). Without script support, with reduced motion and in print, the stroke is simply there.
- **Placements:** a correction line under the home plate (label above, a ruled line on top, a one-sentence explanation below); inline in ledger readings; inside the Value cell of a readings table.

### Readings tables
Quantity, Value, Condition: the way a datasheet table runs.
- **Head:** uppercase mono labels in Graphite above a 1.5px ink rule.
- **Rows:** Hairline Rule separators, 0.6rem vertical padding, no fills, no zebra striping. Quantity is an Archivo 600 row header; Value is mono data, tabular, unwrapped (wrapping allowed under 560px); Condition is Faded Ink at data size and may end with a Fig. citation.
- **Groups:** a long table splits into one body per part, each opened by a group head spanning the row: a bold uppercase ink mono label on a Ruled Line, a square of space above it.
- **Relatives:** the parts table on the about page uses the same rules; fact grids (project facts, about facts, architecture and concept grids) are ruled cells on Print Stock, each an uppercase label above its value.

### Jump list
- **Form:** on a long entry, a row of mono data-size links to its panels ("Overview", "Part 1: bitcell", "Reports"), wrapping, 1.25rem apart, each at least 2rem tall, underlined like any link. No box, no rule, no label.

### Contributions by part
- **Form:** a definition list in a margin note: each part is an uppercase Graphite label, followed by one line per person, the name in bold ink and their share of that part in Faded Ink at data size. The two names read side by side under every part, so credit is exact and symmetrical.

### Ledger and contents rows
- **Ledger (home):** rows between Ruled Lines with 1.25 squares of padding, two columns. The entry: title at 112% width with no underline until hover adds a 2px one; tags and status; a summary in Faded Ink at the measure; a short readings list of label and mono value or correction. The figure: a 17rem taped thumbnail at 4:3, a cropped detail of the entry's evidence rather than the whole print.
- **Contents (projects index):** a 2px ink rule opens the list; each row is one link: a 12-square thumbnail at 4:3 in a 0.3rem lifted matte, then the title, tags, status and summary. Hover underlines the title; under a fine pointer the thumbnail is picked up (3px up, −0.6°, the deeper lift, 220ms ease-out), and stays put with reduced motion.
- **Thumbnails:** cropped details at 4:3; a board or render with a transparent ground is contained on print stock instead; work with no shareable image gets a drawn schematic (the miniature device stack, the sketched Tetris board).
- **Tags:** plain Faded Ink text at data size separated by 1px Ruled Line verticals. Never pills, never fills.

### Section heads
- **Form:** a title over a 2px ink rule, with a mono text link opposite on the same baseline. Entry panel heads take the same rule.
- **Motion:** each rule is inked left to right over 640ms on the in-out curve as its heading comes into view (15% above the bottom of the viewport). Rules already on screen at load are simply there, and so is every rule with reduced motion, without script support and in print.

### Log
Dated entries for experience.
- **Row:** an 11rem date column in mono Faded Ink with tabular figures, then the entry: title small heading, an organisation line in Faded Ink, prose at the measure, tags. Rows divide on Hairline Rules. Under 760px the date sits above the entry.

### Status line
- **Form:** a 1.75rem, 2px ink rule followed by the status word as an uppercase mono label in Faded Ink. Solid rule: complete (or a finished prototype). Dashed rule: in progress, ongoing, this semester. Status is never a colour, a dot, a badge or a pill.

### Notes and margin notes
- **Note box:** a 1.5px ink-bordered box on Print Stock, its uppercase label sitting in the top rule like a form-field caption ("Availability").
- **Margin notes (entry pages):** a 15.5rem column of notes, each opened by a 1.5px ink rule and a label-style head, with UI-size text in Faded Ink.

### Device-stack sketch
A schematic drawn in the notebook's own materials where a photograph or plot cannot be shown.
- **Form:** on Print Stock, a vertical stack of flat layers, each outlined by a 1px Ruled Line inset and named in mono data: electrodes in Faded Ink with paper lettering, insulating layers at 14% ink, the active layer at 40% cloth in bold; an open ink bracket to the side carries the dimension in bold mono; a 2px ink needle tilted −24° lands on the top electrode. Captioned "not to scale".
- **Miniature:** the contents thumbnail repeats the stack as five bands with no text, in the same tints.

### Back cover
The closing cloth, on every page.
- **Band:** Bookcloth Green, 3 squares of top padding, Cover Lettering text, 5fr | 6fr columns.
- **Sign-off:** title-size heading, a sentence in Faded Lettering, a paper button and a mono text link.
- **Contact form:** a ruled list on Cover Rules; uppercase labels in Faded Lettering, mono values, rows at least 3rem tall with 2.75rem link targets; an outlined uppercase mono Copy button inverts to lettering on hover.
- **Signature:** across both columns, an uppercase mono line in Faded Lettering: "Recorded by" with the name in italic Archivo on an underline, then the copyright year.

### Galleries and viewer
- **Gallery:** the figure in a lifted Print Stock frame, controls on a row beneath: square 2.75rem arrow buttons (1.5px ink border, inline SVG chevrons, ink fill on hover), a mono caption, a bold mono count, and a rail of position ticks (2px Ruled Line ticks at half height, the open figure a full-height ink tick, 160ms). A new figure fades up from 25% opacity over 180ms ease-out; with reduced motion it simply swaps.
- **Viewer:** fullscreen figures open over a 94% Spine Green scrim that fades in over 160ms, the print matted in Print Stock coming forward from 97% scale and transparent over 220ms, both ease-out, with an outlined mono Close button in Cover Lettering. With reduced motion the viewer opens at once.

## Do's and Don'ts

### Do:
- **Do** strike the estimate and write the result beside it: Graphite estimate under a 2px Correction Red stroke at −7°, result in bold Correction Red, each with its condition note.
- **Do** give every number shown as data its condition (supply, corner, simulated or measured), in a Quantity / Value / Condition table or a label-and-value reading.
- **Do** number figures through an entry (Fig. N), anchor each one, and cite the figure from the reading it supports.
- **Do** tape prints to the page: Print Stock matte, two tape strips at ±35°, the Print lift; pin annotations to the feature with numbered pins and leader lines.
- **Do** crop thumbnails to a 4:3 detail of the evidence, and draw a schematic in ink and cloth tints where no image can be shown.
- **Do** space blocks in multiples of the 1.25rem square and hold prose to 34em.
- **Do** widen Archivo with rank (100% text to 118% page titles) and keep Martian Mono condensed at 87.5% with tabular figures.
- **Do** draw status as line form: solid 2px rule for complete, dashed for in progress.
- **Do** credit team work part by part, every member's share under every part.
- **Do** play authored motion once, forward, on the ease-out curve (cubic-bezier(0.23, 1, 0.32, 1)) for things arriving and the in-out curve (cubic-bezier(0.77, 0, 0.175, 1)) for lines being drawn, and give every motion a finished state under reduced motion, without script and in print.
- **Do** keep buttons, tabs and arrows at 2.75rem, and no target under 1.5rem.

### Don't:
- **Don't** use Correction Red for anything except a correction: no red links, alerts, highlights, hovers, badges or decoration.
- **Don't** colour status, or draw it as dots, badges or pills.
- **Don't** make tags into chips or pills; they are plain text separated by ruled verticals.
- **Don't** set display, headline, title, lede or body text in Martian Mono, and don't put an uppercase mono label above a heading as a decorative tag.
- **Don't** add shadows to tables, notes, rows or panels; only prints lift.
- **Don't** round paper: radius is 3px and only on buttons, toggles and the tops of index tabs.
- **Don't** let Bookcloth Green fill a section, card or table inside the page; inside the page it is only a tint in a drawn figure.
- **Don't** loop motion, tie it to scroll position, or replay it: a rule is inked once, a stroke is struck once, a page turns once.
