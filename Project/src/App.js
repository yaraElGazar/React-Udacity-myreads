import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import Main from "./Main";

function App() {
  const [books, setBooks] = useState([]);

  // Fetch all books from BooksAPI when loading
  const getBooks = async () => {
    const response = await BooksAPI.getAll();
    setBooks(response);
  };

  useEffect(() => {
    getBooks();
  }, []);

  // Updating books API then fetching books again
  const shelfChange = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    await getBooks();
  };

  return (
    <div className='app'>
      <Main books={books} shelfChange={shelfChange} />
    </div>
  );
}

export default App;
