import { useContext, useEffect, useState } from "react";
import { Card, Container, Row, Stack } from 'react-bootstrap';
import "./Home.css";
import { Link, Outlet, useParams } from "react-router-dom";
import BookContext from "../contexts/BookContext";

function FeaturedBooks() {

    let { localBooks, getLocalBook } = useContext(BookContext)

    function localBookList() {

        return (
            <Container>
                <h1 style={{paddingTop: '25px', paddingLeft: '7px', paddingBottom: '10px'}}>Book List</h1>
                <div id="CardsCol">
                    <Row>
                    {localBooks.map((b) => (
                        <Card key={b.bookId} id="CardBorder" style={{width: '18rem', padding: '15px', margin: '20px', textAlign: 'left', paddingBottom: '2px' }}>
                            <Card.Img variant="top" src={b.imageLinks.thumbnail} className="card-img-top" height='350'/>
                            <Card.Body>
                                <Card.Title>{b.title}</Card.Title>
                                {b.authors.map((author) => <Card.Text key={author}>{author}</Card.Text>)}
                                <Link to={`/book/${b.bookId}`}>Book Detail</Link>
                            </Card.Body>
                        </Card>
                    ))}
                    </Row>
                </div>
            </Container>
        )
          
    }
    
            
    return (

       
        <>
            <Stack direction="vertical" gap={1}>
                <BookContext.Consumer>
                    {({localBooks}) =>
                    localBookList(localBooks)
                    }
                </BookContext.Consumer>
                <Outlet />
            </Stack>
        </>
        


        
    )

}     

export default FeaturedBooks;