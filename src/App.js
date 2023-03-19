import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import Library from './Library';
import Profile from './Profile';
import Search from './Search';
import Footer from './Footer';
import { useState } from 'react';
import './App.css';

class BookObj {
  constructor(title, author, image, publisher,  description, isInLibrary) {
    this.title = title;
    this.author = author;
    this.image = image;
    this.publisher = publisher;
    this.description = description;
    this.isInLibrary = isInLibrary
  }
}

function App() {
  const [myLibrary, setMyLibrary] = useState([new BookObj('Lewis Carrol', 'Through the looking glass', '', 'Penguin', 'This is the best book ever')]);

  const addToLibrary = (book) => {
    const {title, author, image, publisher, description} = book
    const newBook = new BookObj(title, author, image, publisher, description)
    setMyLibrary([...myLibrary, newBook])
  }

  const removeFromLibrary = (unwantedTitle) => {
    const newLibrary = myLibrary.filter(book => book.title!==unwantedTitle)
    setMyLibrary(newLibrary)
  }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/library' element={<Library myLibrary={myLibrary} addToLibrary={addToLibrary} removeFromLibrary={removeFromLibrary} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<Search myLibrary={myLibrary} addToLibrary={addToLibrary}  removeFromLibrary={removeFromLibrary} />} />
        <Route path='/search/result' element={<p>Searching...</p>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
