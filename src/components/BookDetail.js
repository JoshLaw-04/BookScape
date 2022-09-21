import React, { useState } from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function BookDetail() {

    

  return (
    <Container>
        <div style={{paddingTop: '15px'}}>
            <h2>Book Detail</h2><br/>
        </div>
        
        <Row>
            <Col xs={8} md={6} lg={4} xl={3}>
            <img 
                alt=""
                // src={}
                width="300"
                height="350"
                style={{ padding: "5px" }}
            />{" "}
            <p style={{paddingLeft: '5px', paddingTop: '5px'}}>ISBN</p>
            </Col>
            <Col xs={3} md={6} lg={4} xl={4}>
                <h2>Book Title</h2>
                <p>Book Author</p>
                <p>Publishing Company</p>
                <p>Publishing Date</p>
            </Col>
            <Col xs={12} md={12} lg={4} xl={5}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
        </Row>
        <Row style={{paddingTop: '25px', paddingBottom: '5px'}}>
            <Col>
                <h3> Reviews </h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={12} lg={12} xl={12}>
                <form>
                    <textarea placeholder="Write a Review" type="text" rows={4} cols={40} />
                    <br/>
                    {' '}<Button type='submit' style={{backgroundColor: 'red', color: 'white', marginBottom: '5px'}}>Submit</Button>
                </form>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={12} lg={12} xl={12}>
                <ListGroup className="align-self-start w-80">
                    <ListGroup.Item style={{ padding: '15px', margin: '25px', marginLeft: '3px', textAlign: 'left', paddingBottom: '2px', backgroundColor: '#98ffed' }}>
                        <Row style={{paddingBottom: '10px'}}>
                            <Col>
                                <div className="d-flex w-100 justify-content-start">
                                    <small>Star Rating</small> 
                                </div>
                            </Col>
                            <Col>
                                <div className="d-flex w-100 justify-content-end">
                                    <Link className='ml-auto me-2'  style={{color: '#000807'}}>Edit</Link>{' '}
                                    <Link style={{color: '#000807'}}>Delete</Link>{' '}   
                                </div>

                            </Col>
                        </Row>
                        <p className="mb-1" style={{paddingBottom: '5px'}}>Review</p>
                        <div className="d-flex w-100 justify-content-end" style={{paddingBottom: '13px'}}>
                            <Link className="nav-link" style={{color: 'white'}}>Username</Link> 
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </Container>
  )
  
}


export default BookDetail;