import Book from "./Book"
import { Link } from "react-router-dom"

 function Library({myLibrary, addToLibrary, removeFromLibrary}) {
    if (myLibrary.length>0) {
    const myBooks = []
    myLibrary.forEach(book => {
        myBooks.push(<Book 
            key={book.title}
            title={book.title} 
            author={book.author} 
            image={book.image} 
            publisher={book.publisher} 
            description={book.description}
            addToLibrary={addToLibrary}
            removeFromLibrary={removeFromLibrary}
            isInLibrary={true}
        />)
    })

    return (
        <div className="shelf">
            <h2>Welcome to your library.</h2>
            <div className='shelf-row'>{myBooks}</div>
        </div>
    )
    } else {
        return (
            <div>
                <p>Your library is empty.</p>
                <Link to={'/search'}><button className='banner-button'>Look for new books</button></Link>
            </div>
        )
    }
 }

 export default Library;