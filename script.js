// --- 1. Envelope Interactive Open Logic ---
const envelope = document.getElementById("envelope");
const celebrateBtn = document.getElementById("celebrateBtn");

envelope.addEventListener("click", (e) => {
  // If the click comes directly from the button inside the envelope, don't close it
  if (e.target !== celebrateBtn) {
    envelope.classList.toggle("opened");
  }
});

// --- 2. Canvas Confetti (Double Burst Explosion) ---
celebrateBtn.addEventListener("click", () => {
  const end = Date.now() + 3 * 1000; // 3 seconds execution duration

  (function frame() {
    // Left side burst matching her Emerald theme
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#dfba6b", "#132612", "#ffffff"],
    });
    // Right side burst matching his Purple theme
    confetti({
      particleCount: 6,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#dfba6b", "#5c3080", "#ffffff"],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
});

// --- 3. Twin Countdown Timer Logic ---
// Configure targeted birth date target (Year, Month Index (0-11), Day)
const birthdayTarget = new Date("June 12, 2026 00:00:00").getTime();

const runCountdown = () => {
  const timeNow = new Date().getTime();
  const discrepancy = birthdayTarget - timeNow;

  const d = Math.floor(discrepancy / (1000 * 60 * 60 * 24));
  const h = Math.floor(
    (discrepancy % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const m = Math.floor((discrepancy % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((discrepancy % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = d < 10 ? "0" + d : d;
  document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
  document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
  document.getElementById("seconds").innerText = s < 10 ? "0" + s : s;

  // Actions execution when countdown passes zero
  if (discrepancy < 0) {
    clearInterval(timerInterval);
    document.querySelector(".countdown-section").innerHTML =
      "<h2 style='color:#dfba6b;'>🎉 Turn Up! The Big Day is Here! 🎉</h2>";
  }
};

const timerInterval = setInterval(runCountdown, 1000);
runCountdown();
