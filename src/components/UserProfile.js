import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function UserProfile() {



    return (
        <Container>
            <Row style={{paddingTop: '15px'}}>
                <Col xs={3} md={6} lg={4} xl={4}>
                    <h1>Username</h1>
                    <p style={{paddingLeft: '5px'}}>Full Name</p>
                    <p style={{paddingLeft: '5px'}}>Email</p>
                </Col>
            </Row>
            <Row style={{paddingTop: '50px'}}>
                <Col>
                    <h4> Reviews by Username</h4>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} lg={12} xl={12}>
                    <ListGroup className="align-self-start w-80">
                        <ListGroup.Item style={{ padding: '15px', margin: '25px', marginLeft: '3px', textAlign: 'left', paddingBottom: '2px', backgroundColor: '#98ffed' }}>
                            <Row>
                                <Col xs={3} sm={3} md={2} lg={1} xl={1}>
                                    <img 
                                        alt=""
                                        // src={}
                                        width="100"
                                        height="115"
                                        style={{ padding: "5px" }}
                                    />{" "}
                                </Col>
                                <Col xs={5} sm={5} md={8} lg={9} xl={9}>
                                    <div className="d-flex w-100 justify-content-start" style={{paddingBottom: '13px'}}>
                                        <Link className='ml-auto me-2'>Book Title</Link>
                                        <small>Star Rating</small> 
                                    </div>
                                    <div>
                                        <p className="mb-1" style={{paddingBottom: '5px'}}>Review</p>
                                    </div>
                                </Col>
                                <Col xs={4} sm={4} md={2} lg={2} xl={2}>
                                    <div className="d-flex w-100 justify-content-end">
                                        <Link className='ml-auto me-2'  style={{color: '#000807'}}>Edit</Link>{' '}
                                        <Link style={{color: '#000807'}}>Delete</Link>{' '}   
                                    </div>

                                </Col>  
                            </Row>
                            <Row>
                                <Col className="d-flex w-100 justify-content-end" style={{paddingBottom: '5px'}}>    
                                    <Link className="nav-link" style={{color: 'white'}}>Username</Link> 
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
  
}


export default UserProfile;