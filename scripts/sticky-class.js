export default () => {
  if (window.IntersectionObserver) {
    const observer = new IntersectionObserver(entries =>
      entries.forEach(entry => {
        entry.target.nextElementSibling.classList.toggle(
          'sticky',
          !entry.isIntersecting
        );
      })
    );
    [...document.querySelectorAll('.stickiness-sentinel')].forEach(sentinel =>
      observer.observe(sentinel)
    );
  }
};