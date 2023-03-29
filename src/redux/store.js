import { createStore, applyMiddleware } from "redux";
import todoReducer from "./reducer";
import thunk from "redux-thunk";


export const store = createStore(todoReducer, applyMiddleware(thunk));

