import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Main from "./Main";
import Search from "./Search";

function App() {
  const [books, setBooks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [flip, setFlip] = useState(true);

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
    book.shelf = shelf;
    setFlip(!flip);
  };

  // Add Search Functionality
  const searchBooks = async (query) => {
    try {
      const response = await BooksAPI.search(query);
      const resultBooks = response.map((resultBook) => {
        books.forEach((book) => {
          if (resultBook.id === book.id) {
            resultBook.shelf = book.shelf;
          }
        });
        return resultBook;
      });
      if (response && !response.error) {
        setSearchError(false);
        setSearchResult(resultBooks);
      } else {
        // No response
        setSearchError(true);
      }
      // Error
    } catch (error) {
      setSearchError(true);
    }
  };

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Main books={books} shelfChange={shelfChange} />
          </Route>
          <Route exact path='/search'>
            <Search
              searchBooks={searchBooks}
              searchResult={searchResult}
              setSearchResult={setSearchResult}
              shelfChange={shelfChange}
              searchError={searchError}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
