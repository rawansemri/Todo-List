import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { DeleteTodo } from "../../redux/actions";
import { EditTodo } from "../../redux/actions";
import { DoneTodo } from "../../redux/actions";
import { AiOutlineCheck } from "react-icons/ai";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditable, setEditable] = useState(false);
  const [NewTodoName, setNewTodoName] = useState(todo.name);
  function handleDelete(todo) {
    dispatch(DeleteTodo(todo));
  }
  function handleEdit() {
    setEditable(true);
  }
  function handleDone(todo) {
    dispatch(DoneTodo(todo));
  }
  function handleCancel() {
    setEditable(false);
  }
  function handleSave(id, NewTodoName) {
    dispatch(EditTodo(id, NewTodoName));
    setEditable(false);
  }
  return (
    todo.done ? (
      <div key={todo.id} className={styles.MyDoneTodoContainer}>
        <p>{todo.name}</p>
        <div className={styles.doneStatus}>
          <p>
            status : Done <AiOutlineCheck></AiOutlineCheck>
          </p>
          <h2>Completed!</h2>
        </div>
      </div>
    ) : (
      <div key={todo.id}  className={styles.MyTodoContainer}>
        {isEditable ? (
          <div>
            <input
              type={"text"}
              defaultValue={todo.name}
              onChange={(e) => setNewTodoName(e.target.value)}
            />
            <div className={styles.activeStatus}>
              <p>status : Active</p>
              <div>
                <button
                  className={styles.SaveBtn}
                  onClick={() => handleSave(todo.id, NewTodoName)}
                >
                  Save
                </button>
                <button className={styles.CancelBtn} onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>{todo.name}</p>
            <div className={styles.activeStatus}>
              <p>status : Active</p>
              <div>
                <button
                  className={styles.DeleteBtn}
                  onClick={() => handleDelete(todo)}
                >
                  Delete
                </button>
                <button className={styles.EditBtn} onClick={() => handleEdit()}>
                  Edit
                </button>
                <button
                  className={styles.DoneBtn}
                  onClick={() => handleDone(todo)}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
};
