#!/usr/bin/env python3
"""Inject the shared header, footer and project pager into every page.

The nav and footer live once, in _partials/. This script writes them into each
HTML file between marker comments, so the deployed site stays plain static HTML
with no client-side templating.

Project detail pages additionally get a previous/next pager generated from the
PROJECTS list below, so a visitor who lands on one has somewhere to go besides
the browser Back button. Add a new project page to PROJECTS and re-run.

Run it after editing _partials/header.html, _partials/footer.html or PROJECTS:

    python build.py

Everything outside the markers is left exactly as it is, so pages stay
hand-editable. Running the script twice in a row changes nothing.
"""

from __future__ import annotations

import glob
import os
import re
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SKIP_DIRS = ("tmp", "_partials", "backups")

HEADER_START = "<!-- build:header -->"
HEADER_END = "<!-- /build:header -->"
FOOTER_START = "<!-- build:footer -->"
FOOTER_END = "<!-- /build:footer -->"
PAGER_START = "<!-- build:projectnav -->"
PAGER_END = "<!-- /build:projectnav -->"

# First-run patterns: used only when a page has no markers yet.
HEADER_RE = re.compile(
    r'<a class="skip-link".*?</header>', re.S)
FOOTER_RE = re.compile(
    r'<footer class="site-footer".*?<script src="[^"]*scroll-animations\.js" defer></script>',
    re.S)
# Zero-width: the pager is inserted just before </main>, never replacing copy.
PAGER_RE = re.compile(r"(?=\n[ \t]*</main>)")

# Reading order of the project pages. Drives the previous/next pager; the
# titles are copied verbatim from each page's own <h1 class="project-detail-title">.
PROJECTS = [
    ("projects/SRAM_MAC_Accelerator_ESE5700/sram-mac.html", "SRAM-Based 4-bit MAC Accelerator"),
    ("projects/Metal_Detector_ESE319/metal-detector.html", "Metal Detector PCB"),
    ("projects/Wireless_ECG_Monitor/ecg.html", "Wireless ECG Monitor"),
    ("projects/Guitar_Hero_Synth_ESE3500/guitar-hero.html", "Guitar Hero Synthesizer"),
    ("projects/EcoBeam/ecobeam.html", "EcoBeam"),
    ("projects/Analog_Synthesizer/analog_synth.html", "Analog Synthesizer"),
    ("projects/Tetris_CIS_Project/tetris.html", "Java Tetris"),
]

ACTIVE = 'class="nav-link active" aria-current="{}"'
INACTIVE = 'class="nav-link"'


def page_root(path: str) -> str:
    """Relative prefix from a page back to the site root ('' or '../../')."""
    depth = path.replace("\\", "/").count("/")
    return "../" * depth


def nav_state(path: str) -> dict[str, str]:
    """Which nav item is current, and what aria-current value it gets.

    Top-level pages are the page itself ('page'). Project pages live under the
    Projects section, so they mark it as the current section ('true') instead.
    """
    name = path.replace("\\", "/")
    state = {"HOME": INACTIVE, "PROJECTS": INACTIVE, "ABOUT": INACTIVE}
    if name == "index.html":
        state["HOME"] = ACTIVE.format("page")
    elif name == "projects.html":
        state["PROJECTS"] = ACTIVE.format("page")
    elif name == "about.html":
        state["ABOUT"] = ACTIVE.format("page")
    elif name.startswith("projects/"):
        state["PROJECTS"] = ACTIVE.format("true")
    return state


def render(template: str, path: str, page_html: str = "") -> str:
    out = template.replace("{{ROOT}}", page_root(path))
    for key, value in nav_state(path).items():
        out = out.replace("{{NAV_%s}}" % key, value)
    # The footer carries id="contact" so the nav anchor lands somewhere on every
    # page. A page that defines its own #contact section keeps it, so the footer
    # drops the id rather than duplicating it.
    body = page_html.split(FOOTER_START)[0]
    out = out.replace("{{FOOTER_ID}}", "" if 'id="contact"' in body else ' id="contact"')
    return out.rstrip("\n")


PAGER_LINK = (
    '<a class="project-pager-link project-pager-{side}" href="{href}">'
    '<span class="project-pager-dir">{label}</span>'
    '<span class="project-pager-title">{title}</span></a>'
)


def render_pager(path: str) -> str | None:
    """Previous/next markup for a project page, or None for other pages."""
    order = [p for p, _ in PROJECTS]
    if path not in order:
        return None
    i = order.index(path)
    root = page_root(path)
    links = []
    if i > 0:
        target, title = PROJECTS[i - 1]
        links.append(PAGER_LINK.format(
            side="prev", href=root + target, label="&larr; Previous", title=title))
    if i < len(order) - 1:
        target, title = PROJECTS[i + 1]
        links.append(PAGER_LINK.format(
            side="next", href=root + target, label="Next &rarr;", title=title))
    joined = "\n      ".join(links)
    return (
        '<nav class="project-pager" aria-label="Project navigation">\n'
        f"      {joined}\n"
        "    </nav>"
    )


def replace_block(html: str, start: str, end: str, body: str,
                  first_run: re.Pattern[str], label: str, path: str) -> tuple[str, bool]:
    block = f"{start}\n  {body}\n  {end}"
    if start in html and end in html:
        pattern = re.compile(re.escape(start) + r".*?" + re.escape(end), re.S)
        return pattern.sub(lambda _: block, html, count=1), True
    match = first_run.search(html)
    if not match:
        print(f"  ! {path}: no {label} found, skipped", file=sys.stderr)
        return html, False
    return html[: match.start()] + block + html[match.end():], True


def apply_pager(html: str, path: str) -> str:
    """Write the previous/next pager into a project page, just before </main>."""
    body = render_pager(path)
    if body is None:
        return html
    block = f"{PAGER_START}\n    {body}\n    {PAGER_END}"
    if PAGER_START in html and PAGER_END in html:
        pattern = re.compile(re.escape(PAGER_START) + r".*?" + re.escape(PAGER_END), re.S)
        return pattern.sub(lambda _: block, html, count=1)
    match = PAGER_RE.search(html)
    if not match:
        print(f"  ! {path}: no </main> found, pager skipped", file=sys.stderr)
        return html
    return html[: match.start()] + "\n\n    " + block + html[match.start():]


def main() -> int:
    header_tpl = open(os.path.join(ROOT, "_partials", "header.html"), encoding="utf-8").read()
    footer_tpl = open(os.path.join(ROOT, "_partials", "footer.html"), encoding="utf-8").read()

    os.chdir(ROOT)
    pages = sorted(
        p.replace("\\", "/") for p in glob.glob("**/*.html", recursive=True)
        if not p.replace("\\", "/").startswith(SKIP_DIRS)
    )

    # A project page missing from PROJECTS would silently get no pager, and the
    # pages on either side of it would link past it.
    # Redirect stubs (old URLs kept alive) have no nav, no footer and no pager.
    pages = [p for p in pages if 'http-equiv="refresh"' not in
             open(p, encoding="utf-8").read()]

    listed = {p for p, _ in PROJECTS}
    for path in pages:
        if path.startswith("projects/") and path not in listed:
            print(f"  ! {path}: not in PROJECTS, no pager", file=sys.stderr)

    changed = 0
    for path in pages:
        original = open(path, encoding="utf-8", newline="").read()
        html = original
        html, ok_h = replace_block(html, HEADER_START, HEADER_END,
                                   render(header_tpl, path), HEADER_RE, "header", path)
        html = apply_pager(html, path)
        html, ok_f = replace_block(html, FOOTER_START, FOOTER_END,
                                   render(footer_tpl, path, html), FOOTER_RE, "footer", path)
        if html != original:
            with open(path, "w", encoding="utf-8", newline="\n") as fh:
                fh.write(html)
            changed += 1
            print(f"  updated {path}")
        elif ok_h and ok_f:
            print(f"  ok      {path}")

    print(f"\n{len(pages)} pages, {changed} rewritten")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
