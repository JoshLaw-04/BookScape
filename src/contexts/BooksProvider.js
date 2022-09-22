import { useState } from "react"
import BookContext from "./BookContext";

export const BooksProvider = (props) => {

    //Since the GoogleBooks API only allows us to search, we have to provide it a query (the q= part of the URL)
    //in this case, I provided a static ISBN number
    //the only way for us to generate a "Book feed" with the most recently rated books
    //is to make an API call for each book, changing the ISBN variable each time

    const isbn = 9780547951973;
    const [bookData, setBookData] = useState([]);
    const apiKey = "AIzaSyD-hKdXQ0ECoeMJNOeSz_w9-58GSzY1iPs"; //this is my key provided by Google
    const baseURL = 'https://www.googleapis.com/books/v1/volumes?q='+isbn+'&key='+apiKey+'&maxResults=40'

    function getBooks() {
        return axios.get(baseURL)
        .then(res => setBookData(res.data.items))
        .catch(err=>console.log(err))
    };

    return (
        <BookContext.Provider value={{
            bookData,
            getBooks
        }}>
            {props.children}
        </BookContext.Provider>
    )

}