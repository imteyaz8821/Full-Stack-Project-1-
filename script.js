// Smooth scrolling for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form validation
const form = document.getElementById('contact-form');
const inputs = form.querySelectorAll('input, textarea');

form.addEventListener('submit', e => {
  let valid = true;

  inputs.forEach(input => {
    const errorMsg = input.nextElementSibling;
    if (!input.value.trim()) {
      errorMsg.textContent = 'This field is required';
      errorMsg.style.display = 'block';
      valid = false;
    } else if (input.type === 'email' && !validateEmail(input.value)) {
      errorMsg.textContent = 'Please enter a valid email';
      errorMsg.style.display = 'block';
      valid = false;
    } else {
      errorMsg.textContent = '';
      errorMsg.style.display = 'none';
    }
  });

  if (!valid) e.preventDefault();
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Dark/Light mode toggle
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    modeToggle.textContent = '☀️';
    localStorage.setItem('mode', 'dark');
  } else {
    modeToggle.textContent = '🌙';
    localStorage.setItem('mode', 'light');
  }
});

// Load saved mode preference
window.addEventListener('load', () => {
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'dark') {
    body.classList.add('dark');
    modeToggle.textContent = '☀️';
  }
});