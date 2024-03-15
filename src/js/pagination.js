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
    const detailedMovies = await Promise.all(
      movies.map(async movie => {
        const details = await getMovieDetails(movie.id);
        return { ...movie, ...details };
      }),
    );
    return { movies: detailedMovies, totalPages: data.total_pages };
  } catch (error) {
    console.error('Error while fetching data:', error);
    return { movies: [], totalPages: 0 };
  }
}

export function renderMovieCard(movie) {
  const movieItem = document.createElement('div');
  movieItem.classList.add('movie-item');
  movieItem.style.cursor = 'pointer';
  movieItem.setAttribute('data-modal-open', '');
  movieItem.setAttribute('data-id', movie.id);

  const moviePoster = document.createElement('img');
  moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  moviePoster.alt = movie.title;
  movieItem.appendChild(moviePoster);

  const contentWrapper = document.createElement('div'); // Nowy div z zwartosciami p, Bartosz K
  contentWrapper.classList.add('content-wrapper');

  const movieTitle = document.createElement('h2');
  movieTitle.textContent = movie.title;
  movieItem.appendChild(movieTitle);

  const genreNames = movie.genres.map(genre => {
    return genre.name === 'Science Fiction' ? 'Sci-Fi' : genre.name; // Warunek, aby w przypadku pelnej nazwy okrajało do skrótu, Bartosz K
  });

  let movieGenresText = '';
  if (genreNames.length > 2) {
    movieGenresText = `${genreNames.slice(0, 2).join(', ')}, Other`; // Pokaż dwa pierwsze gatunki i dodaj " + other"
  } else {
    movieGenresText = genreNames.join(', ');
  }

  const movieGenres = document.createElement('p');
  movieGenres.textContent = movieGenresText;
  contentWrapper.appendChild(movieGenres);

  const movieYear = document.createElement('p');
  const releaseYear = new Date(movie.release_date).getFullYear();
  movieYear.textContent = `| ${releaseYear}`; // Dodanie znaku "|" , Bartosz K
  movieYear.classList.add('movie-year');
  contentWrapper.appendChild(movieYear);

  movieItem.appendChild(contentWrapper);

  const movieRating = document.createElement('p');
  const rating = movie.vote_average.toFixed(1);
  movieRating.textContent = `${rating}`;
  movieItem.appendChild(movieRating);
  contentWrapper.appendChild(movieRating);

  movieRating.classList.add('main-rating'); // Dodaje klase aby schowac element w main, Bartosz K

  return movieItem;
}

export function displayMovies(movies) {
  const filmList = document.querySelector('.film-list');
  filmList.innerHTML = '';

  const movieItems = movies.map(movie => renderMovieCard(movie));

  filmList.append(...movieItems);
}

async function loadMoviesPage(page) {
  const { movies, totalPages } = await getPopularMovies(page);
  displayMovies(movies);
  renderPagination(totalPages, page);
}

async function main() {
  loadMoviesPage(1);
}

window.addEventListener('load', main);

// PAGINACJA //

function renderPagination(totalPages, currentPage) {
  const paginationContainer = document.querySelector('.pagination');
  paginationContainer.innerHTML = '';

  const visiblePages = 5;
  const maxButtonsToShow = 1000;
  const increment = 15;

  let startPage = 1;
  let endPage = Math.min(startPage + visiblePages - 1, totalPages);

  if (totalPages > visiblePages) {
    const half = Math.floor(visiblePages / 2);
    startPage = Math.max(currentPage - half, 1);
    endPage = startPage + visiblePages - 1;
    if (endPage >= maxButtonsToShow) {
      endPage = maxButtonsToShow;
      startPage = Math.max(endPage - visiblePages + 1, 1);
    }
  }

  const firstPageButton = document.createElement('button');
  firstPageButton.innerHTML = `
    <svg class="icon icon-arrow-left" viewBox="0 0 32 32" width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667" d="M25.333 16H6.666M16 25.333 6.667 16 16 6.667" style="stroke:var(--color2, #000)"/>
    </svg>
`;
  firstPageButton.style.cursor = 'pointer';
  firstPageButton.classList.add('page-button', 'first-button');
  firstPageButton.addEventListener('click', () => {
    loadMoviesPage(1);
  });
  paginationContainer.appendChild(firstPageButton);

  if (startPage > 1) {
    const ellipsis1 = document.createElement('span');
    ellipsis1.textContent = '...';
    paginationContainer.appendChild(ellipsis1);
  }

  for (let page = startPage; page <= endPage; page++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = page;
    pageButton.style.cursor = 'pointer';
    pageButton.classList.add('page-button');
    if (page === currentPage) {
      pageButton.classList.add('active');
    }
    pageButton.addEventListener('click', () => {
      loadMoviesPage(page);
    });
    paginationContainer.appendChild(pageButton);
  }

  if (endPage < totalPages) {
    const ellipsis2 = document.createElement('span');
    ellipsis2.textContent = '...';
    paginationContainer.appendChild(ellipsis2);

    const lastPage = Math.min(endPage + increment, totalPages);

    const lastPageButton = document.createElement('button');
    lastPageButton.textContent = lastPage;
    lastPageButton.classList.add('page-button');
    lastPageButton.addEventListener('click', () => {
      loadMoviesPage(lastPage);
    });
    paginationContainer.appendChild(lastPageButton);
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
    const previousPage = Math.max(currentPage - 1, 1);
    loadMoviesPage(previousPage);
  });

  paginationContainer.appendChild(lastPageButton);

  async function searchMovies(keyword, page = 1) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      keyword,
    )}&page=${page}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const movies = data.results;
      const detailedMovies = await Promise.all(
        movies.map(async movie => {
          // Przy założeniu, że funkcja getMovieDetails jest już zdefiniowana w Twoim kodzie
          const details = await getMovieDetails(movie.id);
          return { ...movie, ...details };
        }),
      );
      return { movies: detailedMovies, totalPages: data.total_pages };
    } catch (error) {
      console.error('Error while searching movies:', error);
      return { movies: [], totalPages: 0 };
    }
  }

  // TO SEARCH //
  async function searchMovies(keyword, page = 1) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      keyword,
    )}&page=${page}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const movies = data.results;
      const detailedMovies = await Promise.all(
        movies.map(async movie => {
          const details = await getMovieDetails(movie.id);
          return { ...movie, ...details };
        }),
      );
      return { movies: detailedMovies, totalPages: data.total_pages };
    } catch (error) {
      console.error('Error while searching movies:', error);
      return { movies: [], totalPages: 0 };
    }
  }

  async function handleSearch(keyword) {
    const { movies, totalPages } = await searchMovies(keyword);
    displayMovies(movies);
    renderPagination(totalPages, 1);
  }

  document.querySelector('.search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const keyword = document.querySelector('.search-input').value;
    handleSearch(keyword);
  });
}
