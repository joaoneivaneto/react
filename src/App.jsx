import React, { useState } from 'react';
import Tasks from './components/Tasks';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';






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
    
  ]);

  const handleTaskClick = (taskId) => {
      const newTasks = tasks.map( task =>{
        if(task.id === taskId) return {...task, completed : !task.completed}

        return task;
      });

      setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed:false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTask = tasks.filter(task => task.id !== taskId)
    setTasks(newTask);
  }
  
  return (
      <Router>
        <div className="conteiner">
        <Header />
          <Route
            path="/"
            exact
            render={ () =>(
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
              </>

            )}
          />
          <Route path="/:taskTitle" exact component={TaskDetails} />
       </div>
         
        
      </Router>
  );
};
export default App;