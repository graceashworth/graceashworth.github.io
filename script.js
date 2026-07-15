/* ═══════════════════════════════════════════════════════════════
   GRACE ASHWORTH · script.js
   Two small jobs:
   1. Fill in the postmark's month + year automatically
   2. Run the envelope opening on the first visit of a session
   ═══════════════════════════════════════════════════════════════ */

/* ── 1. Postmark date ─────────────────────────────────────────── */

const postmarkDate = document.getElementById("postmark-date");
if (postmarkDate) {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const now = new Date();
  postmarkDate.textContent = months[now.getMonth()] + " " + now.getFullYear();
}

/* ── 2. Envelope opening ──────────────────────────────────────── */
/* Shows once per browser session. To make it show on EVERY visit,
   delete the two sessionStorage lines below. */

const overlay = document.getElementById("envelope-overlay");
if (overlay) {
  const alreadyOpened = sessionStorage.getItem("letterOpened");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (alreadyOpened || reducedMotion) {
    overlay.classList.add("hidden");
  } else {
    overlay.addEventListener("click", function () {
      sessionStorage.setItem("letterOpened", "yes");
      overlay.querySelector(".envelope").classList.add("open");   // flap lifts
      setTimeout(function () {
        overlay.classList.add("opening");                          // fade out
      }, 500);
      setTimeout(function () {
        overlay.classList.add("hidden");                           // remove
      }, 1200);
    }, { once: true });
  }
}
