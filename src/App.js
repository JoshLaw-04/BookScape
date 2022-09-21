import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import BookDetail from './components/BookDetail';
import BookList from './components/BookList';
import Home from './components/Home';

function App() {
  return (
    
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<BookList />}/>
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path='/about' element={<About />} />
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
