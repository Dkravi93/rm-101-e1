// import e from "express";
import React ,{useState} from "react";
import styles from "./addTask.module.css";
import { v4 as uuidv4} from "uuid";

const AddTask = ({ input , setInput, todo, setTodo }) => {
  // NOTE: do not delete `data-testid` key value pair
  // let [task, setTask] = useState({data : ""})
  
  
  const submithandler = () =>{
    // if(document.getElementById("neymar").value)
     var match = todo.filter((el) => {
       return el.text.toUpperCase() == input.toUpperCase();
     })
     if(match.length > 0){
       alert("item is alreday present");
       setInput('');
     }else{
       if(input.length){
         setTodo([...todo, { id : uuidv4() , text : input , done : false, count : 1}])
       setInput("");
       }else{
         alert("please enter some text...")
       }
       
     }
       
  }
  const handletask = (e)=>{

      setInput(e.target.value)
 ``
  }
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" value={input} onChange={handletask}  />
      <button data-testid="add-task-button" onClick={submithandler}>Add Task</button>
    </div>
  );
};

export default AddTask;
