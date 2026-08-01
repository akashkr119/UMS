const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (year) year.textContent = new Date().getFullYear();

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    formStatus.textContent = 'Sending your enquiry...';
    if (submitButton) submitButton.disabled = true;

    const payload = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      message: document.getElementById('message').value.trim()
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'Request failed');
      formStatus.textContent = result.message || 'Thank you. Your enquiry has been sent.';
      contactForm.reset();
    } catch (error) {
      formStatus.textContent = 'The online enquiry service is currently unavailable. Please visit the school for assistance.';
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}