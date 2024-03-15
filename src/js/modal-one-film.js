const movieModal = document.querySelector('.movie-modal');
const overlay = document.querySelector('.movie-backdrop');
const closeBtn = document.querySelector('.modal-close-btn');

function openModal(event) {
  event.preventDefault();
  overlay.classList.remove('is-hidden');
  movieModal.classList.remove('is-hidden');
  closeBtn.addEventListener('click', closeModal);
}
function closeModal(event) {
  event.preventDefault();
  overlay.classList.add('is-hidden');
  movieModal.classList.add('is-hidden');
  removeEventListeners();
}

function escExit(event) {
  const escKey = 'Escape';
  if (event.code === escKey) {
    closeModal(event);
  }
}
function removeEventListeners() {
  document.removeEventListener('keydown', escExit);
  overlay.removeEventListener('click', closeModal);
  closeBtn.removeEventListener('click', closeModal);
}
document.addEventListener('click', function (event) {
  const target = event.target;

  if (target.classList.contains('movie-backdrop')) {
    closeModal(event);
  }
});
window.addEventListener('keydown', escExit);

function cardSelection() {
  const allMovies = document.querySelectorAll('.film-list');
  if (allMovies.length) {
    [...allMovies].forEach(oneMovie => {
      oneMovie.addEventListener('click', openModal);
    });
  } else {
    setTimeout(cardSelection, 1000);
  }
}
cardSelection();
