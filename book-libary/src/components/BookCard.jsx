import "../css/BookCard.css";

export default function BookCard({ book }) {
  function onFavClick() {
    console.log("test");
    alert("Added to favorites q(≧▽≦q)");
  }
  return (
    <>
      <div className="book-card">
        <div className="book-cover">
          <img src={book.url} alt={book.title} />
          <div className="book-overlay">
            <button className="favorite btn" onClick={() => onFavClick()}>
              💖
            </button>
          </div>
        </div>

        <div className="book-info">
          <h3>{book.title}</h3>
          <p>{book.release_date}</p>
        </div>
      </div>
    </>
  );
}
