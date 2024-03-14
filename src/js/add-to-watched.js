function addToWatchedList() {
    const watchedButton = document.querySelector('.watched-button');
    const modal = document.querySelector('[data-modal]');
  
    watchedButton.addEventListener('click', async () => {

      const movieTitle = modal.querySelector('.movie-title').textContent;
      let watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];
      const isAlreadyWatched = watchedMovies.some(movie => movie.title === movieTitle);
  
      if (!isAlreadyWatched) {
        watchedMovies.push({ title: movieTitle });
        localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
        console.log(`${movieTitle} added to watched movies!`);
      } else {
        console.log(`${movieTitle} is already in your watched list!`);
      }
    });
  }
  
  window.addEventListener('DOMContentLoaded', addToWatchedList);