import { useState } from "react";
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(true);
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleFormSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
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
      <button className="delete" onClick={() => onDelete(book.id)}>
        Delete
      </button>
    </div>
  </div>;
}

export default BookShow;
