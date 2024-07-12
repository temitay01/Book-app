function Searchbar({
  genre,
  handleClick,
  handleChange,
  handleSearch,
  Restore,
}) {
  return (
    <div className="searchbar-container">
         <div className="buttons">
      <button className="genre-buttons" onClick={Restore}>
        All
      </button>
      {genre.map((genre) => (
        <button
          className="genre-buttons"
          onClick={() => handleClick(genre)}
          key={genre}
        >
          {genre}
        </button>
        
      ))
      
      }</div>

      <div className="search-input"> 
        <input placeholder="Search..." typeof="text" id="search" onChange={handleChange}></input>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Searchbar;
