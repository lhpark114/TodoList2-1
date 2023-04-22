import React, {useState} from 'react'
import AddTodo from '../AddTodo/AddTodo'
import TodoStatus from '../TodoStatus/TodoStatus'


export default function TodoList({filter}){
  const [todos, setTodos] = useState([
    {id:'1', task: '투두리스트 끝내기', status: 'Progress'},
    {id:'12', task: 'Next 강의', status: 'Done'},
  ]);
  
  const handleAdd = (todo) => setTodos([...todos, todo]);
  
  const handleUpdate = (updated) => setTodos(
    todos.map((t) => (t.id === updated.id ? updated : t)));

  const handleDelete = (deleted) => setTodos(
    todos.filter((t) => t.id !== deleted.id));

  const filtered = getFilteredItems(todos, filter);
  
  return (
    <section>
      
      <ul>
        {filtered.map((item) => (
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

function getFilteredItems(todos, filter) {
  if (filter === 'All') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}