function addToQueue() {
    const queueButton = document.querySelector('.queue-button');
    const modal = document.querySelector('[data-modal]');
  
    queueButton.addEventListener('click', async () => {
        
      const movieTitle = modal.querySelector('.movie-title').textContent;
      let queuedMovies = JSON.parse(localStorage.getItem('queuedMovies')) || [];
      const isAlreadyQueued = queuedMovies.some(movie => movie.title === movieTitle);
  
      if (!isAlreadyQueued) {
        queuedMovies.push({ title: movieTitle });
        localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));
        console.log(`${movieTitle} added to the queue!`);
      } else {
        console.log(`${movieTitle} is already in your queue!`);
      }
    });
  }
  
  window.addEventListener('DOMContentLoaded', addToQueue);