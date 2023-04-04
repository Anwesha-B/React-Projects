import { useState, useEffect } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from "axios";

function App() {

  const getAllBooks = async () => {
    let response = await axios.get('http://localhost:3001/books');
    console.log(response.data);
    setBooks(response.data);
  }

  useEffect(() => getAllBooks(), []);

  const [books, setBooks] = useState([]);
  
  const handleAddBook = async (title) => {
    console.log(typeof (books));
    let response = await axios.post('http://localhost:3001/books', { title });
    setBooks([...books, response.data]);
  }
  
  const deleteBookById = async (bookId) => {
    axios.delete(`http://localhost:3001/books/${bookId}`);
    setBooks(books.filter(book => book.id != bookId))
  }

  const editTitleById = async (id, newTitle) => {
    let response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    });
    console.log(response.data);
    setBooks(books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
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
