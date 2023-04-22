import React  from 'react'

export default function Header({categories, category, onCategoryChange}){
  
  return(
    <header>
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