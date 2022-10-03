import BookContext from "./BookContext";
import axios from "axios";
import { useEffect, useState } from "react";

export const BooksProvider = (props) => {

    //Since the GoogleBooks API only allows us to search, we have to provide the volumeID
    //the only way for us to generate a "Book feed" with the most recently rated books
    //is to make an API call for each book, changing the volumeID variable each time
    const [ book, setBook ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);
    const baseURL = 'https://www.googleapis.com/books/v1/volumes/'


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
        const newBook = Object.values(search).join(' ');
        setSearchResults(newBook);
        console.log(`newBook: ${newBook}`);
           
            
        /* return axios.get(baseURL + newBook)
        .then(res => console.log(res.data.items))
        .catch(error => console.log(error) */
    }
    
    // this is the trial to preventDefault()
    
    /* function handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
    } */

    function getBook(volumeID) {
        return axios.get(baseURL + volumeID).then(response => {
            return new Promise(resolve => resolve(response.data));
        })
        .catch(err=>console.log(err));
    };

    return (
        <BookContext.Provider value={{
            getBook,
            search,
            setSearch,
            searchHandler
        }}>
            {props.children}
        </BookContext.Provider>
    )

}