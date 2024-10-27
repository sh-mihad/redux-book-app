import { useState } from "react";
import "./App.css";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import ListHeader from "./components/ListHeader";
import Navbar from "./components/Navbar";

function App() {
  const [editData, setEditData] = useState(null);
  const [isEdit, setEdit] = useState(false);

  return (
    <>
      <Navbar />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <ListHeader />
            <BookList setEditData={setEditData} setEdit={setEdit}/>
          </div>
          <BookForm editData={editData} isEdit={isEdit} setEdit={setEdit} setEditData={setEditData}/>
        </div>
      </main>
    </>
  );
}

export default App;
