import BookContext from "./BookContext";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const BooksProvider = (props) => {

    const [ search, setSearch ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);
    const volumeURL = 'https://www.googleapis.com/books/v1/volumes/'
    const searchURL = 'https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDgI3uNznl3nuYZEutbvQBfi-HTTvAzIy0'+'&maxResults=40';
    const navigate = useNavigate();

    function searchHandler(search) {
        setSearch(search);
        console.log(search);
        // const newBook = Object.values(search).join(' ');
        // setSearchResults(newBook);
        // console.log(`newBook: ${newBook}`);
            
        /* return axios.get(baseURL + newBook)
        .then(res => console.log(res.data.items))
        .catch(error => console.log(error) */
    }
    
    function bookSearchReturn() {
        axios.get(searchURL)
        .then(res=>setSearchResults(res.data.items))
        .catch(err=>console.log(err))
        navigate('/booklist')
    }

    function getBook(volumeID) {
        return axios.get(volumeURL + volumeID).then(response => {
            return new Promise(resolve => resolve(response.data));
        })
        .catch(err=>console.log(err));
    };

    return (
        <BookContext.Provider value={{
            getBook,
            search,
            searchHandler,
            searchResults,
            bookSearchReturn
        }}>
            {props.children}
        </BookContext.Provider>
    )

}