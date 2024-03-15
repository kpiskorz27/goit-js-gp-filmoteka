const addToQueueBtn = document.querySelector(".queue-button");
const modal = document.querySelector(".movie-modal");

let moviesOnQueue = JSON.parse(localStorage.getItem("queue")) || [];
const movie = {
            poster_path: "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
             genres: [
                { id: 28, name: 'Horror' },
                { id: 27, name: 'Dramat' },
                { id: 80, name: 'Crime' },
            ],
            id: 872585,
            release_date: "2024-01-18",
            vote_average: 5.444,
            title: "No Way Up",
}

addToQueueBtn.addEventListener("click", () => {
        
    moviesOnQueue.push(movie);
    console.log(moviesOnQueue);
    addToLibrary("queue", moviesOnQueue);
   
})

export const addToLibrary = (key, value) => {
    try {
        const stringifyFilm = JSON.stringify(value);
        localStorage.setItem(key, stringifyFilm);
    } catch (error) {
        console.log(error);
    }
}
