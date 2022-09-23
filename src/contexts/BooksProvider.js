import { useState } from "react"
import BookContext from "./BookContext";

export const BooksProvider = (props) => {

    //Since the GoogleBooks API only allows us to search, we have to provide the volumeID
    //the only way for us to generate a "Book feed" with the most recently rated books
    //is to make an API call for each book, changing the volumeID variable each time

    const volumeID = '_LettPDhwR0C';
    const [bookData, setBookData] = useState([]);
    const baseURL = 'https://www.googleapis.com/books/v1/volumes/'

    function getBooks() {
        return axios.get(baseURL + volumeID)
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