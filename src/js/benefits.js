// Smooth scrool behavior for all anchors
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(() => {
      this.blur();
    }, 500);
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
