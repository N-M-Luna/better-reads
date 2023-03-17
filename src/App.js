import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import Library from './Library';
import Profile from './Profile';
import Search from './Search';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/library' element={<Library />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search/result' element={<p>Searching...</p>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
