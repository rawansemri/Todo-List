import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { Todo } from "../Todo/Todo";
export default function MyTodo() {
  const todo = useSelector((state) => state.todo);
  return (
    <><h1 className={styles.myTasks}>To Do List</h1>
    <div className={styles.flexContainer} >
      
      {
       
      todo?.map((todo) => (
        todo.id != null ? (
          <Todo key={todo.id} todo={todo} />
          ):(<p></p>)
      ))
      }
    </div></>
  );
}
