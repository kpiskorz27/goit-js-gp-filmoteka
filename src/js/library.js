import { renderMovieCard } from "./pagination";
import { displayMovies } from "./pagination";

let movieArray = [];
window.addEventListener('load', async () => {
    if (JSON.parse(localStorage.getItem("queue", "watched"))) {
        const movie = await loadFromLibrary();
        movieArray.push(movie);
        console.log(movie);
        const renderedMovie = await renderMovieCard(movie);
        console.log(renderedMovie);
        displayMovies(movieArray);
    }
    
});

function loadFromLibrary() {
    try {
            const watchedFilms = JSON.parse(localStorage.getItem("watched"));
        const queueFilms = JSON.parse(localStorage.getItem("queue"));
        return watchedFilms, queueFilms;
    } catch (error) {
        console.log(error);
    }
}