const addToWatchedBtn = document.querySelector('.watched-button');

addToWatchedBtn.addEventListener('click', () => {
  const movie = getMovieDataFromSessionStorage();
  if (movie) {
    if (!isMovieInWatchedList(movie)) { // Sprawdzenie, czy film jest na liście obejrzanych
      addToWatched(movie);
      console.log('Movie added to watched list:', movie);
    } else {
      console.log('This movie is already in the watched list.');
    }
    if (isMovieInQueue(movie)) { // Sprawdzenie, czy film jest na liście kolejki
      removeFromQueue(movie); // Usunięcie filmu z listy kolejki
      console.log('Movie removed from queue:', movie);
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

function addToWatched(movie) {
  let moviesOnWatched = JSON.parse(localStorage.getItem('watched')) || [];
  moviesOnWatched.push(movie);
  localStorage.setItem('watched', JSON.stringify(moviesOnWatched));
}

function isMovieInWatchedList(movie) {
  let moviesOnWatched = JSON.parse(localStorage.getItem('watched')) || [];
  return moviesOnWatched.some(item => item.id === movie.id); 
}

function isMovieInQueue(movie) {
  let moviesOnQueue = JSON.parse(localStorage.getItem('queue')) || [];
  return moviesOnQueue.some(item => item.id === movie.id); 
}

function removeFromQueue(movie) {
  let moviesOnQueue = JSON.parse(localStorage.getItem('queue')) || [];
  let updatedQueueList = moviesOnQueue.filter(item => item.id !== movie.id);
  localStorage.setItem('queue', JSON.stringify(updatedQueueList));
}
