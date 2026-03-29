/* ── AeroTeerth — main.js ── */

document.addEventListener('DOMContentLoaded', () => {

  /* === Navbar scroll === */
  const navbar = document.querySelector('.navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* === Mobile hamburger === */
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });

  /* Close on link click */
  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  /* === Active nav link on scroll === */
  const sections = document.querySelectorAll('section[id]');
  const navAs    = document.querySelectorAll('.nav-links a[href^="#"]');

  const ioNav = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAs.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => ioNav.observe(s));

  /* === Reveal on scroll === */
  const reveals = document.querySelectorAll('.reveal');
  const ioReveal = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        ioReveal.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(r => ioReveal.observe(r));

  /* === Stagger children inside .stagger parent === */
  document.querySelectorAll('.stagger').forEach(parent => {
    [...parent.children].forEach((child, i) => {
      child.classList.add('reveal');
      child.style.transitionDelay = `${i * 0.08}s`;
    });
  });

  /* Re-run IO for staggered items */
  const ioStagger = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        ioStagger.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.stagger .reveal').forEach(el => ioStagger.observe(el));

});
