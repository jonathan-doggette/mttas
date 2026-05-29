const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.dashboard-card');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach((f) => f.classList.remove('active'));
    button.classList.add('active');
    cards.forEach((card) => {
      const show = selected === 'all' || card.dataset.category === selected;
      card.hidden = !show;
    });
  });
});

const dialog = document.getElementById('previewDialog');
const previewImage = document.getElementById('previewImage');
const closeButton = document.querySelector('.dialog-close');

document.querySelectorAll('.image-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (!dialog?.showModal) return;
    event.preventDefault();
    previewImage.src = link.href;
    previewImage.alt = link.querySelector('img')?.alt || 'Dashboard mockup preview';
    dialog.showModal();
  });
});

closeButton?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
