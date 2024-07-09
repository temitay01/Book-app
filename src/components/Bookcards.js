function Bookcards({books}){
    return(
<div className="container">
    <div className="inner-container">
        {books.map((book)=>(
        
                <div key={book.id} className="book-display">
                    <img src={book.cover_image}/><br></br>
                    <h2>{book.title}</h2><br></br>
                   <p>By <span>{book.author}</span></p> 
                </div>
    

        ))}
    </div>

</div>
    )
}
export default Bookcards
