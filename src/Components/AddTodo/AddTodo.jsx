import React, { useState } from "react";
import styles from "./styles.module.css";
import { addTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function AddTodo() {
  const [todoName, setTodoName] = useState("");
  const dispatch = useDispatch();
  function handleAdd(todoName) {
    dispatch(addTodo(todoName));
  }
  return (
    <div className={styles.AddTodoContainer}>
      <input
        type="text"
        placeholder="Add A Task"
        className={styles.Todo}
        onChange={(e) => setTodoName(e.target.value)}
      ></input>
      {todoName.length >0 ? 
      <button className={styles.AddBtn} onClick={() => handleAdd(todoName)}>
        Add
      </button>: <div></div>}
    </div>
  );
}
