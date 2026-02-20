// Landing page - interações opcionais
document.addEventListener('DOMContentLoaded', function () {
  // Suavizar clique nos links âncora (já há scroll-behavior: smooth no CSS)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      e.preventDefault();
      const target = document.querySelector(id);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
