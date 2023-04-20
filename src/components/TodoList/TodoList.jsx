import React, {useState} from 'react'
import AddTodo from '../AddTodo/AddTodo'
import Checkbox from '../Checkbox/Checkbox'
import { MdOutlineCancel } from 'react-icons/md';

export default function TodoList(){
  const [todos, setTodos] = useState([
    {id:'1',
    task: '투두리스트 끝내기',
    status: 'done'
    },

    {id:'12',
    task: 'Next 강의',
    status: 'progress'
    },
  ]);

  
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id))};
  const handleCheck = (todo) => setTodos([...todos, todos.status: 'done'])
  
  return (
    <section>
      <ul>
        {
          todos.map((item) => (
              <li key={item.id}> 
                <Checkbox onCheck={handleCheck}/> {item.task} 
                <button onClick={handleDelete}> <MdOutlineCancel />
                </button>
              </li>)
        )}
         
    </ul>
    <AddTodo onAdd={handleAdd}/>
    </section>
  );
}