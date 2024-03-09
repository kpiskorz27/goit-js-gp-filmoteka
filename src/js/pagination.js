const apiKey = 'ddd78f0e80e0d30735adfd081ca2dc47';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

async function getMovieDetails(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error while fetching movie details:', error);
        return null;
    }
}

async function getPopularMovies(page = 1) {
    const urlWithPage = `${apiUrl}&page=${page}`;
    try {
        const response = await fetch(urlWithPage);
        const data = await response.json();
        const movies = data.results;
        const detailedMovies = await Promise.all(movies.map(async movie => {
            const details = await getMovieDetails(movie.id);
            return { ...movie, ...details };
        }));
        return { movies: detailedMovies, totalPages: data.total_pages };
    } catch (error) {
        console.error('Error while fetching data:', error);
        return { movies: [], totalPages: 0 };
    }
}

function renderPagination(totalPages, currentPage) {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';

    for (let page = 1; page <= totalPages; page++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = page;
        pageButton.classList.add('page-button');
        if (page === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', () => {
            loadMoviesPage(page);
        });
        paginationContainer.appendChild(pageButton);
    }
}

async function loadMoviesPage(page) {
    const { movies, totalPages } = await getPopularMovies(page);
    displayMovies(movies);
    renderPagination(totalPages, page);
}

function displayMovies(movies) {
    const filmList = document.querySelector('.film-list');
    filmList.innerHTML = '';

    const movieItems = movies.map(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');

        const moviePoster = document.createElement('img');
        moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        moviePoster.alt = movie.title;
        movieItem.appendChild(moviePoster);

        const movieTitle = document.createElement('h2');
        movieTitle.textContent = movie.title;
        movieItem.appendChild(movieTitle);

        const genreNames = movie.genres.map(genre => genre.name);
        const movieGenres = document.createElement('p');
        movieGenres.textContent = `Genres: ${genreNames.join(', ')}`;
        movieItem.appendChild(movieGenres);

        const movieYear = document.createElement('p');
        const releaseYear = new Date(movie.release_date).getFullYear();
        movieYear.textContent = `Year: ${releaseYear}`;
        movieItem.appendChild(movieYear);

        const movieRating = document.createElement('p');
        const rating = movie.vote_average.toFixed(1);
        movieRating.textContent = `Rating: ${rating}`;
        movieItem.appendChild(movieRating);

        return movieItem;
    });

    filmList.append(...movieItems);
}

async function main() {
    loadMoviesPage(1);
}

window.addEventListener('load', main);