import BookShelf from "./BookShelf";

const Main = () => {
  return (
    <div className='main'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <BookShelf />
    </div>
  );
};

export default Main;
