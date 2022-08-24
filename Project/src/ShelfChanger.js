const ShelfChanger = ({ book, shelfChange }) => {
  const handleChange = (event) => {
    shelfChange(book, event.target.value);
  };

  return (
    <div className='book-shelf-changer'>
      <select
        value={book.shelf ? book.shelf : "moveTo"}
        onChange={handleChange}
      >
        <option value='moveTo' disabled>
          Move to...
        </option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};

export default ShelfChanger;
