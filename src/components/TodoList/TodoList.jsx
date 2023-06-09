import React, {useState, useEffect} from 'react'
import AddTodo from '../AddTodo/AddTodo'
import TodoStatus from '../TodoStatus/TodoStatus'

export default function TodoList({category}){
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
  
  const handleAdd = (todo) => setTodos([...todos, todo]);
  
  const handleUpdate = (updated) => setTodos(
    todos.map((t) => (t.id === updated.id ? updated : t)));

  const handleDelete = (deleted) => setTodos(
    todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  
  const filtered = getFilteredItems(todos, category);
  
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

function readTodosFromLocalStorage() { 
  const todos = localStorage.getItem('todos'); 
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, category) {
  if (category === 'All') {
    return todos;
  }
  return todos.filter((todo) => todo.status === category);
}