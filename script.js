// ABEX Group Landing Page Scripts

// Sticky Navbar on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth Scrolling for Nav Links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu if open
      mobileMenu.classList.add('hidden');
    }
  });
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// AOS.js Initialization
AOS.init({
  duration: 900,
  once: true,
  offset: 60,
});

// Registration Form Validation
const form = document.getElementById('registrationForm');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  formMessage.classList.add('hidden');
  formMessage.textContent = '';

  const fullName = form.fullName.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  // Basic validation
  if (!fullName || !email || !password || !confirmPassword) {
    showError('Please fill in all fields.');
    return;
  }
  if (!validateEmail(email)) {
    showError('Please enter a valid email address.');
    return;
  }
  if (password.length < 6) {
    showError('Password must be at least 6 characters.');
    return;
  }
  if (password !== confirmPassword) {
    showError('Passwords do not match.');
    return;
  }

  // Success (simulate registration)
  formMessage.classList.remove('hidden');
  formMessage.classList.remove('text-red-500');
  formMessage.classList.add('text-green-600');
  formMessage.textContent = 'Registration successful!';
  form.reset();
});

function showError(msg) {
  formMessage.classList.remove('hidden', 'text-green-600');
  formMessage.classList.add('text-red-500');
  formMessage.textContent = msg;
  formMessage.classList.add('animate-fadeInUp');
  setTimeout(() => {
    formMessage.classList.remove('animate-fadeInUp');
  }, 1000);
}

function validateEmail(email) {
  // Simple email regex
  return /^\S+@\S+\.\S+$/.test(email);
}

// Animate hero section on load
window.addEventListener('DOMContentLoaded', () => {
  const heroHeadline = document.querySelector('h1.animate-fadeInUp');
  const heroSub = document.querySelector('p.animate-fadeInUp');
  const ctaBtn = document.querySelector('a.animate-bounceIn');
  setTimeout(() => heroHeadline.classList.add('animate-fadeInUp'), 100);
  setTimeout(() => heroSub.classList.add('animate-fadeInUp'), 300);
  setTimeout(() => ctaBtn.classList.add('animate-bounceIn'), 600);
}); 