const addToQueueBtn = document.querySelector('.queue-button');
const modal = document.querySelector('.movie-modal');

addToQueueBtn.addEventListener('click', () => {
  const movie = getMovieDataFromSessionStorage();
  if (movie) {
    addToQueue(movie);
    console.log('Movie added to queue:', movie);
  } else {
    console.log('No movie data found in session storage.');
  }
});

function getMovieDataFromSessionStorage() {
  const sessionKey = 'currentMovie';
  const movieData = sessionStorage.getItem(sessionKey);
  return movieData ? JSON.parse(movieData) : null;
}

function addToQueue(movie) {
  let moviesOnQueue = JSON.parse(localStorage.getItem('queue')) || [];
  moviesOnQueue.push(movie);
  localStorage.setItem('queue', JSON.stringify(moviesOnQueue));
}
