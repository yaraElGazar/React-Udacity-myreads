import ShelfChanger from "./ShelfChanger";

const Book = ({ book, shelfChange }) => {
  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
            }}
          ></div>
          <ShelfChanger book={book} shelfChange={shelfChange} />
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>{book.authors.toString()}</div>
      </div>
    </li>
  );
};

export default Book;
