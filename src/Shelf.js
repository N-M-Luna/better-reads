import Book from './Book';

function Shelf(bookLists) {
    const genreHeaders = []
    const topFiveBooks = []

    bookLists.bookLists.forEach(list => {
        // Each list goes into a shelf row. Each list has a genre (str) and...
        genreHeaders.push(<h2 key={list.list_name}>{list.list_name}</h2>)

        // and the top five books (arrar of objects)
        list.books.forEach(book => {
            topFiveBooks.push({
                title: book.title,
                author: book.author,
                image: book.book_image,
                publisher: book.publisher,
                description: book.description
            })
        })
    });

    return (
        <div className="shelf">
            {genreHeaders.map((header, i) => (<div className='shelf-row'>
                {header}
                {topFiveBooks.slice(5*i,5*(i+1)).map(book => (<Book key={book.title} title={book.title} author={book.author} image={book.image} publisher={book.publisher} />))}
            </div>))}
        </div>
    )
}

export default Shelf;