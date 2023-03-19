import Book from "./Book"

 function Library({myLibrary, addToLibrary, removeFromLibrary}) {
    const myBooks = []
    myLibrary.forEach(book => {
        myBooks.push(<Book 
            key={book.title}
            title={book.title} 
            author={book.author} 
            image={book.book_image} 
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
 }

 export default Library;