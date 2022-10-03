import BookContext from "./BookContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const BooksProvider = (props) => {

    const [ book, setBook ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);
    const volumeURL = 'https://www.googleapis.com/books/v1/volumes/'
    const searchURL = 'https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDgI3uNznl3nuYZEutbvQBfi-HTTvAzIy0'+'&maxResults=40';
    const navigate = useNavigate();


    //this is me trying a useEffect to prevent the page load
    /* useEffect(() => {
        if (searchResults !== []) {

        }
        axios.get(baseURL)
        .then((res) => {
            setBook(res.data)
        }).catch(err => console.log(err))
    }, [searchResults]) */

    function searchHandler(search) {
        
        setSearch(search);
        console.log(search);
            
        /* return axios.get(baseURL + newBook)
        .then(res => console.log(res.data.items))
        .catch(error => console.log(error) */
    }
    
    // this is the trial to preventDefault()
    
    /* function handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
    } */

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
            setSearch,
            searchHandler,
            searchResults,
            bookSearchReturn
        }}>
            {props.children}
        </BookContext.Provider>
    )

}