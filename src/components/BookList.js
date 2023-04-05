import BookShow from './BookShow';
import { useContext } from 'react';
import BooksContext from '../context/books';

function BookList() {
  const { books } = useContext(BooksContext);
  const renderBooks = books.map(book => {
    return <div><BookShow book={book} key={book.id} /></div>;
  })
  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
