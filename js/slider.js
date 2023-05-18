const slides = document.querySelectorAll('.product-slide');

slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    slides.forEach((s) => s.classList.remove('active'));
    slide.classList.add('active');
  });
});
