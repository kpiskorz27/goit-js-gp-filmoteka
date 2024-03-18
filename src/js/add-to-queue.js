const addToQueueBtn = document.querySelector('.queue-button');
const modal = document.querySelector('.movie-modal');

addToQueueBtn.addEventListener('click', () => {
  const movie = getMovieDataFromSessionStorage();
  if (movie) {
    if (!isMovieInQueue(movie)) { // Sprawdzenie, czy film jest dodany do kolejki
      addToQueue(movie);
      console.log('Movie added to queue:', movie);
    } else {
      console.log('This movie is already in the queue.');
    }
    if (isMovieInWatchedList(movie)) { // Sprawdzenie, czy film jest dodany do listy obejrzanych
      removeFromWatched(movie); // Usunięcie filmu z listy obejrzanych
      console.log('Movie removed from watched list:', movie);
    }
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

function isMovieInQueue(movie) {
  let moviesOnQueue = JSON.parse(localStorage.getItem('queue')) || [];
  return moviesOnQueue.some(item => item.id === movie.id); 
}

function isMovieInWatchedList(movie) {
  let moviesOnWatched = JSON.parse(localStorage.getItem('watched')) || [];
  return moviesOnWatched.some(item => item.id === movie.id); 
}

function removeFromWatched(movie) {
  let moviesOnWatched = JSON.parse(localStorage.getItem('watched')) || [];
  let updatedWatchedList = moviesOnWatched.filter(item => item.id !== movie.id);
  localStorage.setItem('watched', JSON.stringify(updatedWatchedList));
}
