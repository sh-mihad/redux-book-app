/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/books/thunk/booksThunk";
import BookCard from "./Bookcard";

export default function BookList({setEditData,setEdit}) {
  const books = useSelector(state=>state.books)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);
  return (
    <div className="lws-bookContainer">
      {
        books?.map(book=> <BookCard key={book.id} book={book} setEdit={setEdit} setEditData={setEditData} />)
      }
     
    </div>
  );
}
