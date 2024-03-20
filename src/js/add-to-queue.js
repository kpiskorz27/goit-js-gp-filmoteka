const queueButton = document.querySelector('.queue-button');
const modal = document.querySelector('.movie-modal');


window.addEventListener('load', () => {
  const movie = getMovieDataFromSessionStorage();
  if (movie && isMovieInQueue(movie)) {
    queueButton.textContent = 'Remove from Queue'; // jesli film po zaladowaniu strony jest w watched niech zostaje napis remove from queue
    queueButton.removeEventListener('click', addToQueueHandler);
    queueButton.addEventListener('click', removeFromQueueHandler);
  }
});

queueButton.addEventListener('click', () => {
  const movie = getMovieDataFromSessionStorage();
  if (movie) {
    if (!isMovieInQueue(movie)) {
      addToQueue(movie);
      console.log('Movie added to queue.', movie);
      displayNotification('Movie added to queue.');
      queueButton.textContent = 'Remove from Queue';
      queueButton.removeEventListener('click', addToQueueHandler);
      queueButton.addEventListener('click', removeFromQueueHandler);
    } else {
      removeFromQueue(movie);
      console.log('Movie removed from queue.', movie);
      displayNotification('Movie removed from queue.');
      queueButton.textContent = 'Add to Queue';
      queueButton.removeEventListener('click', removeFromQueueHandler);
      queueButton.addEventListener('click', addToQueueHandler);
    }
  } else {
    console.log('No movie data found in session storage.');
  }
});

function addToQueueHandler() {
  const movie = getMovieDataFromSessionStorage();
  if (movie) {
    addToQueue(movie);
    console.log('Movie added to queue.', movie);
    displayNotification('Movie added to queue.');
    queueButton.textContent = 'Remove from Queue';
    queueButton.removeEventListener('click', addToQueueHandler);
    queueButton.addEventListener('click', removeFromQueueHandler);
  } else {
    console.log('No movie data found in session storage.');
  }
}

function removeFromQueueHandler() {
  const movie = getMovieDataFromSessionStorage();
  if (movie) {
    removeFromQueue(movie);
    console.log('Movie removed from queue.', movie);
    displayNotification('Movie removed from queue.');
    queueButton.textContent = 'Add to Queue';
    queueButton.removeEventListener('click', removeFromQueueHandler);
    queueButton.addEventListener('click', addToQueueHandler);
  } else {
    console.log('No movie data found in session storage.');
  }
}

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

function removeFromQueue(movie) {
  let moviesOnQueue = JSON.parse(localStorage.getItem('queue')) || [];
  let updatedQueueList = moviesOnQueue.filter(item => item.id !== movie.id);
  localStorage.setItem('queue', JSON.stringify(updatedQueueList));
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
