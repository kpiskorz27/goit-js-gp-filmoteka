import { addToLibrary } from "./add-to-queue";
    
const addToWatchedBtn = document.querySelector(".watched-button");

let moviesOnWatched = [];
const movie = {
            poster_path: "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
            genres: [{ id: 28, name: "Horror" }],
            release_date: "2024-01-18",
            vote_average: 5.444,
            title: "outlander",
        }

addToWatchedBtn.addEventListener("click", () => {
        
    moviesOnWatched.push(movie);
    console.log(moviesOnWatched);
    addToLibrary("watched", moviesOnWatched);
   
})