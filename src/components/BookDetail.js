import React from "react";

function BookDetail({ Details }) {
  console.log(Details);

  return (
    <div className="book-detail-container">
      {Details.map((Detail) => (
        <div className="book-detail" key={Detail.id}>
          <div className="book-detail-image">
            <img src={Detail.cover_image} alt={Detail.title} />
          </div>
          <div className="book-detail-info">
            <h2>{Detail.title}</h2>
            <p>{Detail.description}</p>
            <p><strong>Author:</strong> {Detail.author}</p>
            <p><strong>Publication Year:</strong> {Detail.publication_year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookDetail;
