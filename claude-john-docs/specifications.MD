# Sandbox-cc - Specifications

Last updated: 2026-09-08

## Purpose

Sandbox-cc is a test bed for a remote development workflow, not (yet) a real
product. John will be traveling and wants to prove that he can direct Claude
Code running on his home PC ("WORKY") from a phone or laptop, have Claude
commit and push to GitHub, and try the result on an iPhone via GitHub Pages.

The eventual project is expected to be a simple web-based game that runs on an
iPhone in Safari. The game has NOT been chosen yet.

## Design decisions so far

- **Plain HTML / CSS / JS, no build step.** Files at the repo root are served
  directly by GitHub Pages. This keeps the loop short: edit, push, reload.
- **Separate files, not a single HTML file.** John is fine with html/css/js
  plus data files, since GitHub Pages serves them all.
- **iPhone-first from the start.** The placeholder page already carries the
  viewport meta tag with `viewport-fit=cover`, the Apple "web app capable"
  meta tags, `touch-action: manipulation`, and safe-area padding, so those
  are not forgotten later.
- **Dark placeholder palette** (`#1e1e2e` background, `#e8e8f0` text,
  `#7cc7ff` accent) chosen only so the page is obviously "ours" on the phone.
  The game will define its own look.
- **System font stack** (`-apple-system`, Segoe UI, Roboto) so nothing needs
  to be downloaded and the page looks native on iPhone.

## Code style (from John's global preferences)

- Easy to read and well commented beats clever or fast.
- Functional style where natural, but not strict.
- Small incremental steps. Scaffold first, then one feature at a time, and
  wait for John's go-ahead before starting anything advanced.
