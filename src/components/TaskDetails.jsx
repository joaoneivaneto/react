import React from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";
import  "./TaskDetails.css";

const TaskDetails = () =>{
    const params = useParams();

    console.log(params);
    return (
        <>
            <div className="back-button-container">
                <Button>Voltar</Button> 
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
					minima eius magnam culpa sequi explicabo.
                </p>
            </div>
        </>
    )
}

export default TaskDetails;