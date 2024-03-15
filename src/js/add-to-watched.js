import { addToLibrary } from './add-to-queue';

const addToWatchedBtn = document.querySelector('.watched-button');

let moviesOnWatched = JSON.parse(localStorage.getItem('watched'));
if (!Array.isArray(moviesOnWatched)) {
  moviesOnWatched = [];
}
const movie = {
  poster_path: '/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg',
  genres: [
    { id: 28, name: 'Action' },
    { id: 16, name: 'Animation' },
  ],
  id: 870404,
  release_date: '2024-03-02',
  vote_average: 6.976,
  title: 'Kung Fu Panda 4',
};

addToWatchedBtn.addEventListener('click', () => {
  moviesOnWatched.push(movie);
  console.log(moviesOnWatched);
  addToLibrary('watched', moviesOnWatched);
});
