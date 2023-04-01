import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/Todos/TodoList/TodoList';

function App() {
  return (
    <div className='app-container'>
      <h1 className='app-heading'>ToDo App</h1>
      <Header></Header>
      <TodoList />
    </div>
  );
}

export default App;
