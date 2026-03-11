# Secqr Photo Transfer – Releases & App Overview

This repository hosts **release builds** of **Secqr Photo Transfer** and the **download landing page** where users can get the app.

## What is Secqr?

Secqr Photo Transfer is a desktop app (plus a lightweight web app on your phone) that moves **photos, videos, and text** between your phone and computer over your own network.

You connect by scanning a QR code from the desktop app (or, soon, by opening a shareable link), then send what you need either way—**phone → PC** or **PC → phone**—without email, Discord, WhatsApp, or cloud uploads in the middle.

### Core ideas

- **Phone ↔ computer** — Send from phone to PC or from PC to phone. Choose direction, scan the QR or open the link.
- **Photos, videos, and text** — Drop images, short clips, and snippets/links into the same flow instead of juggling multiple apps.
- **No cloud drive required** — Transfers go device-to-device; they are not stored in long‑term buckets or reused for analytics.
- **Your folders, your clipboard** — Received files land in a folder you choose on your computer (e.g. Pictures, an encrypted volume, or a synced drive). Text can be delivered in a way that’s easy to paste on the other side.
- **Works in your phone browser** — No app store install; you open a link, or add it to your home screen for an app-like experience.

### Security & privacy

- **Local‑network first** — Secqr prefers your Wi‑Fi / LAN so transfers stay inside your own network whenever possible.
- **Session‑based access** — Each transfer session has its own ID and QR code. Expired or closed sessions stop working.
- **No big‑corp data grab** — Transfers may be relayed as needed to connect devices but are **not stored long term**, **not sold to advertisers**, and **not fed into third‑party analytics or model training**.

## Download

- **Windows, macOS (Apple Silicon), and Linux** — Use the [Releases](https://github.com/JosueToe/QR-Photo-Transfer-releases/releases) page or the landing page (when GitHub Pages is enabled) to download the latest build for your platform.

## This repo

- **Releases** — Published installers and binaries (e.g. Windows `.exe`, macOS `.dmg`, Linux `.AppImage`) are attached to [Releases](https://github.com/JosueToe/QR-Photo-Transfer-releases/releases).
- **Website** — The root contains a static download page (`index.html`, `styles.css`, `script.js`) for Secqr. Enable **GitHub Pages** (Settings → Pages → Deploy from branch `main`, root) to serve it at `https://<username>.github.io/QR-Photo-Transfer-releases/`.

## Running the site locally

Open `index.html` in a browser, or serve the repo root with any static server (e.g. `npx serve .` or your editor’s Live Server). The page uses relative paths and works without a build step.
