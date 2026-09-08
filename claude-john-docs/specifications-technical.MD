# Sandbox-cc - Technical Notes

Last updated: 2026-09-08

## Repository and hosting

- GitHub repo: https://github.com/johnpendergrass/Sandbox-cc (public)
- Default branch: `main`
- GitHub Pages: deploys from `main`, root folder (`/`). No Actions workflow,
  no build. A push to `main` is live in roughly 30-90 seconds.
- Live URL: https://johnpendergrass.github.io/Sandbox-cc/

## Local environment (WORKY PC)

- Project folder: `E:\Sandbox-cc`
- Windows 11, Git 2.53, GitHub CLI (`gh`) 2.94 logged in as johnpendergrass.
  Because `gh` is authenticated, Claude can create repos, push, and change
  Pages settings from the terminal without GitHub Desktop.
- Claude Code has the Chrome extension available, so it can open the live
  site in Chrome, resize to an iPhone-like viewport, and take screenshots
  for John to review remotely.

## Remote working loop

1. John sends an instruction through the Claude Code session (claude.ai link).
2. Claude edits files locally, checks them (Chrome screenshot if useful).
3. Claude commits and pushes to `main`.
4. John reviews the code on GitHub and opens the Pages URL on his iPhone.

Pushing is normally a "confirm first" action per John's global rules. For
this project John explicitly asked Claude to commit and push, so treat
"push after each completed step" as standing approval unless he says
otherwise.

## Files

| File | Role |
|------|------|
| `index.html` | Entry page. Carries the iPhone meta tags. |
| `style.css` | Placeholder styles; safe-area padding, touch settings. |
| `app.js` | Placeholder script; shows load time to prove JS ran. |
| `README.md` | Public description of the repo. |
| `claude-john-docs/` | Continuity docs read by Claude at session start. |

## iPhone gotchas to remember when the game starts

- Safari's address bar changes the visible height; prefer `100dvh` or
  `min-height: 100vh` plus flex centering over hard-coded pixel heights.
- Double-tap zoom is suppressed by `touch-action: manipulation`; if the game
  needs pinch or drag, revisit this.
- Audio cannot autoplay on iOS; it must start from a user tap.
- Test in a real iPhone Safari, not only in Chrome's device emulation.
- Use `localStorage` for saved state; it works on Pages and on the home
  screen app, but wrap reads and writes in try/catch.

## Possible future enhancements

- Add a `manifest.webmanifest` and icons so "Add to Home Screen" gives a
  proper app icon and name.
- Add a cache-busting version string to the page footer so John can tell
  which push he is looking at.
