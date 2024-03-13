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
  firstPageButton.textContent = '<<';
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
  lastPageButton.textContent = '>>';
  lastPageButton.classList.add('page-button', 'last-button');
  lastPageButton.addEventListener('click', () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    loadMoviesPage(nextPage);
  });

  paginationContainer.appendChild(lastPageButton);
}