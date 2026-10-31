# Panos Dimtsoudis Portfolio

This is my electrical engineering portfolio website, built with vanilla HTML, CSS, and JavaScript and hosted on GitHub Pages.

Live site: [https://panosdimts.github.io/EE-portfolio/](https://panosdimts.github.io/EE-portfolio/)

## About

I use this site to document projects from coursework, research, and personal hardware work. It includes PCB projects, embedded systems, device characterization work, reports, image galleries, demos, and a short about/contact section.

## Pages

- `index.html` - homepage, selected projects, experience, contact
- `projects.html` - full project list
- `about.html` - background, interests, skills
- `projects/` - individual project folders with their own HTML pages and assets

## Built With

- HTML
- CSS
- JavaScript
- GitHub Pages

No framework or build step is required.

## Structure

```text
EE-portfolio/
|-- index.html
|-- projects.html
|-- about.html
|-- style.css
|-- site.js
|-- scroll-animations.js
|-- build.py
|-- sitemap.xml
|-- robots.txt
|-- resume.pdf
|-- headshot.webp
|-- _partials/
|   |-- header.html
|   `-- footer.html
`-- projects/
    |-- SRAM_MAC_Accelerator_ESE5700/
    |-- Guitar_Hero_Synth_ESE3500/
    |-- Metal_Detector_ESE319/
    |-- Wireless_ECG_Monitor/
    |-- EcoBeam/
    |-- Tetris_CIS_Project/
    `-- Analog_Synthesizer/
```

## Shared header and footer

The nav and the footer live in `_partials/`, not in each page. After editing
either one, run:

```bash
python build.py
```

That writes them into every page between `<!-- build:header -->` and
`<!-- build:footer -->` marker comments. Each page keeps its own relative paths
and its own active nav link, which the script fills in. Everything outside the
markers is untouched, so pages stay hand-editable, and running the script twice
changes nothing.

The deployed site is still plain static HTML: the build happens before commit,
not in the browser.

## Credits

All project content and final site decisions are mine.

This website was designed and developed with assistance from AI tools, including OpenAI Codex and Anthropic's Claude Code, for code generation, debugging, refactoring, and design iteration. All content, engineering work, project descriptions, and final implementation decisions were reviewed and directed by Panagiotis Dimtsoudis.
