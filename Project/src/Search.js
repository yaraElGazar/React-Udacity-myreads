import { Link } from "react-router-dom";
import Book from "./Book";

const Search = ({ searchBooks, searchResult, shelfChange, searchError }) => {
  const handleSearch = (event) => {
    searchBooks(event.target.value);
  };
  console.log(searchResult);

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title, author, or ISBN'
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {!searchError ? (
            searchResult.map((book) => {
              return (
                <Book book={book} key={book.id} shelfChange={shelfChange} />
              );
            })
          ) : (
            <div></div>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;
