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
  // Personal Library
  const [myLibrary, setMyLibrary] = useState([]);
  const addToLibrary = (book) => {
    const {title, author, image, publisher, description} = book
    const newBook = new BookObj(title, author, image, publisher, description)
    setMyLibrary([...myLibrary, newBook])
  }
  const removeFromLibrary = (unwantedTitle) => {
    const newLibrary = myLibrary.filter(book => book.title!==unwantedTitle)
    setMyLibrary(newLibrary)
  }

  //UserName
  const [userName, setUserName] = useState('fellow bookworm');
  const writeNameOnNavBar = (userName) => setUserName(userName)

  return (
    <div>
      <Navbar userName={userName} />

      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/library' element={<Library myLibrary={myLibrary} addToLibrary={addToLibrary} removeFromLibrary={removeFromLibrary} />} />
        <Route path='/profile' element={<Profile currentName={userName} writeNameOnNavBar={writeNameOnNavBar} />} />
        <Route path='/search' element={<Search myLibrary={myLibrary} addToLibrary={addToLibrary}  removeFromLibrary={removeFromLibrary} />} />
        <Route path='/search/result' element={<p>Searching...</p>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
