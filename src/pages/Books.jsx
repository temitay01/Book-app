import React, { useState, useEffect, createContext } from "react";

import Searchbar from "../components/Searchbar";
import Bookcards from "../components/Bookcards";
export const Context = React.createContext();

function Home({ handleClick }) {
  const [books, setBooks] = useState([]);
  const [duplicate, setDuplicate] = useState([]);
  const [searchedItem, setSearchedItem] = useState("");

  const handleChange = (e) => {
    setSearchedItem(e.target.value);
  };

  const handleSearch = () => {
    const searchedValue = searchedItem.replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );
    const item = duplicate.find((book) => book.title === searchedValue);
    if (item) {
      setBooks([item]);
    } else {
      alert("Book not found");
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/books");
        if (!response.ok) {
          throw new Error("Failed to fetch books.");
        }
        const data = await response.json();
        setBooks(data);
        setDuplicate(data);
      } catch (error) {
        console.error("Error fetching books:", error);
        alert("Error fetching books");
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <Context.Provider
        value={{
          books,
          setBooks,
          duplicate,
          handleClick,
          handleChange,
          handleSearch,
          books,
        }}
      >
        <Searchbar />
        <Bookcards />
      </Context.Provider>
    </div>
  );
}
export default Home;
