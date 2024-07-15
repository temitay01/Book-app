import Searchbar from "./Searchbar";
import Bookcards from "./Bookcards";

function Home ({ genre,
    handleClick,
    handleChange,
    handleSearch,
    Restore, 
    books,
    handleDetails
}){
return(
    <div>
    <Searchbar  genre={genre}
        handleClick={handleClick}
        handleChange={handleChange}
        handleSearch ={handleSearch}
        Restore = {Restore}/>
    <Bookcards books={books} handleDetails={handleDetails}/></div>
)
} 
 export default Home
