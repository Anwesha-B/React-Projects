import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({book, formClose}) {
  
  const [title, setTitle] = useState(book.title);
  const {editTitleById } = useContext(BooksContext);
  
  const handleInputChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  }

  const handleFormSubmit = () => {
    editTitleById(book.id, title);
    formClose();
  }

  return (
    <form className="book-edit" onSubmit={handleFormSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleInputChange} />
      <button className="button is-primary">
        Save
      </button>
    </form>
  );
}

export default BookEdit;
