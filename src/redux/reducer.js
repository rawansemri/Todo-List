import * as TODO_CONSTANTS from "./constants";

const initialState = {
  todo: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_CONSTANTS.ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

      case TODO_CONSTANTS.DELETE_TODO:
      return {
        ...state,
        todo: [...state.todo.filter((todo) => todo.id !== action.payload.id), action.payload.id],
      };

      case TODO_CONSTANTS.DONE_TODO:
        return {
            ...state,
            todo: state.todo.map((todo) =>
            todo.id === action.payload.id ? { ...todo, done: true } : todo
        ),
          };
  
          case TODO_CONSTANTS.EDIT_TODO:
        return {
            ...state,
            todo: state.todo.map((todo) =>
            todo.id === action.payload.id ? { ...todo, name:  action.payload.name } : todo
        ),
          };

    default:
      return state;
  }
};

export default todoReducer;