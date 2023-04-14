import View from './View.js';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      // console.log(btn);
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      // console.log(goToPage);
      handler(goToPage);
    });
  }
  _generateMarkup() {
    const curPage = this._data.page;
    const btnNext = `<button data-goto="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
    <span>Page ${curPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button> `;
    // const totalPages = `${numPages} pages`;
    const btnPrev = `<button data-goto="${
      curPage - 1
    }" class="btn--inline pagination__btn--prev">
  <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
  </svg>
  <span>Page ${curPage - 1}</span>
  </button>`;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1 and there are other pages
    if (curPage === 1 && numPages > 1) {
      return btnNext;
      //   return `<button class="btn--inline pagination__btn--next">
      //   <span>${curPage + 1}</span>
      //   <svg class="search__icon">
      //     <use href="${icons}#icon-arrow-right"></use>
      //   </svg>
      // </button> `;
    }
    // Page 1 and no other pages
    if (curPage === 1 && numPages === 1) {
      return '';
    }
    if (curPage === numPages && numPages > 1) {
      return btnPrev;
      // Last page
      //   return `
      //   <button class="btn--inline pagination__btn--prev">
      //     <svg class="search__icon">
      //         <use href="${icons}#icon-arrow-left"></use>
      //     </svg>
      //     <span>Page ${curPage - 1}</span>
      //     </button>`;
    }
    // Other page
    if (curPage < numPages) {
      return btnPrev + btnNext;
      //   return `
      //   <button class="btn--inline pagination__btn--prev">
      //     <svg class="search__icon">
      //         <use href="${icons}#icon-arrow-left"></use>
      //     </svg>
      //     <span>Page ${curPage - 1}</span>
      //     </button>
      //     <button class="btn--inline pagination__btn--next">
      //   <span>${curPage + 1}</span>
      //   <svg class="search__icon">
      //     <use href="${icons}#icon-arrow-right"></use>
      //   </svg>
      // </button> `;
    }
  }
}

export default new PaginationView();
