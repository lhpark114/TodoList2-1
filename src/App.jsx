import {useState} from 'react';
import './App.css'
import TodoList from './components/TodoList/TodoList'
import Header from './components/Header/Header'
import {DarkModeProvider} from './context/DarkModeContext';

const categories = ['All', 'Done', 'Progress'];
export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <DarkModeProvider>
      <div>
        <Header 
          categories = {categories}
          category = {category}
          onCategoryChange = {setCategory}
          />
        <TodoList category = {category}/>
      </div>
    </DarkModeProvider>
  );
}
