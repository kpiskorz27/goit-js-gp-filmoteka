import { loadFromLibrary } from "./library";
import { renderMovieCard } from "./library";

const watchedBtn = document.querySelector("#watchedButton");
const movieContainer = document.querySelector(".film-list");

watchedBtn.addEventListener("click", async() => {
    movieContainer.innerHTML = "";
    if (JSON.parse(localStorage.getItem("watched"))) {
        const movieOnWatched = await loadFromLibrary("watched"); 
        console.log(movieOnWatched);
        renderMovieCard(movieOnWatched); 
    }
    else {
        movieContainer.insertAdjacentHTML("beforeend", "Sorry, there is no films in your watched");
    }
})
