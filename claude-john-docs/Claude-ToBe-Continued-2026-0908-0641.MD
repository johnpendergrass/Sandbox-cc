# Claude-ToBe-Continued - 2026-09-08 06:41

## Current state

Sandbox-cc is a working scaffold with the full remote pipeline verified.
No game has been chosen and no game code exists yet.

- Local folder: `E:\Sandbox-cc` (git repo, branch `main`, clean, in sync
  with origin).
- GitHub: https://github.com/johnpendergrass/Sandbox-cc (public).
- GitHub Pages: deploys from `main` / root. Live at
  https://johnpendergrass.github.io/Sandbox-cc/ (capital S is required).
- Files: `index.html`, `style.css`, `app.js` (placeholder page with iPhone
  meta tags, safe-area padding, and a load-time stamp), `README.md`,
  `.gitignore`, and `claude-john-docs/` with specs and these notes.
- Five commits so far, all docs or scaffold. Latest: "Docs: iPhone test
  passed; note lowercase repo rename as future todo".

## What was done this session (2026-09-08, first session)

1. John described the goal: a test bed for directing Claude Code on his
   home PC "WORKY" while traveling. Claude edits, commits, pushes; John
   reviews on GitHub and tries the app on his iPhone via Pages.
2. Confirmed tooling on WORKY: Git 2.53, GitHub CLI 2.94 logged in as
   johnpendergrass (so Claude can create repos, push, and configure Pages
   from the terminal).
3. Built the scaffold and docs, created the repo with `gh repo create`,
   pushed, enabled Pages through the GitHub API.
4. Tested the Claude in Chrome extension: browsed eClassical.com (home and
   Composers pages) and screenshotted the live Pages site. Both worked.
   One navigation to github.io was refused on the first try and worked on
   retry; the extension's "Your approved sites" list is display-only and
   stays empty even while Claude Code browses, so nothing to configure.
5. John loaded the Pages URL on his iPhone. Works fine.
6. John is now restarting to test a remote session (claude.ai session
   link from another device).

## Immediate ToDo

- [ ] Confirm the remote session can drive this PC (John's test after
      restart). If this file is being read from a remote session, that
      test has at least partly succeeded.
- [ ] John: pick the game. Constraints: simple, touch-based, runs in
      iPhone Safari, plain HTML/CSS/JS, no build step.
- [ ] Once chosen: add a short design section to `specifications.MD`,
      then build the smallest playable slice, push, and let John try it.

## Longer-term ToDo

- Rename the repo to lowercase `sandbox-cc` (John did not intend the
  capital S; Pages URLs are case-sensitive). GitHub redirects the old name;
  afterwards run
  `git remote set-url origin https://github.com/johnpendergrass/sandbox-cc.git`.
  This changes a shared URL, so wait for John to say go.
- Web app manifest and icons for a proper "Add to Home Screen" install.
- Version string in the page footer so John can tell which push is live.
- Decide root vs `docs/` folder for the app (root is simplest; keep it
  unless there is a reason to move).

## Notes for the next session

- Read this file plus `specifications.MD` and
  `specifications-technical.MD` first, then confirm to John.
- John explicitly approved committing and pushing after each completed
  step for this project. Do not ask each time.
- Keep steps small. Scaffold first, one feature at a time, wait for John's
  go-ahead before advanced work.
- Chrome screenshots: use the Claude in Chrome tools (tabs_context_mcp,
  navigate, computer screenshot). If a domain is refused once, retry.
- Line endings: files were written with LF; Git warns it will convert to
  CRLF on this Windows box. Harmless, ignore the warnings.
