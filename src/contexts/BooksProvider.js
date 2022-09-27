import { useState } from "react"
import BookContext from "./BookContext";
import axios from "axios";

export const BooksProvider = (props) => {

    //Since the GoogleBooks API only allows us to search, we have to provide the volumeID
    //the only way for us to generate a "Book feed" with the most recently rated books
    //is to make an API call for each book, changing the volumeID variable each time

    const baseURL = 'https://www.googleapis.com/books/v1/volumes/'

    function getBook(volumeID) {
        return axios.get(baseURL + volumeID).then(response => {
            return new Promise(resolve => resolve(response.data));
        })
        .catch(err=>console.log(err));
    };

    return (
        <BookContext.Provider value={{
            getBook
        }}>
            {props.children}
        </BookContext.Provider>
    )

}