import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import BookDetail from './components/BookDetail';
import BookList from './components/BookList';
import Home from './components/Home';
import { BooksProvider } from './contexts/BooksProvider';

function App() {
  return (
    
    <BrowserRouter>

    <BooksProvider>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<BookList />}/>
          <Route path="/book" element={<BookDetail />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>

    </BooksProvider>
    </BrowserRouter>
  );
}

export default App;
