import React, {useEffect, useState} from "react";
import Shelf from './Shelf';

function Search() {

  const [bookLists, setBookLists] = useState([]);
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

    return (
        <div>
            <p>Search for: _________ </p>
            <p>Or browse the titles below.</p>
            <Shelf bookLists={bookLists} />
        </div>
    )
 }

export default Search;