import BookShelf from "./BookShelf";

const Main = ({ books, shelfChange }) => {
  //Filtering books before sending to bookshelf
  const filterBooks = (books, type) => {
    return books.filter((book) => book.shelf === type);
  };

  return (
    <div className='main'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <BookShelf
        title='Currently Reading'
        books={filterBooks(books, "currentlyReading")}
        shelfChange={shelfChange}
      />
      <BookShelf
        title='Want To Read'
        books={filterBooks(books, "wantToRead")}
        shelfChange={shelfChange}
      />
      <BookShelf
        title='Read'
        books={filterBooks(books, "read")}
        shelfChange={shelfChange}
      />
    </div>
  );
};

export default Main;
