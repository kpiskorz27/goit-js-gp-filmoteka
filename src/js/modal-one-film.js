import { getMovieDetails } from './pagination';
const movieModal = document.querySelector('.movie-modal');
const overlay = document.querySelector('.movie-backdrop');
const closeBtn = document.querySelector('.modal-close-btn');
const modalImg = document.querySelector('.movie-image');
const loaderModal = document.querySelector('.loader_modal_container');
async function openModal(event) {
  event.preventDefault();
  setTimeout(() => {
    overlay.classList.remove('is-hidden');
    movieModal.classList.remove('is-hidden');
    loaderModal.classList.remove('hidden');
  }, 500);
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
  console.log('All Movies:', allMovies); // Log allMovies array

  if (allMovies.length) {
    allMovies.forEach(oneMovie => {
      oneMovie.addEventListener('click', function (event) {
        const target = event.target.closest('.movie-item');
        console.log('Target:', target); // Log target element

        if (target) {
          const movieId = target.dataset.id;
          console.log('Movie ID:', movieId); // Log movieId

          const cardPoster = target.querySelector('img').getAttribute('src');
          console.log('Card Poster:', cardPoster); // Log cardPoster

          modalImg.setAttribute('src', cardPoster);
          getMovieDetails(movieId).then(movie => {
            console.log('Movie Details:', movie); // Log movie details
            saveMovieToSessionStorage(movie); // zapisuje film do sesji, Bartosz K
            movieModalData(movie);
            openModal(event);
            setTimeout(() => {
              loaderModal.classList.add('hidden');
            }, 1000);
          });
        }
      });
    });
  } else {
    setTimeout(cardSelection, 1000);
  }
}

cardSelection();

function movieModalData(movie) {
  const movieTitle = movieModal.querySelector('.movie-title');
  const movieAverageRate = movieModal.querySelector('.average-rate');
  const movieAllVote = movieModal.querySelector('.total-vote');
  const moviePopularity = movieModal.querySelector('.movie-popularity');
  const movieOriginalTitle = movieModal.querySelector('.movie-original-title');
  const movieGenre = movieModal.querySelector('.movie-genre');
  const movieAbout = movieModal.querySelector('.movie-about-par');
  const genres = movie.genres.map(genre => genre.name).join(', ');
  movieGenre.textContent = genres;

  movieTitle.textContent = movie.title;

  movieAllVote.innerHTML = `<span class="movie-average-rate">${movie.vote_average.toFixed(
    1,
  )}</span> / <span class="movie-votes">${movie.vote_count}</span>`;
  moviePopularity.textContent = movie.popularity;
  movieOriginalTitle.textContent = movie.original_title;
  movieGenre.textContent = genres;
  movieAbout.textContent = movie.overview;
}

function saveMovieToSessionStorage(movie) {
  // film zapisywany jest do session storage, Bartosz K
  const sessionKey = 'currentMovie';
  sessionStorage.setItem(sessionKey, JSON.stringify(movie));
}
