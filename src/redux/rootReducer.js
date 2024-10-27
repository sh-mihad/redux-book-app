import { combineReducers } from "redux";
import booksReducer from "./books/booksReducer";
import statusReducer from "./status/statusReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  status:statusReducer
});

export default rootReducer;
