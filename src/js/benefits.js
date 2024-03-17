// Smooth scrool behavior for all anchors
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(() => {
      this.blur();
    }, 2000);
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// *fix id for footer section*
const footerSection = document.querySelector('.footer');
if (footerSection.getAttribute('id') != 'order') {
  footerSection.setAttribute('id', 'order');
}
