# Claude-ToBe-Continued - 2026-09-08 06:20

This is the FIRST continuity file for Sandbox-cc. It is the historical
baseline and should be kept even when older files are pruned.

## Current state

The project is a freshly created scaffold. Nothing game-related exists yet.

- Git repo initialized on `main` in `E:\Sandbox-cc`.
- Placeholder `index.html`, `style.css`, `app.js`, `README.md`, `.gitignore`.
- `claude-john-docs/` created with `specifications.MD`,
  `specifications-technical.MD`, and this file.
- GitHub repo `johnpendergrass/Sandbox-cc` created (public) and pushed.
- GitHub Pages enabled from `main` / root.
- Live URL: https://johnpendergrass.github.io/Sandbox-cc/

## What was done this session (2026-09-08)

1. John explained the goal: a test bed for remote development while
   traveling. Claude runs on WORKY (home PC), John instructs from afar,
   results are pushed to GitHub and tested on iPhone via Pages.
2. Confirmed Git and `gh` are installed and `gh` is logged in.
3. Built the scaffold and docs above, created the repo, pushed, enabled Pages.
4. Tested the Chrome extension by browsing eClassical.com. Result:
   - Browsing works (home page, Composers page, screenshots all fine).
   - This Chrome profile is NOT logged in to eClassical; the account icon
     led to a login form. Claude never enters passwords, so John must log
     in himself if that is ever needed.
   - A first attempt to open johnpendergrass.github.io was refused
     ("Navigation to this domain is not allowed"), but a retry a few
     minutes later worked and Claude screenshotted the live Pages site
     showing heading, text, and load time. Site permissions in the
     extension are granted on first visit, not typed in by hand.

## Immediate ToDo

- [ ] John: open the live URL on the iPhone and confirm the placeholder
      page loads and shows the load time (proves HTML, CSS, and JS all served).
- [ ] John: pick the game.
- [ ] Claude: once the game is chosen, write a short design section in
      `specifications.MD` and build the smallest playable slice.

## Longer-term ToDo

- Web app manifest + icons for a proper home-screen install.
- Version string in the footer so John can tell which push is live.
- Decide whether to keep everything at the repo root or move the app into
  a `docs/` folder (Pages supports both; root is simplest).

## Notes for the next session

- Read this file plus the two specifications files first.
- The remote loop is: edit -> commit -> push -> John checks iPhone.
  John has approved pushing for this project; do not ask each time.
- Keep steps small and wait for John's go-ahead before advanced features.
