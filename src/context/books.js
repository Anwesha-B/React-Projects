import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {

    const [books, setBooks] = useState([]);

    const getAllBooks = async () => {
        let response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }

    const createBook = async (title) => {
        let response = await axios.post('http://localhost:3001/books', { title });
        setBooks([...books, response.data]);
    }
  
    const deleteBookById = async (bookId) => {
        axios.delete(`http://localhost:3001/books/${bookId}`);
        setBooks(books.filter(book => book.id !== bookId))
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
        <BooksContext.Provider value={{ books, getAllBooks, createBook, deleteBookById, editTitleById }}>
            {children}
        </BooksContext.Provider>);
}

export { Provider };
export default BooksContext;