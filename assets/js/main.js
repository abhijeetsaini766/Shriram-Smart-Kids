const navRow = document.querySelector('.nav-row');
const toggle = document.querySelector('.toggle');
if (toggle) {
  toggle.addEventListener('click', () => navRow.classList.toggle('open'));
}

const slides = document.querySelectorAll('.testimonial');
let current = 0;
function showSlide(index) {
  slides.forEach((s) => s.classList.remove('active'));
  if (slides[index]) slides[index].classList.add('active');
}
if (slides.length) {
  showSlide(current);
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);
}
