import Book from "./Book";

const BookShelf = ({ title, books, shelfChange }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.map((book) => {
            return <Book book={book} key={book.id} shelfChange={shelfChange} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
