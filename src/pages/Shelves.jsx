import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SecondContext } from "../components/App";

function Shelves() {
  const navigate = useNavigate();

  const { savedBooks, setSavedBooks } = useContext(SecondContext);

  const handleBookClick = (id) => {
    navigate(`/books/${id}`);
  };

  const handleDelete = (id) => {
    setSavedBooks(savedBooks.filter((book) => book.id !== id));
  };

  return (
    <div>
      {savedBooks.length < 1 ? (
        <div class="no-books">NO BOOKS AVAILABLE IN THE SHELF</div>
      ) : (
        <div>
          <div className="container">
            <div className="inner-container">
              {savedBooks.map((book) => (
                <ul>
                  <li key={book.id} className="book-display">
                    <img
                      onClick={() => handleBookClick(book.id, book.title)}
                      src={book.cover_image}
                      alt={book.title}
                    />
                    <br />
                    <h2>{book.title}</h2>
                    <br />
                    <p>
                      By <span>{book.author}</span>
                    </p>
                    <button
                      className="delete-buttons"
                      onClick={() => handleDelete(book.id)}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shelves;
