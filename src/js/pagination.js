const apiKey = 'ddd78f0e80e0d30735adfd081ca2dc47';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

async function getPopularMovies(page = 1) {
    const urlWithPage = `${apiUrl}&page=${page}`;
    try {
        const response = await fetch(urlWithPage);
        const data = await response.json();
        return { movies: data.results, totalPages: data.total_pages };
    } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
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

    const movieItems = movies.map(movie => `<li>${movie.title}</li>`).join('');
    filmList.innerHTML = movieItems;
}

async function main() {
    loadMoviesPage(1);
}

window.addEventListener('load', main);