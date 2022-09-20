import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Home from './components/Home';

function App() {
  return (
    
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<BookList />}/>
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
