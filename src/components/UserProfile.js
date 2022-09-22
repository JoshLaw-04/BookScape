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


export default UserProfile;