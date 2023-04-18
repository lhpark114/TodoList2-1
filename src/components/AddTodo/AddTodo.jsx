import React, {useState} from 'react'
import { v4 as uuid4 } from 'uuid';

export default function AddTodo({ onAdd }){
  const [task, setTask] = useState('');
  const handleChange = (e) => setTask(e.target.value);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(task.trim().length === 0) {
      return;
    }
    onAdd({id: uuid4(), task, status: 'done'});
    setTask('');
  };
  
  return(
    <form onSubmit = {handleSubmit} >
      <input 
        type='text'
        placeholder='Input Todos'
        value = {task}
        onChange = {handleChange}      
        />
        <button>
          Add
        </button>
    </form>
  );
  
}