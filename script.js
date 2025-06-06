// Placeholder if you want to add scroll effects or interactivity
console.log("Welcome to Sargam's Portfolio!");

// Scroll down when clicking the arrow
document.querySelector('.arrow').addEventListener('click', () => {
  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
