import React, { useState } from 'react';
import Tasks from './components/Tasks';
import './App.css';
import AddTask from './components/AddTask';

const App = () => {
  // let menssege ='Hello world';
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title:'estudar programação',
      completed: false,
    },

    {
      id:'2',
      title: 'Ler Livros',
      completed: true,

    },
    {
      id:'2',
      title: 'Ler Livros',
      completed: true,

    },
  ]);

  
  return (
      <>
        <div className="conteiner">
          <AddTask/>
          <Tasks tasks={tasks}/>
        </div>
        
      </>
  );
};
export default App;