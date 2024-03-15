import { loadFromLibrary } from "./library";
import { renderMovieCard } from "./library";

const queueBtn = document.querySelector("#gueueButton");
const movieContainer = document.querySelector(".film-list");

queueBtn.addEventListener("click", async() => {
    movieContainer.innerHTML = "";
    if (JSON.parse(localStorage.getItem("queue"))) {
        const movieOnQueue = await loadFromLibrary("queue"); 
        console.log(movieOnQueue);
        renderMovieCard(movieOnQueue); 
    }
    else {
        movieContainer.insertAdjacentHTML("beforeend", "Sorry, there is no films in your queue");
    }
})
