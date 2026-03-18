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
      label = "Download for macOS (Beta)";
      url = releaseUrls.macosArm;
      caption = "Apple Silicon beta build (may have bugs)";
    } else {
      label = "Download for Linux (Beta)";
      url = releaseUrls.linux;
      caption = "Linux beta build (may have bugs)";
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
    "Photos, videos, and text—sent in seconds, not emails.",
    "Your files. Your network. Straight to your computer.",
    "Stop uploading to the cloud just to get things on your PC.",
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      applyHeroButton();
      wireDesktopLinks();
      runTaglineRotator();
    });
  } else {
    applyHeroButton();
    wireDesktopLinks();
    runTaglineRotator();
  }
})();
