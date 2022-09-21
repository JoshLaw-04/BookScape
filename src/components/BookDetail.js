import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


function BookDetail() {

  return (
    <Container>
        <h2>Book Detail</h2><br/>
        <Row>
            <Col>
            <img 
                alt=""
                // src={}
                width="300"
                height="350"
                style={{ padding: "5px" }}
            />{" "}
            </Col>
            <Col>
                <h2>Book Title</h2>
                <p>Book Author</p>
                <p>Publishing Company</p>
                <p>Publishing Date</p>
            </Col>
            <Col>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3> Reviews </h3>
            </Col>
        </Row>
        <Row>
            <Col>
                <form>
                    <textarea placeholder="Write a Review" type="text" rows={4} cols={40} />
                    <br></br><br></br>
                    {' '}<Button type='submit' style={{backgroundColor: 'red', color: 'white', marginBottom: '5px'}}>Submit</Button>
                </form>
            </Col>
        </Row>
        <Row>
            <Col>
                <ListGroup className="align-self-start w-75" key={p.postId}>
                    <ListGroup.Item style={{ padding: '15px', margin: '25px', marginLeft: '3px', textAlign: 'left', paddingBottom: '2px', backgroundColor: '#F5F1E3' }}>
                        <div className="d-flex w-100 justify-content-end">
                        <small>{p.updatedAt}</small>
                        </div>
                        <p class="mb-1" style={{paddingLeft: '16px'}}>{p.post}</p>
                        <div className="d-flex w-100 justify-content-start">
                        <Link to={`/profile/${p.User.userId}`} className="nav-link">{p.User.username}</Link>       
                        </div>
                        <div className="d-flex w-100 justify-content-end">
                        {users && users.userId === p.userId && <Link to={`/edit/${p.postId}`} className="btn btn-primary text me-2" style={{backgroundColor: '#A2A3BB', color: '#000807', marginBottom: '5px'}}>Edit</Link>}{' '}
                        {users && users.userId === p.userId && <Button style={{backgroundColor: '#000807', color: '#A2A3BB', marginBottom: '5px'}} onClick={handleDelete.bind(this, p.postId)}>Delete Coffee</Button>}{' '}
                        </div>
                    </ListGroup.Item>
                    </ListGroup>
            </Col>
        </Row>
    </Container>
  )
  
}


export default BookDetail;