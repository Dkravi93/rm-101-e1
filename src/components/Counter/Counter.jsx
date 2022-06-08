import React ,{useState} from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  let [count,setCount] = useState(1);
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={() => setCount(count + 1)}>+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button" disabled={count<1} onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Counter;
