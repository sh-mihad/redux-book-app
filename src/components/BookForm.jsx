/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postBook, updateBook } from "../redux/books/thunk/booksThunk";
const initialFormData = {
  name: "",
  author: "",
  thumbnail: "",
  price: "",
  rating: "",
  featured: "",
};
export default function BookForm({ isEdit, setEdit, editData, setEditData }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialFormData);
  const handleOnchange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isEdit && editData) {
      setFormData(editData);
    }
  }, [isEdit, editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(updateBook(formData));
      setEdit(false);
      setEditData(null);
    } else {
      dispatch(postBook(formData));
    }
    setFormData(initialFormData);
  };
  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">{isEdit?"Edit":"Add New"} Book</h4>
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={formData.name}
              onChange={handleOnchange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              onChange={handleOnchange}
              value={formData.author}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              onChange={handleOnchange}
              value={formData.thumbnail}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                onChange={handleOnchange}
                value={formData.price}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                onChange={handleOnchange}
                value={formData.rating}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              onChange={handleOnchange}
              checked={formData.featured}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
           {isEdit ? "Edit":"Add"} Book
          </button>
        </form>
      </div>
    </div>
  );
}
