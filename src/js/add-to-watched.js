const addToWatchedBtn = document.querySelector('.watched-button');


window.addEventListener('load', () => {
  const movie = getMovieDataFromSessionStorage();
  if (movie && isMovieInWatchedList(movie)) {
    addToWatchedBtn.textContent = 'Remove from Watched'; // jesli film po zaladowaniu strony jest w watched niech zostaje napis remove from watched
    addToWatchedBtn.removeEventListener('click', addToWatchedHandler);
    addToWatchedBtn.addEventListener('click', removeFromWatchedHandler);
  }
});

addToWatchedBtn.addEventListener('click', () => {
  const movie = getMovieDataFromSessionStorage();
  if (movie) {
    if (!isMovieInWatchedList(movie)) {
      addToWatched(movie);
      console.log('Movie added to watched list.', movie);
      displayNotification('Movie added to watched list.');
      addToWatchedBtn.textContent = 'Remove from Watched';
      addToWatchedBtn.removeEventListener('click', addToWatchedHandler);
      addToWatchedBtn.addEventListener('click', removeFromWatchedHandler);
    } else {
      removeFromWatched(movie);
      console.log('Movie removed from watched list.', movie);
      displayNotification('Movie removed from watched list.');
      addToWatchedBtn.textContent = 'Add to Watched';
      addToWatchedBtn.removeEventListener('click', removeFromWatchedHandler);
      addToWatchedBtn.addEventListener('click', addToWatchedHandler);
    }
  } else {
    console.log('No movie data found in session storage.');
  }
});

function addToWatchedHandler() {
  const movie = getMovieDataFromSessionStorage();
  if (movie) {
    addToWatched(movie);
    console.log('Movie added to watched list.', movie);
    displayNotification('Movie added to watched list.');
    addToWatchedBtn.textContent = 'Remove from Watched';
    addToWatchedBtn.removeEventListener('click', addToWatchedHandler);
    addToWatchedBtn.addEventListener('click', removeFromWatchedHandler);
  } else {
    console.log('No movie data found in session storage.');
  }
}

function removeFromWatchedHandler() {
  const movie = getMovieDataFromSessionStorage();
  if (movie) {
    removeFromWatched(movie);
    console.log('Movie removed from watched list.', movie);
    displayNotification('Movie removed from watched list.');
    addToWatchedBtn.textContent = 'Add to Watched';
    addToWatchedBtn.removeEventListener('click', removeFromWatchedHandler);
    addToWatchedBtn.addEventListener('click', addToWatchedHandler);
  } else {
    console.log('No movie data found in session storage.');
  }
}

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

function removeFromWatched(movie) {
  let moviesOnWatched = JSON.parse(localStorage.getItem('watched')) || [];
  let updatedWatchedList = moviesOnWatched.filter(item => item.id !== movie.id);
  localStorage.setItem('watched', JSON.stringify(updatedWatchedList));
}

function displayNotification(message) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
