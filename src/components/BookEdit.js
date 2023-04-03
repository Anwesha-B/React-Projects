import { useState } from "react";

function BookEdit({book, formClose}) {
  
  const [title, setTitle] = useState(book.title);
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    formClose(book.id, title);
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
