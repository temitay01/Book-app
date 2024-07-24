import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../pages/Books";

function Bookcards() {
  const navigate = useNavigate();
  const { currentBooks, currentPage, numbers, setCurrentPage, firstIndex, lastIndex } = useContext(Context);

  const handleBookClick = (id) => {
    navigate(`/books/${id}`);
  };

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < numbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div>
      <div className="container">
        <div className="inner-container">
          {currentBooks.map((book) => (
            <ul key={book.id}>
              <li onClick={() => handleBookClick(book.id)} className="book-display">
                <img src={book.cover_image} alt={book.title} />
                <h2>{book.title}</h2>
                <p>By <span>{book.author}</span></p>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link" onClick={prePage}>prev</a>
        </li>
        {numbers.map((n, i) => (
          <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
            <a href="#" className="page-link" onClick={() => changeCPage(n)}>{n}</a>
          </li>
        ))}
        <li className="page-item">
          <a href="#" className="page-link" onClick={nextPage}>next</a>
        </li>
      </ul>
    </div>
  );
}

export default Bookcards;
