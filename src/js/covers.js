window.addEventListener('load', function () {
  const marquee = selector => {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        parentSelector.classList.add('animate-marquee');
      } else {
        parentSelector.classList.remove('animate-marquee');
      }
    });
    observer.observe(parentSelector);
  };

  marquee('.covers-list');
});
