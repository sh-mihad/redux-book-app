import { addBook, loadedBooks } from "../actions";

const mainUrl = "http://localhost:9000";

export const fetchBooks = async (dispatch) => {
  const response = await fetch(`${mainUrl}/books`);
  const data = await response.json();
  dispatch(loadedBooks(data));
};

export const postBook = (book) => {
  return async (dispatch) => {
    const response = await fetch(`${mainUrl}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    const data = await response.json();
    dispatch(addBook(data));
  };
};
