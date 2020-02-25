import React from 'react';
import { MdSearch as SearchIcon } from 'react-icons/md';
import './index.scss';

export default () => {
  return (
    <label htmlFor="search" className='search' aria-label='Search'>
      <SearchIcon className='search__icon' aria-hidden="true" />
      <input type='search' placeholder='Search' id='search' className='search__input' />
    </label>
  )
}