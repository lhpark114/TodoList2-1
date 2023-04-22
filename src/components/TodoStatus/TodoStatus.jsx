import react from 'react';
import { MdOutlineCancel } from 'react-icons/md';

export default function TodoStatus({todo, onUpdate, onDelete}) {
  const { task, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'Done' : 'Progress';
    onUpdate({...todo, status});
    };

  const handleDelete = () => onDelete(todo);
  
  return( 
    <li>
      <input 
        type='checkbox' 
        id='checkbox' 
        checked={status === 'Done'}
        onChange={handleChange}
        />
      <label htmlFor='checkbox'>{task}</label>
      <button onClick={handleDelete}><MdOutlineCancel/></button>
    </li>
  )
}


