// Welcome message
console.log("Welcome to Sargam's Portfolio!");

// Scroll down when clicking the arrow
document.querySelector('.arrow')?.addEventListener('click', () => {
  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
});

// Smooth scrolling for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile nav on link click
    document.querySelector('nav')?.classList.remove('open');
    document.querySelector('.menu-toggle')?.classList.remove('active');
  });
});

// Mobile nav toggle (hamburger icon)
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle?.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('open');
});
