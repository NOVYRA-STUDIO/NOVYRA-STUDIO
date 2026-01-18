/* Поява секцій */
const sections = document.querySelectorAll('.section');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

sections.forEach(sec => sectionObserver.observe(sec));

/* Поява карток + каскад */
const cards = document.querySelectorAll('.project-card');

const cardObserver = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = `${i * 0.15}s`;
      e.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => cardObserver.observe(card));

/* Світло + псевдо-3D */
cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);

    const rx = -(y / r.height - 0.5) * 12;
    const ry = (x / r.width - 0.5) * 12;

    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });
});