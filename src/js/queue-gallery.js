function displayQueuedMovies() {
    const queueButton = document.getElementById('queueButton');
    const galleryContainer = document.createElement('div');
    galleryContainer.classList.add('queued-movies-gallery');
  
    queueButton.addEventListener('click', async () => {
      const queuedMovies = JSON.parse(localStorage.getItem('queuedMovies')) || [];
  
      if (queuedMovies.length === 0) {
        galleryContainer.textContent = 'You haven\'t added any movies to the queue yet!';
      } else {
        queuedMovies.forEach(movie => {
          const movieCard = document.createElement('div');
          movieCard.classList.add('queued-movie-card');
  
          const movieTitle = document.createElement('h3');
          movieTitle.textContent = movie.title;
          movieCard.appendChild(movieTitle);
  
        // Dodatkowe elementy
  
          galleryContainer.appendChild(movieCard);
        });
      }
  
      const movieGallery = document.getElementById('movie-gallery');
      if (movieGallery) {
        movieGallery.appendChild(galleryContainer);
      } else {
        console.warn('Element with id="movie-gallery" not found. Gallery not displayed.');
      }
    });
  }
  
  window.addEventListener('DOMContentLoaded', displayQueuedMovies);