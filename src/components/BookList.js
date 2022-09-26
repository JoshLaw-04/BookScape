import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import "./Home.css";


function BookList() {

    return (
        <div id="CardsCol">
      
        <Container>
            <Row>

                <Col>
                    <Card id="CardBorder" style={{ width: '245px' }}>
                        <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                Author
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
    
                <Col>
                    <Card id="CardBorder" style={{ width: '245px' }}>
                        <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                Author
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card id="CardBorder" style={{ width: '245px' }}>
                        <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    Author
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
    
            </Row>
            <br></br>
            <Row>

                <Col>
                    <Card id="CardBorder" style={{ width: '245px' }}>
                        <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                Author
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
    
                <Col>
                    <Card id="CardBorder" style={{ width: '245px' }}>
                        <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                Author
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card id="CardBorder" style={{ width: '245px' }}>
                        <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                Author
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
    
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Card id="CardBorder" style={{ width: '245px' }}>
                        <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                Author
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
    
                <Col>
                    <Card id="CardBorder" style={{ width: '245px' }}>
                        <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                Author
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card id="CardBorder" style={{ width: '245px' }}>
                        <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                Author
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
    
            </Row>
            
        </Container>
  
        </div>
    )
  
}


export default BookList;