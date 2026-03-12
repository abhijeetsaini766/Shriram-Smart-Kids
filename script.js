const navWrap = document.querySelector('.nav-wrap');
const mobileToggle = document.querySelector('.mobile-toggle');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navWrap.classList.toggle('open');
  });
}

document.querySelectorAll('.faq-q').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('open');
  });
});

const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function showTestimonial(i) {
  testimonials.forEach((el) => el.classList.remove('active'));
  if (testimonials[i]) testimonials[i].classList.add('active');
}

if (testimonials.length) {
  showTestimonial(index);
  setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }, 4500);

  document.querySelector('[data-prev]')?.addEventListener('click', () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
  });

  document.querySelector('[data-next]')?.addEventListener('click', () => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  });
}
