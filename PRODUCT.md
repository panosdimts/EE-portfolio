# Product

<!-- impeccable:product-schema 1 -->

Facts below come from the site's existing copy, the resume, and the owner's standing instructions. The owner delegated every open product and design decision for the 2026-11-01 redesign ("full permission and design choice"); items marked *(inferred)* were not separately confirmed.

## Platform

web

## Users

- **Primary:** engineers and hiring managers screening interns for IC design, analog hardware, and device-characterization roles. They arrive from a resume link or an application, skim for evidence in under a minute, and open one project deeply if the first screen convinces them. *(inferred from the stated internship goal)*
- **Secondary:** recruiters and non-specialist screeners who need to understand what each project is for before the numbers mean anything; professors and lab members checking research background.

## Product Purpose

A personal engineering portfolio for Panagiotis (Panos) Dimtsoudis, Penn Electrical Engineering (B.S.E. + M.S.E., expected May 2028). It exists to land Summer 2027 internships and research work in IC design, analog hardware, and device characterization. Success: a screener leaves knowing he designs at the transistor level, builds and debugs real boards, and measures devices, and has opened at least one project write-up or the resume.

## Positioning

Every claim on the site is a measured number with its condition: simulated against measured, target against result, with failures reported (the MAC fails at 0.80 ns and returns 909 instead of 845; the ECG corner landed at 190.5 Hz against a 160 Hz target). Few student portfolios publish their misses; this one treats them as evidence.

## Operating Context

- Static HTML/CSS/JS on GitHub Pages at `panosdimts.github.io/EE-portfolio/`. No framework, no build step beyond `build.py`, which injects `_partials/header.html`, `_partials/footer.html`, and the project pager between marker comments.
- Visitors read on laptops (resume links from applications) and on phones (LinkedIn, email). *(inferred)*
- Project pages embed PDF reports, image galleries, and demo videos.

## Capabilities and Constraints

- Pages: home (`index.html`), project index (`projects.html`), about (`about.html`), seven project write-ups under `projects/`, `resume.pdf`.
- Project order is set in `build.py` `PROJECTS`.
- Large media (videos, PDFs) must not be re-encoded or moved; the `.mkv` is gitignored.

## Brand Commitments

- Name: "Panagiotis (Panos) Dimtsoudis". Monogram "PD".
- Voice: first person, plain, specific, quantified, honest about status ("nothing has been built yet"). No hype adjectives.
- Team credit is explicit: ESE 5700 is a two-person project with Dhruva Jindal and lists each member's contributions; Guitar Hero and EcoBeam are three-person projects.

## Evidence on Hand

- Project write-ups with measured results, PDF reports, layouts, waveforms, PCB renders, hardware photos, demo videos (paths under `projects/*/`).
- Portrait: `headshot.webp`.
- No testimonials, publications, or awards on hand. Do not invent any.

## Product Principles

1. Prove, don't claim: lead with the artifact and the number, then the sentence.
2. Report the condition with every number (supply, corner, simulated or measured).
3. Credit teammates precisely.
4. Be honest about status; unfinished work is labelled as such.
5. The ferroelectric work is described only as "a manuscript in preparation", with no venue named.

## Accessibility & Inclusion

WCAG 2.2 AA: keyboard navigation, visible focus, reduced-motion support, alt text on every figure, readable contrast, printable pages.
