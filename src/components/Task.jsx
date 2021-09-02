import React from 'react';
import "./task.css";
const Task = ({task}) => {
    return  <div className="task-conteiner">{task.title}</div> ;
}
 
export default Task;