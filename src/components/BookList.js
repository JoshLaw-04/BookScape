import { useContext, useState } from "react";
import { Card, Col, Container, Row } from 'react-bootstrap';
import "./Home.css";
import BookContext from "../contexts/BookContext";
import { useNavigate, Link } from "react-router-dom";

function BookList() {

    let { setBook } = useContext(BookContext);

  return (
    <BookContext.Consumer>
    {
        ({searchResults}) => {
            
            return (
                <Container>
                <h1>Book Results</h1>
                <div id="CardsCol">
                        <Row>
                            {searchResults.map((book) => {
                                let bookPic = book.volumeInfo.imageLinks
                                let authors = book.volumeInfo.authors
                                if (bookPic !== undefined && authors !== undefined) {
                                    return (

                                        <Card id="CardBorder" style={{ width: '245px' }} key={book.id}>
                                            <Card.Img variant="top" src={bookPic.thumbnail} />
                                                <Card.Body>
                                                    <Card.Title>{book.volumeInfo.title}</Card.Title>

                                                    {/* the below maps the authors which is returned as an array */}
                                                    {authors.map((author) =>
                                                        {return (<Card.Text key={author}>{author}</Card.Text>)})
                                                    }
                                                    
                                                <Link to={`/book/${book.id}`} onClick={() => setBook(book)}>Book Details</Link>
                                                </Card.Body>
                                        </Card>
                                        )
                                } else {
                                    <p>No books found 😣</p>
                                }
                            })}
                        </Row>
                </div>
                </Container>
            )

        }



    }
    </BookContext.Consumer>
)}

export default BookList;