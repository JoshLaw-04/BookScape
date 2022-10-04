import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import BookDetail from './components/BookDetail';
import BookList from './components/BookList';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import { UserProvider } from './contexts/UserProvider';
import { BooksProvider } from './contexts/BooksProvider';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
      <BooksProvider>
        
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path='/booklist' element={<BookList />}/>
              <Route path="/register" element={ <SignUp /> } />
              <Route path="/login" element={ <SignIn /> } />
              <Route path="/book/:id" element={<BookDetail />} />
              <Route path='/about' element={<About />} />
              <Route path="/profile/:id" element={ <UserProfile /> } />
            </Route>
          </Routes>

      </BooksProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
