import { useContext } from "react";
import { Context } from "../pages/Books";

function Searchbar() {
  const { setBooks, duplicate } = useContext(Context);
  const { handleChange, handleSearch } = useContext(Context);

  const handleRestore = () => {
    setBooks(duplicate);
  };

  const genre = [...new Set(duplicate.flatMap((book) => book.genre))];

  const handleClick = (key) => {
    const filtered = duplicate.filter((book) => book.genre.includes(key));
    setBooks(filtered);
  };

  return (
    <div className="searchbar-container">
      <div className="buttons-div">
        <button className="buttons" onClick={handleRestore}>
          All
        </button>
        {genre.map((genre) => (
          <button
            className="buttons"
            onClick={() => handleClick(genre)}
            key={genre}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="search-input">
        <input
          placeholder="Search..."
          typeof="text"
          id="search"
          onChange={handleChange}
        ></input>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
