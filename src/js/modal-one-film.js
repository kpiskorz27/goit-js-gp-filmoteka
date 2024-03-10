(() => {
  const refs = {
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
const body = document.querySelector('body');
const descriptionModal = document.querySelector('.movie-details');
const mainModal = document.querySelector('.movie-backdrop');
const movieImages = document.querySelectorAll('.movie-picture-image');

mainModal.addEventListener('click', closeModal);

function showModal(data) {
  showMovieDetails(data);
  const closeBtn = document.querySelector('[data-modal-close]');
  closeBtn.addEventListener('click', toggleModal);
  const modal = document.querySelector('[data-modal]');
  window.addEventListener('keydown', pressEscapeKey);
}

function closeModal(event) {
  event.preventDefault();
  descriptionModal.classList.add('is-hidden');
  toggleModal();
  window.removeEventListener('keydown', pressEscapeKey);
}

function pressEscapeKey(event) {
  if (event.key !== 'Escape') return;
  toggleModal();
}

function getPictureImg(path, title) {
  if (!path) return '';
  return `<img class="movie-picture-image" src="${path}" alt="${title}">`;
}

function showMovieDetails(data) {
  descriptionModal.innerHTML = `
    <div class="movie-modal">
      <button type="button" class="modal-close-btn" data-modal-close>
        <svg class="modal-close-icon" width="16" height="16">
          <use href="/src/images/icons.svg#icon-close"></use>
        </svg>
      </button>

      <div class="movie-picture">
        ${getPictureImg(data.poster_path, data.title)}
      </div>

      <div class="movie-container">
        <h2 class="movie-title">${data.title}</h2>

        <div class="movie-details">
          <div class="movie-description">
            <p class="movie-descr">Vote / Votes</p>
            <p class="movie-descr">Popularity</p>
            <p class="movie-descr">Original Title</p>
            <p class="movie-descr">Genre</p>
          </div>
          <div class="movie-descr-values">
            <p class="info-value">
              <span class="info-value__vote">${data.vote_average.toFixed(1)}</span>&ensp;/&ensp;
              <span class="js-info-value__votes">${data.vote_count}</span>
            </p>
            <p class="info-value">${data.popularity}</p>
            <p class="info-value">${data.original_title}</p>
            <p class="info-value">${data.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>

        <div class="movie-about">
          <h3>ABOUT</h3>
          <div class="movie-about-par">
            <p>${data.overview}</p>
          </div>
        </div>

        <div class="modal-buttons">
          <button class="watched-button" type="button">ADD TO WATCHED</button>
          <button class="queue-button" type="button">ADD TO QUEUE</button>
        </div>
      </div>
    </div>`;
}
