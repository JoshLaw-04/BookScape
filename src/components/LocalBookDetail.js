import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button, ListGroup, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BookContext from '../contexts/BookContext';
import ReviewContext from '../contexts/ReviewsContext';


const LocalBookDetail = () =>  {

    let {id} = useParams();
    let navigate = useNavigate();

    let { getLocalBook } = useContext(BookContext);
    // let { deleteReview } = useContext(ReviewContext);
    
    let [getBook, setGetBook] = useState("")

    useEffect(() => {
        async function fetch() {
          await getLocalBook(id)
            .then((getBook) => {
                setGetBook(getBook)
            }).catch(error => {
                console.log(error);
                navigate('/login')
            })
          }
          fetch()
    },  [])

    


    return (

        <ReviewContext.Consumer>
            {
                ({reviews}) => {
                    return <>
                    <Container>
                        <div style={{paddingTop: '15px'}}>
                            <h2>Book Detail</h2><br/>
                        </div>
                        <Row>
                            <Col xs={12} md={6} lg={4} xl={3} style={{paddingBottom: '25px'}}>
                                <img 
                                    alt=""
                                    // src={getBook.imageLinks.thumbnail}
                                    width="300"
                                    height="350"
                                    style={{ padding: "5px" }}
                                />{" "}
                            </Col>
                            <Col xs={12} md={6} lg={4} xl={4} style={{paddingBottom: '25px'}}>
                                <h2>{getBook.title}</h2>
                                <p>{getBook.authors}</p>
                                <p>{getBook.publisher}</p>
                                <p>{getBook.publishedDate}</p>
                            </Col>
                            <Col xs={12} md={12} lg={4} xl={5}>
                                <p>{getBook.description}</p>
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
                                    <textarea placeholder="Write a Review" type="text" rows={4} cols={40} name="comment" />
                                    <br/>
                                    {' '}<button type='submit' style={{backgroundColor: 'red', color: 'white', marginBottom: '5px'}}>Submit</button>
                                </form>
                            </Col>
                        </Row>
                        {reviews.map((r) => {
                            return (
                                <>
                                    {getBook.bookId === r.Book.bookId &&
                                    <>
                                    <Row>
                                        <Col xs={12} md={12} lg={12} xl={12}>
                                            <ListGroup className="align-self-start w-80" key={r.bookId}>
                                                <ListGroup.Item style={{ padding: '15px', margin: '25px', marginLeft: '3px', textAlign: 'left', paddingBottom: '2px', backgroundColor: '#98ffed' }}>
                                                    <Row style={{paddingBottom: '10px'}}>
                                                        <Col>
                                                            <div className="d-flex w-100 justify-content-start">
                                                                <small>{r.starRating}</small>
                                                            </div> 
                                                        </Col>
                                                        <Col>
                                                            <div className="d-flex w-100 justify-content-end">
                                                                <Link className='ml-auto me-2'  style={{color: '#000807'}}>Edit</Link>{' '}
                                                                <Link style={{color: '#000807'}}>Delete</Link>{' '}   
                                                            </div>

                                                        </Col>
                                                    </Row>
                                                    <p className="mb-1" style={{paddingBottom: '5px'}}>{r.comment}</p>
                                                    <div className="d-flex w-100 justify-content-end" style={{paddingBottom: '13px'}}>
                                                        <Link to={`/profile/${r.User.userId}`} className="nav-link" style={{color: 'white'}}>{r.User.username}</Link> 
                                                    </div>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                    </>
                                    }
                                    
                                </>
                            )
                            
                        })}

                    </Container>
                    </>
                }
            }
               
        </ReviewContext.Consumer>
    )

        
            
                            
                    
                

    
  
  
}


export default LocalBookDetail;