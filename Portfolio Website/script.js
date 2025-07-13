// Hero Photo Alternator
const photos = document.querySelectorAll('.hero-photo');
let current = 0;

function showNextPhoto() {
  photos[current].classList.remove('active');
  current = (current + 1) % photos.length;
  photos[current].classList.add('active');
}

// Change photo every 8 seconds (longer for smoother feel)
setInterval(showNextPhoto, 8000);

// Smooth scroll for nav links (optional, works even if CSS smooth scroll is there)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Initialize Particles.js
particlesJS('particles-js', {
  particles: {
    number: {
      value: 200, // number of particles
      density: { enable: true, value_area: 800 }
    },
    color: {
      value: "#FFD700" // Gold particles
    },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000" },
      polygon: { nb_sides: 5 }
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: true, speed: 3, size_min: 0.5, sync: false }
    },
    line_linked: {
      enable: false // No connecting lines for a minimal look
    },
    move: {
      enable: true,
      speed: 0.6, // slow drift
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      attract: { enable: false }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" }, // particles gently move when hovered
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});
