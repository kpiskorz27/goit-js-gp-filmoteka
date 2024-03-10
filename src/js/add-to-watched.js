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
