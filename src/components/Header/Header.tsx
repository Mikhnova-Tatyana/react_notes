import React, { FC } from 'react';
import classes from './Header.module.scss';

interface IHeader {
  handleTogglerDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header:FC<IHeader> = ({handleTogglerDarkMode}) => {

  return (
    <div className={classes.header}>
      <h1>Notes</h1>
      <button 
        className={classes.save} 
        onClick={() => handleTogglerDarkMode( previous => !previous)
      }>
        Toggle mode
      </button>
    </div>
  )
}

export default Header;