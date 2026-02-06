# QR Photo Transfer – Releases & Website

This repository hosts **release builds** of [QR Photo Transfer](https://github.com/JosueToe/QR-Photo-Transfer-releases) and the **download landing page** where users can get the app.

## What is QR Photo Transfer?

QR Photo Transfer is a desktop app (plus a web app on your phone) that moves images between your phone and computer over your local network. You connect by scanning a QR code (or soon, opening a shareable link), then send photos either way—no cloud uploads, no WhatsApp or Discord, no re-downloading.

- **Phone ↔ computer** — Send from phone to PC or from PC to phone. Choose direction, scan the QR or use the link.
- **No cloud** — Images go device-to-device; we don’t store them on our servers.
- **Your folder** — Received images save to a folder you choose on your computer (e.g. Pictures).
- **Works on your phone in the browser** — No app store install; add to home screen for an app-like experience.

## Download

- **Windows, macOS (Apple Silicon), and Linux** — Use the [Releases](https://github.com/JosueToe/QR-Photo-Transfer-releases/releases) page or the [landing page](https://josuetoe.github.io/QR-Photo-Transfer-releases/) (when GitHub Pages is enabled) to download the latest build for your platform.

## This repo

- **Releases** — Published installers and binaries (e.g. Windows `.exe`, macOS `.dmg`, Linux `.AppImage`) are attached to [Releases](https://github.com/JosueToe/QR-Photo-Transfer-releases/releases).
- **Website** — The root contains a static landing page (`index.html`, `styles.css`, `script.js`) for the download site. Enable **GitHub Pages** (Settings → Pages → Deploy from branch `main`, root) to serve it at `https://<username>.github.io/QR-Photo-Transfer-releases/`.

## Hero polaroid screenshots

The hero section shows eight polaroid-style screenshots in `assets/`. To avoid grainy or pixelated images, use **high-resolution** PNGs:

- **Minimum:** 440×330 px per image (so they display sharp at 220×165 px).
- **Optional 2× for retina:** Add `@2x` versions (e.g. `screenshot-desktop@2x.png` at 440×330 px). The page uses `srcset` so high-DPI screens will load these automatically.

Keep the same filenames; replace the files with higher-res exports if they look blurry.

## Running the site locally

Open `index.html` in a browser, or serve the repo root with any static server (e.g. `npx serve .` or your editor’s Live Server). The page uses relative paths and works without a build step.
