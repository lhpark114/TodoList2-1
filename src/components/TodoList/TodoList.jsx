import React, {useState} from 'react'
import AddTodo from '../AddTodo/AddTodo'

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

  return (
    <section>
      <ul>
        {
          todos.map((item) => 
          <li key={item.id}>{item.task}</li>
        )}
    </ul>
    <AddTodo onAdd={handleAdd}/>
    
    </section>
  );
}