import './pagination';
const movieModal = document.querySelector('.movie-modal');
const overlay = document.querySelector('.movie-backdrop');
const closeBtn = document.querySelector('.modal-close-btn');

function openModal(event) {
  event.preventDefault();
  overlay.classList.remove('is-hidden');
  movieModal.classList.remove('is-hidden');
}
function closeModal(event) {
  event.preventDefault();
  overlay.classList.add('is-hidden');
  movieModal.classList.add('is-hidden');
}

function escExit(event) {
  const escKey = 'Escape';
  if (event.code === escKey) {
    closeModal(event);
  }
}

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('keydown', escExit);

function cardSelection() {
  const allMovies = document.querySelectorAll('.movie-item');
  if (allMovies.length > 0) {
    [...allMovies].forEach(oneMovie => {
      oneMovie.addEventListener('click', openModal);
    });
  } else {
    setTimeout(cardSelection, 1000);
  }
}
cardSelection();
