/* ==================================
   CURSOR GLOW
================================== */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  if (!glow) return;

  glow.style.left = `${e.clientX - 140}px`;
  glow.style.top = `${e.clientY - 140}px`;
});

/* ==================================
   ANIMATED COUNTERS
================================== */

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
  const target = Number(counter.dataset.target);
  let current = 0;

  const increment = target / 80;

  const update = () => {
    current += increment;

    if (current < target) {
      counter.innerText = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

/* ==================================
   SCROLL REVEAL ANIMATION
================================== */

const revealElements = document.querySelectorAll(
  ".feature-card, .zone-card, .timeline-item, .impact-card, .stat-card"
);

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(50px)";
  element.style.transition =
    "all 0.8s cubic-bezier(.17,.67,.45,1)";
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

/* ==================================
   HERO HUD FLOATING EFFECT
================================== */

const hudCards = document.querySelectorAll(".hud-card");

hudCards.forEach((card, index) => {
  let direction = 1;

  setInterval(() => {
    direction *= -1;

    card.animate(
      [
        {
          transform: `translateY(${direction * 10}px)`,
        },
        {
          transform: `translateY(${direction * -10}px)`,
        },
      ],
      {
        duration: 4000 + index * 500,
        fill: "forwards",
      }
    );
  }, 4000);
});

/* ==================================
   AI CORE PARALLAX ROTATION
================================== */

const heroCore = document.querySelector(".hero-core");

document.addEventListener("mousemove", (e) => {
  if (!heroCore) return;

  const x =
    (e.clientX / window.innerWidth - 0.5) * 20;

  const y =
    (e.clientY / window.innerHeight - 0.5) * 20;

  heroCore.style.transform = `
    rotateY(${x}deg)
    rotateX(${-y}deg)
  `;
});

/* ==================================
   PARTICLES GENERATOR
================================== */

const particleContainer =
  document.querySelector(".particles");

if (particleContainer) {
  for (let i = 0; i < 60; i++) {
    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
      Math.random() * 100 + "%";

    particle.style.top =
      Math.random() * 100 + "%";

    particle.style.animationDuration =
      4 + Math.random() * 8 + "s";

    particle.style.animationDelay =
      Math.random() * 5 + "s";

    particle.style.width =
      2 + Math.random() * 4 + "px";

    particle.style.height =
      particle.style.width;

    particleContainer.appendChild(particle);
  }
}

/* ==================================
   PARTICLE STYLES
================================== */

const particleStyles = document.createElement("style");

particleStyles.innerHTML = `
.particles{
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:-2;
  overflow:hidden;
}

.particle{
  position:absolute;
  border-radius:50%;
  background:#00e5ff;
  opacity:.4;
  animation:floatParticle linear infinite;
}

@keyframes floatParticle{

  0%{
    transform:
    translateY(0)
    scale(1);
    opacity:0;
  }

  20%{
    opacity:.7;
  }

  100%{
    transform:
    translateY(-200px)
    scale(1.8);

    opacity:0;
  }
}
`;

document.head.appendChild(particleStyles);

/* ==================================
   ACTIVE NAVIGATION HIGHLIGHT
================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 200;

    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${current}`
    ) {
      link.classList.add("active");
    }
  });
});

/* ==================================
   BUTTON GLOW EFFECT
================================== */

const buttons = document.querySelectorAll(
  ".primary-btn, .nav-btn"
);

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.boxShadow =
      "0 0 25px rgba(0,229,255,.8)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.boxShadow = "none";
  });
});

/* ==================================
   PAGE LOAD ANIMATION
================================== */

window.addEventListener("load", () => {
  document.body.animate(
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 1000,
      fill: "forwards",
    }
  );
});

/* ==================================
   CONSOLE EASTER EGG
================================== */

console.log(`
╔══════════════════════════════════╗
║      TECHFEST IIT BOMBAY         ║
║                                  ║
║        FUTURE STARTS HERE        ║
║                                  ║
║      CYBER EXPERIENCE MODE       ║
╚══════════════════════════════════╝
`);