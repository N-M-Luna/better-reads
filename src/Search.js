import React, {useEffect, useState} from "react";
import Book from './Book';

function Search({myLibrary, addToLibrary, removeFromLibrary}) {
  // Books on the shelf
  const [bookLists, setBookLists] = useState([]);

  // GET some books
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists'
  const API_KEY = 'TA4PIstLZ7yHA5ZeAHS3CoOOSgqY5FYd'
  const listUrl = `${BASE_URL}/overview.json?api-key=${API_KEY}`

  useEffect(() => {
    fetch(listUrl)
      .then(response => response.json())
      .then(
        data => {
          setBookLists(data.results.lists)
          setLoading(false);
        },
        () => {
          setLoading(false);
          setError(true);
          console.log(`Error loading list of books.`)
        })
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Something went wrong...</p>
  }

  // Sift through the data to fill the shelf
  const genreHeaders = []
  const topFiveBooks = []
  let isInLibrary

  bookLists.forEach((list, i) => {
    // Each list has a genre (str) and...
    genreHeaders.push(<h2 key={i}>{list.list_name}</h2>)

    // and the top five books (arrar of objects)
    list.books.forEach((book, index) => {
      isInLibrary = false
      myLibrary.forEach(myBook => {
        if (book.title === myBook.title) {
          isInLibrary = true;
        }
      })
      topFiveBooks.push(<Book
        key={5*i+index}
        title={book.title}
        author={book.author}
        image={book.book_image}
        publisher={book.publisher}
        description={book.description}
        addToLibrary={addToLibrary}
        removeFromLibrary={removeFromLibrary}
        isInLibrary={isInLibrary}
      />)
    })
  });

    return (
        <div>
            <p>Search best-selling books by author: _________ or by date: __________ </p>
            <span className="dingbat fa-solid fa-book-open-reader"></span>

            <p>Or browse the titles below.</p>
            {genreHeaders.map((header, i) => (<div>
                {header}
                <div className='shelf-row'>{topFiveBooks.slice(5 * i, 5 * (i + 1))}</div>
            </div>))}
        </div>
    )
 }
export default Search;