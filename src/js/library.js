const movieContainer = document.querySelector(".film-list");

window.addEventListener('load', async () => {
    
    if (JSON.parse(localStorage.getItem("queue")) || JSON.parse(localStorage.getItem("watched"))) {
        const movieOnQueue = await loadFromLibrary("queue"); 
        const movieOnWatched = await loadFromLibrary("watched");
        const allMovies = [...movieOnQueue, ...movieOnWatched];
        console.log(allMovies);
        renderMovieCard(allMovies); 
    }
    else {
        movieContainer.insertAdjacentHTML("beforeend", "Sorry, there is no films in your library");
    }
});

export function loadFromLibrary(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        console.log(error);
    }
}

export function renderMovieCard(movieData) {
  console.log(movieData);
    const markup = movieData.map(({ poster_path, title, id, genres, release_date, vote_average }) => {
        let genresText;
        if (genres.length > 2) {
            genresText = `${genres[0].name}, ${genres[1].name}, Other`;
        }
        else {
            genresText = `${genres[0].name}, ${genres[1].name}`;
        };
        return `<div class="movie-item", data-modal-open, data-id="${id}">
            <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" />
                <h2 class="">${title}</h2>
                <div class="content-wrapper">
                    <p> ${genresText}</p>
                    <p class="movie-year"> | ${new Date(release_date).getFullYear()}</p>
                    <p class="main-rating">${vote_average.toFixed(1)}</p>
                </div>
                </div>`;
        })
        .join("");
    
    movieContainer.insertAdjacentHTML("beforeend", markup);
}