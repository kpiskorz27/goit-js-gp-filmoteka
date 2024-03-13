const apiKey = 'ddd78f0e80e0d30735adfd081ca2dc47';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

import { renderPagination } from './pagination.js';

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

  const moviePoster = document.createElement('img');
  moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  moviePoster.alt = movie.title;
  movieItem.appendChild(moviePoster);

  const movieTitle = document.createElement('h2');
  movieTitle.textContent = movie.title;
  movieItem.appendChild(movieTitle);

  const genreNames = movie.genres.map(genre => genre.name);
  let movieGenresText = '';
  if (genreNames.length > 2) {
    movieGenresText = `${genreNames.slice(0, 2).join(', ')}, Other`; // Pokaż dwa pierwsze gatunki i dodaj " + other"
  } else {
    movieGenresText = genreNames.join(', ');
  }
  const movieGenres = document.createElement('p');
  movieGenres.textContent = movieGenresText;
  movieItem.appendChild(movieGenres);

  const movieYear = document.createElement('p');
  const releaseYear = new Date(movie.release_date).getFullYear();
  movieYear.textContent = `${releaseYear}`;
  movieItem.appendChild(movieYear);

  const movieRating = document.createElement('p');
  const rating = movie.vote_average.toFixed(1);
  movieRating.textContent = `${rating}`;
  movieItem.appendChild(movieRating);

  return movieItem;
}

export function displayMovies(movies) {
  const filmList = document.querySelector('.film-list');
  filmList.innerHTML = '';

  const movieItems = movies.map(movie => renderMovieCard(movie));

  filmList.append(...movieItems);
}

export async function loadMoviesPage(page) {
    const { movies, totalPages } = await getPopularMovies(page);
    displayMovies(movies);
    renderPagination(totalPages, page);
  }
  
  async function main() {
    loadMoviesPage(1);
  }

window.addEventListener('load', main);

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
