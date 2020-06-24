import React, { Component } from 'react';
import _ from 'lodash'; // underscore
import PropsTypes from 'prop-types';

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  console.log(currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className='pagination'>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <a className='page-link' onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propsTypes = {
  itemsCount: PropsTypes.number.isRequired,
  pageSize: PropsTypes.number.isRequired,
  currentPage: PropsTypes.number.isRequired,
  onPageChange: PropsTypes.func.isRequired,
};
export default Pagination;
