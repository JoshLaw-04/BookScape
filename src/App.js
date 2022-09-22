import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import BookDetail from './components/BookDetail';
import BookList from './components/BookList';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

function App() {
  return (
    
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<BookList />}/>
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path='/about' element={<About />} />
          <Route path="/profile/:id" element={ <UserProfile /> } />
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
