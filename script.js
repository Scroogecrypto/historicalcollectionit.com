const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');

window.addEventListener('scroll', () => {
  if (window.scrollY > 18) header?.classList.add('scrolled');
  else header?.classList.remove('scrolled');
});

toggle?.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#contactForm');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || '';
  const email = data.get('email') || '';
  const company = data.get('company') || '';
  const message = data.get('message') || '';
  const subject = encodeURIComponent('Business enquiry from Historical Collection website');
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
  );
  window.location.href = `mailto:info@historicalcollectionit.com?subject=${subject}&body=${body}`;
});
