const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const closeModal = document.getElementsByClassName('close')[0];
const body = document.body;

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
  body.classList.add('modal-open');
});

closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
  body.classList.remove('modal-open');
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    body.classList.remove('modal-open');
  }
});
