/* Personalise the birthday surprise here. */
const birthdayConfig = {
  name: "Tishie",
  birthDate: "" // Optional: YYYY-MM-DD. Leave blank to hide the age counter.
};

document.addEventListener("DOMContentLoaded", () => {
  const name = birthdayConfig.name.trim() || "beautiful soul";
  document.title = `Happy birthday, ${name} ♡`;
  document.querySelector("#hero-name").textContent = name;
  document.querySelectorAll("[data-person-name]").forEach(el => el.textContent = name);

  // Optional live age counter. Uses the visitor's local time.
  const counter = document.querySelector("#age-counter");
  if (birthdayConfig.birthDate && /^\d{4}-\d{2}-\d{2}$/.test(birthdayConfig.birthDate)) {
    const birth = new Date(`${birthdayConfig.birthDate}T00:00:00`);
    if (!Number.isNaN(birth.getTime()) && birth <= new Date()) {
      const updateAge = () => {
        const now = new Date();
        let years = now.getFullYear() - birth.getFullYear();
        let anniversary = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
        if (now < anniversary) years--;
        const lastBirthday = new Date(birth.getFullYear() + years, birth.getMonth(), birth.getDate());
        const days = Math.floor((now - lastBirthday) / 86400000);
        counter.textContent = `Celebrating ${years} wonderful years · ${days} days into your next chapter`;
      };
      updateAge();
      window.setInterval(updateAge, 60 * 60 * 1000);
    }
  } else {
    counter.hidden = true;
  }

  // Candle interaction.
  const wishButton = document.querySelector("#wish-button");
  const wishMessage = document.querySelector("#wish-message");
  wishButton.addEventListener("click", () => {
    document.querySelector(".cake").classList.add("wished");
    wishButton.disabled = true;
    wishButton.textContent = "Wish sent ♡";
    wishMessage.textContent = "May this year bring you everything your heart has been hoping for. Happy birthday!";
    celebrate(90);
  });

  document.querySelector("#confetti-button").addEventListener("click", () => celebrate(55));

  // Small, dependency-free celebration with a reduced-motion fallback.
  function celebrate(count) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wishMessage.textContent = "Sending you a shower of love and good wishes! ♡";
      return;
    }
    const colours = ["#e99aa8", "#f5c6a5", "#b8a8cf", "#d7b6a0", "#fff0d9"];
    for (let i = 0; i < count; i++) {
      const piece = document.createElement("i");
      piece.className = "confetti";
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.background = colours[i % colours.length];
      piece.style.setProperty("--drift", `${(Math.random() - .5) * 180}px`);
      piece.style.animationDelay = `${Math.random() * .45}s`;
      document.body.append(piece);
      window.setTimeout(() => piece.remove(), 2600);
    }
  }

  // Subtle drifting petals; disabled for reduced-motion preferences.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const layer = document.querySelector(".petal-layer");
    for (let i = 0; i < 14; i++) {
      const petal = document.createElement("span");
      petal.textContent = "✿";
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.animationDelay = `${Math.random() * 18}s`;
      petal.style.animationDuration = `${14 + Math.random() * 12}s`;
      layer.append(petal);
    }
  }
});
