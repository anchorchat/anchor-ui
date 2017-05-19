import size from 'lodash/size';
import range from 'lodash/range';

const pager = (list, currentPage = 1, pageSize = 10) => {
  // 10 page links shown at any time (e.g. 1 2 3 4 5 6 7 8 9 10)
  // unless there are less than 10 total pages

  // the active link (current page) is in the 6th position,
  // except for when the active link is below 6 or less than 4 from the last position

  const totalItems = size(list);
  const totalPages = Math.ceil(totalItems / pageSize);

  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > 10) {
    if (currentPage <= 6) {
      endPage = 10;
    } else if ((currentPage + 4) >= totalPages) {
      startPage = totalPages - 9;
    } else {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    }
  }

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + (pageSize - 1), totalItems - 1);

  const pages = range(startPage, endPage + 1);

  return {
    totalItems,
    currentPage,
    pageSize,
    totalPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
    pages
  };
};

export default pager;
