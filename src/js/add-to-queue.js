const addToQueueBtn = document.querySelector('.queue-button');
const modal = document.querySelector('.movie-modal');

addToQueueBtn.addEventListener('click', () => {
  const movie = getMovieDataFromSessionStorage();
  if (movie) {
    if (!isMovieInQueue(movie)) { // Jesli film nie jest w kolejce, Bartosz K
      addToQueue(movie);
      console.log('Movie added to queue.', movie);
      displayNotification('Movie added to queue.'); // wyswietla dodatkowy komunikat
    } else {
      console.log('This movie is already in the queue.');
      displayNotification('This movie is already in the queue.');
    }
    if (isMovieInWatchedList(movie)) { // Sprawdzenie, czy film jest dodany w obejrzanych Bartosz K
      removeFromWatched(movie); // Usunięcie filmu z listy obejrzanych, Bartosz K
      console.log('Movie removed from watched list.', movie);
      
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

function removeFromQueue(movie) {
  let moviesOnQueue = JSON.parse(localStorage.getItem('queue')) || [];
  let updatedQueueList = moviesOnQueue.filter(item => item.id !== movie.id);
  localStorage.setItem('queue', JSON.stringify(updatedQueueList));
}

//wyswietl wiadomosc 

function displayNotification(message) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 3000); 
}


//przycisk do usuwania filmow z queue

const removeQueueBtn = document.querySelector('.remove-queue-button');

removeQueueBtn.addEventListener('click', () => {
  const movie = getMovieDataFromSessionStorage();
  if (movie) {
    if (isMovieInQueue(movie)) {
      removeFromQueue(movie);
      console.log('Movie removed from queue:', movie);
      displayNotification('Movie removed from queue.');
    } else {
      console.log('This movie is not in the queue.');
      displayNotification('This movie is not in the queue.');
    }
  } else {
    console.log('No movie data found in session storage.');
  }
});

