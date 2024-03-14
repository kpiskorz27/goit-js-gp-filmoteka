function displayWatchedMovies() {
    const watchedButton = document.getElementById('watchedButton');
    const galleryContainer = document.createElement('div'); 
    galleryContainer.classList.add('watched-movies-gallery');
  
    watchedButton.addEventListener('click', async () => {
      const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];
  
      if (watchedMovies.length === 0) {
        galleryContainer.textContent = 'You haven\'t watched any movies yet!';
      } else {
        watchedMovies.forEach(movie => {
          const movieCard = document.createElement('div');
          movieCard.classList.add('watched-movie-card');
  
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
  
  window.addEventListener('DOMContentLoaded', displayWatchedMovies);