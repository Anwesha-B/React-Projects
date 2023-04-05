import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {

  const { createBook} = useContext(BooksContext)
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
    
  }
  return (
    <div className="book-create">
      <h3>Add a new book title</h3>
      <form onSubmit={handleSubmit}>
        <input className="input" value={title } onChange={handleOnChange} />
        <button className="button">Add</button>
      </form>
    </div>
  );
}

export default BookCreate;
