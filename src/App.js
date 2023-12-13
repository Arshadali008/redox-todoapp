import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction } from './Actions/TodoActions';
import { RemoveTodoAction } from './Actions/TodoActions';

function App() {

  const [todo, setTodo]=useState();

  const dispatch =useDispatch();
  const Todo =useSelector((state) => state.Todo);
  const {todos} =Todo;

  const handleSubmit =(e) =>{
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  }
  const removeHandler=(t)=>{
    dispatch(RemoveTodoAction(t));
  }

  return (
    <div className="App">
      <header className="App-header p-5 ">
        <h2>Todo List App in Redux</h2>
        <form className='flex pt-6' onSubmit={handleSubmit}>
          <input className=' w-4/5 px-10 rounded-xl border-none text-black text-xl' placeholder='Enter a Todo' onChange={(e)=>setTodo(e.target.value)}/>
          <button className='p-4 bg-white rounded-2xl text-black text-sm ml-5' type='submit'>Go</button>
        </form>
        <ul className='list-none w-4/5 m-0 p-0'>
          {
            todos && todos.map((t)=>(
              <li key={t.id} className='rounded my-2 mx-0 bg-blue-400 py-2 px-5 flex items-center'>
            <span className='flex-1 text-start'>{t.todo}</span>
            <button onClick={()=>removeHandler(t)} className='rounded p-3 border border-solid border-white text-white bg-orange-600'>Delete</button>
          </li>
            ))
          }
          
        </ul>
      </header>
    </div>
  );
}

export default App;
