import React,{useState} from 'react';
import Button from './Button';
import "./AddTask.css";

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState(""); 

    const handleInputChande = (e) => {
        setInputData(e.target.value);
    } 

    const handleAddTaskClick = () =>{
       handleTaskAddition(inputData)
       setInputData("");
    }
    return ( 
        <div className="add-task-container">

            <input onChange={handleInputChande} value={inputData} className='add-task-input' type="text"/>
            <div className="add-task-button-container">

                <Button onClick={handleAddTaskClick}>adicionar</Button>
            </div>
        </div>
     );
}
 
export default AddTask ;