import BookContext from "./BookContext";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const BooksProvider = (props) => {

    const [ search, setSearch ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);

    const googleVolumeURL = 'https://www.googleapis.com/books/v1/volumes/'
    const googleSearchURL = 'https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDgI3uNznl3nuYZEutbvQBfi-HTTvAzIy0'+'&maxResults=40';
    const localBookURL = 'http://localhost:3000/api/books/';
    const navigate = useNavigate();

    let [book, setBook] = useState(null);

    function searchHandler(search) {
        setSearch(search);
        console.log(search);
    }
    
    function bookSearchReturn() {
        axios.get(googleSearchURL)
        .then(res=>setSearchResults(res.data.items))
        .catch(err=>console.log(err))
        navigate('/booklist')
    }

    function getLocalBook(bookId) {
        return axios.get(localBookURL + bookId).then(response => {
            return new Promise(resolve => resolve(response.data));
        })
        .catch(err=>console.log(err));
    };

    function setLocalBook(book) {
        // let myHeaders = {
        //     Authorization: `Bearer ${localStorage.getItem('myToken')}`
        // };

        //ADD HEADERS INTO POST REQUEST for final run thru **************
        return axios.post(localBookURL, book)
            .then(response => {
                localStorage.setItem('localBookId', response.data.bookId)
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    return (
        <BookContext.Provider value={{
            getLocalBook,
            setLocalBook,
            search,
            searchHandler,
            searchResults,
            bookSearchReturn,
            book,
            setBook
        }}>
            {props.children}
        </BookContext.Provider>
    )

}