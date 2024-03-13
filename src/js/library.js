import { renderMovieCard } from "./pagination";
import { displayMovies } from "./pagination";


window.addEventListener('load', async() => {
   const movie = await loadFromLibrary();
    await renderMovieCard(movie);
    displayMovies();

});

function loadFromLibrary() {
    try {
            const watchedFilms = JSON.parse(localStorage.getItem("watched"));
            const queueFilms = JSON.parse(localStorage.getItem("queue"));
            const allFilms = watchedFilms.concat(queueFilms);
        return allFilms;
    } catch (error) {
        console.log(error);
    }
}