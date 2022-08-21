import BookShelf from "./BookShelf";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

const Main = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const response = await BooksAPI.getAll();
      setBooks(response);
    };
    getBooks();
  }, []);
  return (
    <div className='main'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <BookShelf
        title='Currently Reading'
        books={books.filter((book) => book.shelf === "currentlyReading")}
      />
      <BookShelf
        title='Want To Read'
        books={books.filter((book) => book.shelf === "wantToRead")}
      />
      <BookShelf
        title='Read'
        books={books.filter((book) => book.shelf === "read")}
      />
    </div>
  );
};

export default Main;
