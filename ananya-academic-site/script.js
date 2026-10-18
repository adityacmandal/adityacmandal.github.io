const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
document.documentElement.classList.add('js');

const closeMenu = () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
};

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  closeMenu();
  const target = document.querySelector(link.hash);
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
}));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinks.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});

document.addEventListener('click', event => {
  if (!event.target.closest('.nav-wrap')) closeMenu();
});

window.matchMedia('(max-width: 900px)').addEventListener('change', closeMenu);
document.getElementById('year').textContent = new Date().getFullYear();
