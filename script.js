(function () {
  "use strict";

  // GitHub Releases – auto-downloads latest release (use consistent asset filenames without version numbers)
  var RELEASES_BASE = "https://github.com/JosueToe/QR-Photo-Transfer-releases/releases/latest";
  var RELEASES_DOWNLOAD = RELEASES_BASE + "/download";

  var releaseUrls = {
    windows: RELEASES_DOWNLOAD + "/QR-Photo-Transfer-Setup.exe",
    macosArm: RELEASES_DOWNLOAD + "/QR.Photo.Transfer-arm64.dmg",
    linux: RELEASES_DOWNLOAD + "/QR.Photo.Transfer.AppImage"
  };

  function detectOS() {
    var ua = navigator.userAgent || "";
    var platform = navigator.platform || "";
    if (/Win(dows|32|64|CE)/i.test(ua) || platform.indexOf("Win") !== -1) return "windows";
    if (/Mac|iPhone|iPad|iPod/.test(platform) || /Mac OS X/.test(ua)) return "macos";
    if (/Linux|X11|Android/.test(ua) || platform.indexOf("Linux") !== -1) return "linux";
    return "windows";
  }

  function applyHeroButton() {
    var heroBtn = document.getElementById("hero-download");
    var heroCaption = document.getElementById("hero-caption");
    if (!heroBtn) return;

    var os = detectOS();
    var label, url, caption;

    if (os === "windows") {
      label = "Download for Windows";
      url = releaseUrls.windows;
      caption = "";
    } else if (os === "macos") {
      label = "Download for macOS";
      url = releaseUrls.macosArm;
      caption = "Optimized for Apple Silicon";
    } else {
      label = "Download for Linux";
      url = releaseUrls.linux;
      caption = "";
    }

    heroBtn.textContent = label;
    heroBtn.href = url;

    if (heroCaption) {
      heroCaption.textContent = caption;
      heroCaption.setAttribute("aria-hidden", !caption);
    }
  }

  function wireDesktopLinks() {
    var ids = {
      "download-windows": releaseUrls.windows,
      "download-macos-arm": releaseUrls.macosArm,
      "download-linux": releaseUrls.linux
    };
    Object.keys(ids).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.href = ids[id];
    });
  }

  var TAGLINES = [
    "From phone to computer, no cloud in between.",
    "Scan. Send. Done. No WhatsApp, no Drive, no re-downloading.",
    "Your photos. Your network. Straight to your computer.",
    "Stop uploading to the cloud just to get images on your PC.",
    "Phone → QR code → computer. No Discord bots, no Google Drive, no hassle."
  ];

  function runTaglineRotator() {
    var el = document.getElementById("hero-tagline");
    if (!el || TAGLINES.length < 2) return;
    var index = 0;
    var duration = 450;
    function next() {
      el.classList.add("tagline-out");
      setTimeout(function () {
        index = (index + 1) % TAGLINES.length;
        el.textContent = TAGLINES[index];
        el.classList.remove("tagline-out");
        el.classList.add("tagline-in");
        setTimeout(function () {
          el.classList.remove("tagline-in");
        }, duration);
      }, duration);
    }
    setInterval(next, 4200);
  }

  var SCREENSHOTS = [
    { src: "assets/screenshot-desktop-hires.png", srcset: "assets/screenshot-desktop-hires.png 2x", alt: "QR Photo Transfer desktop app" },
    { src: "assets/screenshot-phone-hires.png", srcset: "assets/screenshot-phone-hires.png 2x", alt: "QR Photo Transfer on phone" },
    { src: "assets/screenshot-qr-hires.png", srcset: "assets/screenshot-qr-hires.png 2x", alt: "QR code session" },
    { src: "assets/screenshot-desktop2-hires.png", srcset: "assets/screenshot-desktop2-hires.png 2x", alt: "Desktop app window" },
    { src: "assets/screenshot-transfer-hires.png", srcset: "assets/screenshot-transfer-hires.png 2x", alt: "Transfer in progress" },
    { src: "assets/screenshot-folder-hires.png", srcset: "assets/screenshot-folder-hires.png 2x", alt: "Saved to folder" },
    { src: "assets/screenshot-session-hires.png", srcset: "assets/screenshot-session-hires.png 2x", alt: "Session screen" },
    { src: "assets/screenshot-phone2-hires.png", srcset: "assets/screenshot-phone2-hires.png 2x", alt: "Phone PWA" }
  ];

  function runScreenshotRotator() {
    var el = document.getElementById("features-screenshot");
    if (!el || SCREENSHOTS.length < 2) return;
    var index = 0;
    var duration = 600;
    function next() {
      el.classList.add("screenshot-out");
      setTimeout(function () {
        index = (index + 1) % SCREENSHOTS.length;
        var screenshot = SCREENSHOTS[index];
        el.src = screenshot.src;
        el.srcset = screenshot.srcset;
        el.alt = screenshot.alt;
        el.classList.remove("screenshot-out");
        el.classList.add("screenshot-in");
        setTimeout(function () {
          el.classList.remove("screenshot-in");
        }, duration);
      }, duration);
    }
    setInterval(next, 3500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      applyHeroButton();
      wireDesktopLinks();
      runTaglineRotator();
      runScreenshotRotator();
    });
  } else {
    applyHeroButton();
    wireDesktopLinks();
    runTaglineRotator();
    runScreenshotRotator();
  }
})();
