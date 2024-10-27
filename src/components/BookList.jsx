import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../redux/books/thunk/booksThunk";
import BookCard from "./Bookcard";

export default function BookList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks);
  }, []);
  return (
    <div className="lws-bookContainer">
      <BookCard />
    </div>
  );
}
