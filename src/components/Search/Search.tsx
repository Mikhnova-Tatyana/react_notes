import React, { ChangeEvent, FC, useState } from 'react';
import classes from './Search.module.scss';
import { MdSearch as SearchIcon } from 'react-icons/md';
import { TNote } from '../../types/types';

interface ISearch {
  handleSearchNote: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<ISearch> = ({handleSearchNote}) => {
  return (
    <div className={classes.search}>
      <SearchIcon className={classes.icon_search} />
      <input 
        type="text" 
        onChange={ handleSearchNote } 
        placeholder='type to search...'
      />
    </div>
  )
}

export default Search;