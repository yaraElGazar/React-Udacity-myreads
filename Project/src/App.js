import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Main from "./Main";
import Search from "./Search";

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
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Main books={books} shelfChange={shelfChange} />
          </Route>
          <Route exact path='/search'>
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
