import React, { useContext } from "react";
import { Context } from "../pages/Books";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSearch } from "react-icons/fa";
function Searchbar() {
  const { setCurrentBooks, duplicate, handleChange, handleSearch } =
    useContext(Context);

  const handleRestore = () => {
    setCurrentBooks(duplicate);
  };

  const genres = [...new Set(duplicate.flatMap((book) => book.genre))];

  const handleClick = (key) => {
    const filtered = duplicate.filter((book) => book.genre.includes(key));
    setCurrentBooks(filtered);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive:[
      {
        breakpoint:600,
        settings:{   
        slidesToShow:3,
        infinite:false,
        speed:500,
        slidesToScroll:1,
        dots:false
      }}
    ]
  };
  return (
    <div className="searchbar-container">
      <div className="buttons-div">
        <Slider {...settings}>
          <button className="buttons" onClick={handleRestore}>
            All
          </button>
          {genres.map((genre) => (
            <button
              className="buttons"
              onClick={() => handleClick(genre)}
              key={genre}
            >
              {genre}
            </button>
          ))}
        </Slider>
      </div>
      <div className="search-input">
        <input
          placeholder="Search..."
          type="text"
          id="search"
          onChange={handleChange}
        />
        <button className="search-button" onClick={handleSearch}>
          <FaSearch></FaSearch>
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
