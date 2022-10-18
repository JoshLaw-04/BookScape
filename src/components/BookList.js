import { useContext } from "react";
import { Card, Container, Row } from 'react-bootstrap';
import "./Home.css";
import BookContext from "../contexts/BookContext";
import { Link } from "react-router-dom";

function BookList() {

    let { setBook } = useContext(BookContext);

  return (
    <BookContext.Consumer>
    {
        ({searchResults}) => {
            
            return (
                <Container style={{paddingBottom: '75px'}}>
                <h1 style={{paddingTop: '25px', paddingLeft: '7px', paddingBottom: '10px'}}>Book Results</h1>
                <div id="CardsCol">
                        <Row>
                            {searchResults.map((book) => {
                                let bookPic = book.volumeInfo.imageLinks
                                let authors = book.volumeInfo.authors
                                let title = book.volumeInfo.title
                                let description = book.volumeInfo.description
                                
                                if (bookPic !== undefined 
                                    && authors !== undefined 
                                    && description !== undefined
                                    && title !== undefined) {
                                    
                                    return (

                                        <Card id="CardBorder" style={{width: '18rem', padding: '15px', margin: '20px', textAlign: 'left', paddingBottom: '2px' }} key={book.id}>
                                            <Card.Img variant="top" src={bookPic.thumbnail} className="card-img-top" height='350'/>
                                                <Card.Body>
                                                    <Card.Title>{book.volumeInfo.title}</Card.Title>

                                                    {/* the below maps the authors which is returned as an array */}
                                                    {authors.map((author) =>
                                                        {return (<Card.Text key={author}>{author}</Card.Text>)})
                                                    }
                                                    

                                                <Link to={'/book/detail'} onClick={() => setBook(book)}>Book Details</Link>

                                                </Card.Body>
                                        </Card>
                                        )
                                } else {
                                    <p>No books found 😣</p>
                                }
                            }
                            )}
                        </Row>
                </div>
                </Container>
            )

        }



    }
    </BookContext.Consumer>
)}

export default BookList;