import * as TODO_CONSTANTS from "./constants";

export function addTodo(todoName) {
  return async (dispatch) => {
    dispatch({
      type: TODO_CONSTANTS.ADD_TODO,
      payload: {
        name: todoName,
        done: false,
        id: Math.floor(Math.random() * 1000000),
      },
    });
  };
}

export function DeleteTodo(todo) {
  return async (dispatch) => {
    dispatch({
      type: TODO_CONSTANTS.DELETE_TODO,
      payload: {
        id: todo.id,
      },
    });
  };
}

export function DoneTodo(todo) {
  return async (dispatch) => {
    dispatch({
      type: TODO_CONSTANTS.DONE_TODO,
      payload: {
        id: todo.id,
      },
    });
  };
}

export function EditTodo(TodoId,NewTodoName) {
  return async (dispatch) => {
    dispatch({
      type: TODO_CONSTANTS.EDIT_TODO,
      payload: {
        id: TodoId,
        name: NewTodoName,
      },
    });
  };
}
