import React, {useState} from 'react'
import AddTodo from './AddTodo'

export default function TodoList(){
  const [todos, setTodos] = useState([
    {id:1,
    work: '투두',
    status: 'done'
    },

    {id:12,
    work: 'Next 강의',
    status: 'done'
    },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);

  return (
    <section>
      <ul>
        {todos.map((todo) => {
        (
          <li key={todo.id}>{todo.work}</li>
        )
        })}
    </ul>
    <AddTodo onAdd={handleAdd}/>
    
    </section>
  );
}