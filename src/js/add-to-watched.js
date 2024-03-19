const addToWatchedBtn = document.querySelector('.watched-button');

addToWatchedBtn.addEventListener('click', () => {
  const movie = getMovieDataFromSessionStorage();
  if (movie) {
    if (!isMovieInWatchedList(movie)) { //Jesli film nie zostal obejrzany, Bartosz K
      addToWatched(movie);
      console.log('Movie added to watched list.', movie);
      displayNotification('Movie added to watched list.');
    } else {
      console.log('This movie is already in the watched list.');
      displayNotification('This movie is already in the watched list.');
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

function removeFromWatched(movie) {
  let moviesOnWatched = JSON.parse(localStorage.getItem('watched')) || [];
  let updatedWatchedList = moviesOnWatched.filter(item => item.id !== movie.id);
  localStorage.setItem('watched', JSON.stringify(updatedWatchedList));
}


// wyswietl wiadomosc 

function displayNotification(message) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 3000); 
}


//przycisk do usuwania filmow z watched

const removeWatchedBtn = document.querySelector('.remove-watched-button');

removeWatchedBtn.addEventListener('click', () => {
  const movie = getMovieDataFromSessionStorage();
  if (movie) {
    if (isMovieInWatchedList(movie)) {
      removeFromWatched(movie);
      console.log('Movie removed from watched list:', movie);
      displayNotification('Movie removed from watched list.');
    } else {
      console.log('This movie is not in the watched list.');
      displayNotification('This movie is not in the watched list.');
    }
  } else {
    console.log('No movie data found in session storage.');
  }
});

