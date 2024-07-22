import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { SecondContext } from "../components/App";


function BookDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { handleSave } = useContext(SecondContext);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(
          `https://freetestapi.com/api/v1/books/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch book details.");
        }
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
        alert("Error fetching book details");
      }
    };

    if (id) {
      fetchBookDetails();
    }
  }, [id]);

  return (
    <div className="book-detail-container">
      <div className="book-detail" key={details.id}>
        <div className="book-detail-image">
          <img src={details.cover_image} alt={details.title} />
        </div>
        <div className="book-detail-info">
          <h2>{details.title}</h2>
          <p>{details.description}</p>
          <p>
            <strong>Author:</strong> {details.author}
          </p>
          <p>
            <strong>Publication Year:</strong> {details.publication_year}
          </p>
          <button className="save-button" onClick={() => handleSave(details)}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHklEQVR4nO2WTU6EQBCFv0u4GGWM55DxACYj8RoqMmdxSdSNy9n7cxMwnkJwJwRDUiaEhKa6sQ0LXvI2pNNf6lFd3bBohjoGboE3IAe+xLl8i4H1XwKPgBSogGbENbAHTqZCL4FSAey7ACJX6E4qsIV2q09cKq0nQLtwdeWBY7ym2A814EflhqfARrn2XnNkNN3b+leatZUkOajEIkIbcAPcmMCvHsHPJvCHR3BuAheGRtJqqOEKF3BoAT5zAb97jDqbZXPFHsFXJvDa0wD5HhsgrR6Um4WGRuo7RXnxD3W3iz+BFUqdW0Q+di1eaKHduT31IdC+0ZwUOcbexrtlog6AO+lMTZVPNv9Uo0CutheZQqU4k+FwrTkyi/hv/QAGMJYNzRi9AwAAAABJRU5ErkJggg==" />
            <span>Add to shelf</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
