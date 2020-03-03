import React from 'react';
import { MdSearch as SearchIcon } from 'react-icons/md';
import Input from '../input';

export default ({ search }) => (
  <Input id='search' type='search' label='Search' onChange={(e) => search({ text: e.target.value })}  prefixIcon={
    <SearchIcon className='search__icon' aria-hidden='true' />
  } />
)