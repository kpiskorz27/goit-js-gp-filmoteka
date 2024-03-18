const movieContainer = document.querySelector(".film-list");
const paginationContainer = document.querySelector('.pagination');

window.addEventListener('load', async () => {
    allMovies = [];

    if (JSON.parse(localStorage.getItem("queue")) || JSON.parse(localStorage.getItem("watched"))) {
        const movieOnQueue = await loadFromLibrary("queue"); 
        const movieOnWatched = await loadFromLibrary("watched");
        allMovies = [...movieOnQueue, ...movieOnWatched];
        renderMovieCard(allMovies); 
    }
    else {
        movieContainer.innerHTML = "Sorry, there are no films in your library";
    }

    renderPagination(allMovies.length, 1);
});

export function loadFromLibrary(key) {
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
        console.log(error);
        return [];
    }
}

//Renderowanie karty filmu//

export function renderMovieCard(movieData) {
    if (movieData.length === 0) {
        movieContainer.innerHTML = "Sorry, there are no films in your library";
        return;
    }
    const moviesToRender = movieData.slice(0, 10);
    const markup = moviesToRender.map(movie => {
        const genres = movie.genres || []; // Sprawdzamy, czy gatunki są zdefiniowane
        let genresText;
        if (genres.length > 2) {
            genresText = `${genres[0].name === 'Science Fiction' ? 'Sci-Fi' : genres[0].name}, ${genres[1].name === 'Science Fiction' ? 'Sci-Fi' : genres[1].name}, Other`;
        } else {
            genresText = `${genres[0].name === 'Science Fiction' ? 'Sci-Fi' : genres[0].name}, ${genres[1].name === 'Science Fiction' ? 'Sci-Fi' : genres[1].name}`;
        };
        return `<div class="movie-item" data-modal-open data-id="${movie.id}">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" loading="lazy" />
            <h2>${movie.title}</h2>
            <div class="content-wrapper">
                <p>${genresText}</p>
                <p class="movie-year"> | ${new Date(movie.release_date).getFullYear()}</p>
                <p class="main-rating">${movie.vote_average.toFixed(1)}</p>
            </div>
        </div>`;
    }).join("");
    
    movieContainer.innerHTML = markup;
}



//Renderowanie paginacji dla library//

function renderPagination(totalItems, currentPage) {
    const itemsPerPage = 10; // Zmieniłem na 10, ponieważ maksymalnie 10 filmów na stronie
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    paginationContainer.innerHTML = '';

    const firstPageButton = document.createElement('button');
    firstPageButton.innerHTML = `
        <svg class="icon icon-arrow-left" viewBox="0 0 32 32" width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667" d="M25.333 16H6.666M16 25.333 6.667 16 16 6.667" style="stroke:var(--color2, #000)"/>
        </svg>
    `;
    firstPageButton.style.cursor = 'pointer';
    firstPageButton.classList.add('page-button', 'first-button');
    if (currentPage > 1)
    firstPageButton.addEventListener('click', () => {
        const prevPage = Math.max(currentPage - 1, 1); 
        renderMovieCard(allMovies.slice((prevPage - 1) * itemsPerPage, prevPage * itemsPerPage)); 
        renderPagination(totalItems, prevPage); 
        window.scroll({ top: 0, behavior: 'smooth' });
    });
    paginationContainer.appendChild(firstPageButton);

    let startPage = 1;
    let endPage = Math.min(startPage + 4, totalPages);

  
    for (let page = startPage; page <= endPage; page++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = page;
        pageButton.style.cursor = 'pointer';
        pageButton.classList.add('page-button');
        if (page === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', () => {
            renderMovieCard(allMovies.slice((page - 1) * itemsPerPage, page * itemsPerPage));
            renderPagination(totalItems, page);
            window.scroll({ top: 0, behavior: 'smooth' });
        });
        paginationContainer.appendChild(pageButton);
    }

    const lastPageButton = document.createElement('button');
    lastPageButton.innerHTML = `
        <svg class="icon icon-arrow-right" viewBox="0 0 32 32" width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667" d="M6.667 16h18.667M16 25.333l9.333-9.333-9.333-9.333" style="stroke:var(--color2, #000)"/>
        </svg>
    `;
    lastPageButton.classList.add('page-button', 'last-button');
    lastPageButton.style.cursor = 'pointer';
    lastPageButton.addEventListener('click', () => {
        const nextPage = Math.min(currentPage + 1, totalPages);
        renderMovieCard(allMovies.slice((nextPage - 1) * itemsPerPage, nextPage * itemsPerPage)); 
        renderPagination(totalItems, nextPage); 
        window.scroll({ top: 0, behavior: 'smooth' });
    });
    paginationContainer.appendChild(lastPageButton);
}
