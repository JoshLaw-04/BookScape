import React, { useContext } from 'react';
import BookContext from '../contexts/BookContext';

let { bookData } = useContext(BookContext);

function BookList() {

  return (
    <BookContext.Consumer>


    </BookContext.Consumer>

  )
  
}


export default BookList;