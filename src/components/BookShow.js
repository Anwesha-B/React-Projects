import { useState, useContext } from "react";
import BooksContext from "../context/books";
import BookEdit from './BookEdit';

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(true);
  const { deleteBookById } = useContext(BooksContext);
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowEdit(!showEdit);
  }

  let content = showEdit ? book.title :
    <BookEdit book={book} formClose={handleFormSubmit} />;
    
  return <div className="book-show">
    <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
    <div>{content}</div>
    <div className="actions">
      <button className="edit" onClick={handleEditClick}>
        Edit
      </button>
      <button className="delete" onClick={() => deleteBookById(book.id)}>
        Delete
      </button>
    </div>
  </div>;
}

export default BookShow;
