import React ,{useState} from "react";
import styles from "./task.module.css";
import {Counter} from "../Counter"

const Task = ({ todo, setTodo }) => {
   console.log(todo);
 const handleRisk = () => {

 }
   
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      {todo.map((el) =>{
        return (<div key= {el.id} className={styles.subtask} id={`abc${el.id}`}>
            <input type="checkbox" data-testid="task-checkbox" id={`ac${el.id}`} defaultChecked={el.done } onClick={()=>{
              // console.log(document.getElementById(`ac${el.id}`).checked)
              document.getElementById(`ac${el.id}`).checked ? (document.getElementById(`ab${el.id}`).style.textDecoration = 'line-through'): (document.getElementById(`ab${el.id}`).style.textDecoration = 'none') 
            }} />
            <div data-testid="task-text" id={`ab${el.id}`}>   
               {el.text}    
            </div>     
            <Counter />
            <button data-testid="task-remove-button" onClick={()=> document.getElementById(`abc${el.id}` ).style.display ="none"}>x</button>
        </div>)
       
      })}
      
    </li>
  );
};

export default Task;
