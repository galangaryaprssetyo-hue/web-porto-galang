// Menunggu seluruh struktur HTML selesai dimuat sebelum menjalankan JavaScript.
document.addEventListener('DOMContentLoaded', () => {
  // Mengambil semua tautan navigasi dan bagian halaman yang dituju.
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  // Mengubah tautan navigasi menjadi aktif saat diklik.
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Menyesuaikan navigasi aktif berdasarkan bagian yang terlihat di layar.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const sectionId = entry.target.id;
        navLinks.forEach((link) => {
          const isActive = link.getAttribute('href') === `#${sectionId}`;
          link.classList.toggle('active', isActive);
        });
      });
    }, {
      rootMargin: '-35% 0px -55% 0px',
      threshold: 0
    });

    sections.forEach((section) => observer.observe(section));
  }

  // Menampilkan tahun saat ini secara otomatis pada bagian footer.
  const yearElement = document.getElementById('tahun');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
