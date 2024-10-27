import { ADD, DELETE, EDIT, LOADED } from "./actionType";

export const loadedBooks = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};
export const addBook = (book) => {
  return {
    type: ADD,
    payload: book,
  };
};
export const editBook = (book) => {
  return {
    type: EDIT,
    payload: book,
  };
};
export const deleteBook = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
