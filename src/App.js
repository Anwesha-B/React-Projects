import { useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const handleAddBook = (title) => {
    console.log("Adding " + title);
    setBooks([ ...books, {id: Math.round(Math.random() * 99), title}])
  }
  
  const deleteBookById = (bookId) => {
    setBooks(books.filter(book => book.id != bookId))
  }

  const editTitleById = (id, newTitle) => {
    setBooks(books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    }))
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editTitleById} />
      <BookCreate addBook={handleAddBook} />
    </div>);
}

export default App;
