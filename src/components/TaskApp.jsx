import React ,{ useState }from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";

import {Task} from "./Task";
import data from "../data/tasks.json";
import {AddTask} from "./AddTask"

const TaskApp = () => {
  // console.log(data)
  const [input,setInput] = useState("");
  const [todo, setTodo] = useState([...data]);
  const handleDelete = (id) => {
     setTodo(todo.filter((el)=>el.id !== id))
  }
  const handleStatus = (id) => {
     setTodo(todo.map((el)=>el.id === id ? {...el , done : !el.done}: el))
  }
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      <h1>TodoList</h1>
      <TaskHeader todo={todo}/>
      <AddTask input={input} setInput={setInput} todo={todo}  setTodo={setTodo}/>
      <Task todo={todo} setTodo={setTodo} del={handleDelete} stat = {handleStatus}/>

      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
