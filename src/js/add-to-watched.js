<<<<<<< Updated upstream
const addToWatchedBtn = document.querySelector(".add-to-watched-button");
const addToQueueBtn = document.querySelector(".add-to-queue-button");
const testBtn = document.querySelector(".library-button");

let film = [];

testBtn.addEventListener("click", () => {
    try {
        film.push("outlander");
        console.log(film);
        // const stringifyFilm = JSON.stringify(film);
        localStorage.setItem("watched", JSON.stringify(film));
    } catch (error) {
        console.log(error);
    }
    // addToLibrary("watched", "film");
})

// addToWatchedBtn.addEventListener("click", (films) => {
//     let film = JSON.parse(localStorage.getItem("watched")) || [];
//     film.push(films);
//     addToLibrary("watched", film);
// })

// addToQueueBtn.addEventListener("click", (films) => {
//     let film = JSON.parse(localStorage.getItem("queue")) || [];
//     film.push(films);
//     addToLibrary("queue", film);
// })

const addToLibrary = (key, value) => {
    try {
        const stringifyFilm = JSON.stringify(value);
        localStorage.setItem(key, stringifyFilm);
    } catch (error) {
        console.log(error);
    }
}
const loadFromLibrary = key => {
    try {
        const parsedFilm = localStorage.getItem(key);
        return JSON.parse(parsedFilm);
    } catch (error) {
        console.log(error);
    }
}
export default {
    addToLibrary,
    loadFromLibrary,
};
=======
const addToWatchedBtn = document.querySelector(".watched-button");

// let moviesOnQueue = JSON.parse(localStorage.getItem("watched")) || [];
let moviesOnWatched = [];

addToWatchedBtn.addEventListener("click", () => {
    try {
        const watchedMovie = {
            poster_path: "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
            genres: [{ id: 28, name: "Horror" }],
            release_date: "2024-01-18",
            vote_average: 5.444,
            title: "outlander",
        }
        moviesOnWatched.push(watchedMovie);
        console.log(moviesOnWatched);
        localStorage.setItem("watched", JSON.stringify(moviesOnWatched));
    } catch (error) {
        console.log(error);
    }
})
>>>>>>> Stashed changes
