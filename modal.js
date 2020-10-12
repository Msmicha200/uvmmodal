document.addEventListener('DOMContentLoaded', () => {
  const doc = document.documentElement;
  const modal = document.querySelector('.uvm--modal-content');
  // Type your selector here
  const target = document.querySelector('.cls');

  target.addEventListener('click', () => {
    doc.classList.add('uvm--blur');
  });

  window.addEventListener('click', event => {
    if (doc.classList.contains('uvm--blur') &&
        !modal.contains(event.target)) {
      doc.classList.remove('uvm--blur');
    }
  }, true);
});
