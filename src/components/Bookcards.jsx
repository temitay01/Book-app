import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../pages/Books";

function Bookcards() {
  const navigate = useNavigate();

  const { books } = useContext(Context);
  const handleBookClick = (id) => {
    navigate(`/books/${id}`);
  };

  return (
    <div className="container">
      <div className="inner-container">
        {books.map((book) => (
          <ul>
            <li
              onClick={() => handleBookClick(book.id, book.title)}
              key={book.id}
              className="book-display"
            >
              <img src={book.cover_image} alt={book.title} />
              <br />
              <h2>{book.title}</h2>
              <br />
              <p>
                By <span>{book.author}</span>
              </p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Bookcards;
