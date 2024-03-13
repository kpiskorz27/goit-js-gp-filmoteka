import { renderMovieCard } from "./pagination";
import { displayMovies } from './pagination';

window.addEventListener('load', async(event) => {
    
    await loadFromLibrary();
    await renderMovieCard(movie);
    displayMovies(movies);

});

function loadFromLibrary() {
    try {
            const watchedFilms = JSON.parse(localStorage.getItem("watched"));
            const queueFilms = JSON.parse(localStorage.getItem("queue"));
            const allFilms = [...watchedFilms, ...queueFilms];
        return allFilms;
    } catch (error) {
        console.log(error);
    }
}

// function renderFilmCard(movie) {
//     const { poster_path, release_date, vote_average, genres: { name } } = movie; 
//     const markup = movie.map(({ poster_path, release_date, vote_average, genres: { name } }) => {
//         return `<ul class="film-list">
//             <img src="${webformatURL}" alt="" loading="lazy" />
//                 <div class="info">
//                     <p class="info-item">
//                          <b>Likes:</b> ${likes}
//                     </p>
//                     <p class="info-item">
//                         <b>Views:</b> ${views}
//                     </p>
//                     <p class="info-item">
//                         <b>Comments:</b> ${comments}
//                     </p>
//                     <p class="info-item">
//                         <b>Downloads:</b> ${downloads}
//                     </p>
//                 </div>
//                 </ul>`;
//     })
// }