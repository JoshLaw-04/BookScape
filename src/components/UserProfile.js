import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReviewContext from '../contexts/ReviewsContext';
import UserContext from '../contexts/UserContext';



function UserProfile() {

    let {id} = useParams();
    let navigate = useNavigate();

    let { getUserProfile } = useContext(UserContext);
    let { deleteReview } = useContext(ReviewContext);
    
    let [getUser, setGetUser] = useState("")
    

    useEffect(() => {
        async function fetch() {
          await getUserProfile(id)
            .then((getUser) => {
                setGetUser(getUser)
            }).catch(error => {
                console.log(error);
                navigate('/login')
            })
          }
          fetch()
    },  [])

    function handleDelete(id) {
        deleteReview(id).then(() => {
            navigate(`/profile/${id}`)
        }).catch(error => {
            console.log(error);
            navigate('/login');
        });
    }


    return (
        <ReviewContext.Consumer>
            {
                ({reviews}) => {
                    return <>
                    <Container>
            <Row style={{paddingTop: '25px'}}>
                <Col xs={3} md={6} lg={4} xl={4}>
                    <h1>{getUser.username}</h1>
                    <p style={{paddingLeft: '5px'}}>{getUser.firstName}{' '}{getUser.lastName}</p>
                    <p style={{paddingLeft: '5px'}}>{getUser.email}</p>
                </Col>
            </Row>
            <Row style={{paddingTop: '50px'}}>
                <Col>
                    <h4> Reviews by {getUser.username}</h4>
                </Col>
            </Row>
            {reviews.map((r) => {
                return (
                    <>
                        {getUser.userId === r.userId && 
                        <>
                        <Row>
                            <Col xs={12} md={12} lg={12} xl={12}>
                                <ListGroup className="align-self-start w-80" key={r.reviewId}>
                                    <ListGroup.Item style={{ padding: '15px', margin: '25px', marginLeft: '3px', textAlign: 'left', paddingBottom: '2px', backgroundColor: '#98ffed' }}>
                                        <Row>
                                            <Col xs={3} sm={3} md={2} lg={1} xl={1}>
                                                <img 
                                                    alt=""
                                                    // src={r.Book.img}
                                                    width="100"
                                                    height="115"
                                                    style={{ padding: "5px" }}
                                                />{" "}
                                            </Col>
                                            <Col xs={5} sm={5} md={8} lg={9} xl={9}>
                                                <div className="d-flex w-100 justify-content-start" style={{paddingBottom: '13px'}}>
                                                    {/* <Link className='ml-auto me-2'>{r.Book.title}</Link> */}
                                                    <small>{r.starRating}</small> 
                                                </div>
                                                <div>
                                                    <p className="mb-1" style={{paddingBottom: '5px'}}>{r.comment}</p>
                                                </div>
                                            </Col>
                                            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
                                                <div className="d-flex w-100 justify-content-end">
                                                    <Link to={`/edit/${r.reviewId}`} className='ml-auto me-2'  style={{color: '#000807'}}>Edit</Link>{' '}
                                                    <Link style={{color: '#000807'}} onClick={handleDelete.bind(this, r.reviewId)}>Delete</Link>{' '}   
                                                </div>

                                            </Col>  
                                        </Row>
                                        <Row>
                                            <Col className="d-flex w-100 justify-content-end" style={{paddingBottom: '5px'}}>    
                                                <Link to={`/profile/${r.User.userId}`} className="nav-link" style={{color: 'white'}}>{r.User.username}</Link> 
                                            </Col>
                                        </Row>
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


export default UserProfile;