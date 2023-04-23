import React from 'react'
import {useDarkMode} from '../../context/DarkModeContext';
import { HiMoon, HiSun} from 'react-icons/hi';

export default function Header({categories, category, onCategoryChange}){
  const {darkMode, toggleDarkMode} = useDarkMode();
  
  return(
    <header>
      <button onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul>
      {categories.map((value, index) => (
      <li key={index}>
        <button onClick={() => onCategoryChange(value)}>{value}
        </button>
      </li>
      ))}
    </ul>
    </header>
  );
}