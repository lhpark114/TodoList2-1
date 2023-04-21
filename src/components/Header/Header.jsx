import React, {useState} from 'react'

export default function Header(){
  const [showAll, setShowAll] = useState();
  const [showDone, setShowDone] = useState();
  const [showProgress, setShowProgress] = useState();

  const handleAll = () => setShowAll
  
  return(
    <ul>
      <li>
          <button onClick={handleAll}>All</button>
          <button onClick={handleDone}>Done</button>
          <button onClick={handleProgress}>Progress</button>
      </li>
    </ul>
    
  )
}