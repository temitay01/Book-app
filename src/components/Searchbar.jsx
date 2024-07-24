import React, { useContext } from "react";
import { Context } from "../pages/Books";

function Searchbar() {
  const { setCurrentBooks, duplicate, handleChange, handleSearch } = useContext(Context);

  const handleRestore = () => {
    setCurrentBooks(duplicate);
  };

  const genres = [...new Set(duplicate.flatMap((book) => book.genre))];

  const handleClick = (key) => {
    const filtered = duplicate.filter((book) => book.genre.includes(key));
    setCurrentBooks(filtered);
  };

  return (
    <div className="searchbar-container">
      <div className="buttons-div">
        <button className="buttons" onClick={handleRestore}>All</button>
        {genres.map((genre) => (
          <button className="buttons" onClick={() => handleClick(genre)} key={genre}>{genre}</button>
        ))}
      </div>
      <div className="search-input">
        <input placeholder="Search..." type="text" id="search" onChange={handleChange} />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Searchbar;
