
const addToWatchedBtn = document.querySelector('.watched-button');

addToWatchedBtn.addEventListener('click', () => {
  const movie = getMovieDataFromSessionStorage();
  if (movie) {
    addToWatched(movie);
    console.log('Movie added to watched list:', movie);
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
