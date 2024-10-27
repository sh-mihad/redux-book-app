import { ADD, DELETE, EDIT, LOADED } from "./actionType";

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return [...action.payload];
    case ADD:
      return [...state, { ...action.payload }];
    case EDIT:
      return state.map((book) => {
        if (book.id === action.payload.id) {
          return {
            ...book,
            name: action.payload.name,
            author: action.payload.author,
            thumbnail: action.payload.thumbnail,
            price: action.payload.price,
            rating: action.payload.rating,
            featured: action.payload.featured,
          };
        }
        return book;
      });
    case DELETE:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
