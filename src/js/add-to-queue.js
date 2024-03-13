const addToQueueBtn = document.querySelector(".queue-button");

// let moviesOnQueue = JSON.parse(localStorage.getItem("queue")) || [];
let moviesOnQueue = [];

addToQueueBtn.addEventListener("click", () => {
    try {
        const movie = {
            poster_path: "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
            genres: [{ id: 28, name: "Horror" }],
            release_date: "2024-01-18",
            vote_average: 5.444,
            title: "outlander",
        }
        moviesOnQueue.push(movie);
        console.log(moviesOnQueue);
        // const stringifyFilm = JSON.stringify(film);
        localStorage.setItem("queue", JSON.stringify(moviesOnQueue));
    } catch (error) {
        console.log(error);
    }
})


//my-library dodawanie filmów z local storage

// window.addEventListener('load', () => {
// loadFromLibrary();
// renderMovie()

// });

// function loadFromLibrary() {
//     try {
            // const watchedFilms = JSON.parse(localStorage.getItem("watched"));
            // const queueFilms = JSON.parse(localStorage.getItem("queue"));
            // const allFilms = watchedFilms.concat(queueFilms);
//         return allFilms;
//     } catch (error) {
//         console.log(error);
//     }
// }


