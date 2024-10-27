/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/books/thunk/booksThunk";
import BookCard from "./Bookcard";

export default function BookList({ setEditData, setEdit }) {
  const { books, status } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  let renderBooks = [];
  if (status.filter === "featured") {
    renderBooks = books.filter((book) => book.featured);
  } else {
    renderBooks = books;
  }
  console.log("status.searchTerm",status.searchTerm);
  return (
    <div className="lws-bookContainer">
      {status.searchTerm
        ? renderBooks
            .filter((item) =>
              item?.name?.toLowerCase().includes(status.searchTerm.toLowerCase())
            ).map((book) => (
              <BookCard
                key={book.id}
                book={book}
                setEdit={setEdit}
                setEditData={setEditData}
              />
            ))
        : renderBooks?.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              setEdit={setEdit}
              setEditData={setEditData}
            />
          ))}
    </div>
  );
}
