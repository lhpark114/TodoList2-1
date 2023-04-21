import React, {useState} from 'react'
import AddTodo from '../AddTodo/AddTodo'
import TodoStatus from '../TodoStatus/TodoStatus'


export default function TodoList(){
  const [todos, setTodos] = useState([
    {id:'1', task: '투두리스트 끝내기', status: 'done'},
    {id:'12', task: 'Next 강의', status: 'progress'},
  ]);
  
  const handleAdd = (todo) => setTodos([...todos, todo]);
  
  const handleUpdate = (updated) => setTodos(
    todos.map((t) => (t.id === updated.id ? updated : t)));

  const handleDelete = (deleted) => setTodos(
    todos.filter((t) => t.id !== deleted.id));
  
  return (
    <section>
      
      <ul>
        {todos.map((item) => (
              <TodoStatus 
                key={item.id} 
                todo={item} 
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                /> 
        ))}         
    </ul>
    <AddTodo onAdd={handleAdd}/>
    </section>
  );
}