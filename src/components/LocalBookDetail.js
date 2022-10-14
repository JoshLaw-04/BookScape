import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BookContext from '../contexts/BookContext';
import ReviewContext from '../contexts/ReviewsContext';
import { FaStar } from 'react-icons/fa';


const LocalBookDetail = () =>  {

    // let {id} = useParams();
    let params = useParams();
    let navigate = useNavigate();

    let { getLocalBook } = useContext(BookContext);
    let { deleteReview, addReview } = useContext(ReviewContext);
    
    let [getBook, setGetBook] = useState("")

    const [ rating, setRating ] = useState(null);
    const [ hover, setHover ] = useState(null);

    
    let [newReview, setNewReview] = useState({
        comment: "",
        starRating: rating,
        userId: 1,
        bookId: parseInt(params.id)
    });

    useEffect(() => {
        async function fetch() {
          await getLocalBook(params.id)
            .then((getBook) => {
                setGetBook(getBook)
            }).catch(error => {
                console.log(error);
                navigate('/login')
            })
          }
          fetch()
    },  [])

    function handleChange(event) {
        setNewReview((prevValue) => {
          return {...prevValue, [event.target.name]: event.target.value}
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        addReview(newReview).then(() => {
          navigate(`/book/${getBook.bookId}`);
        }).catch(error => {
          console.log(error);
          navigate('/login');
        });
    }


    function handleDelete(id) {
        deleteReview(id).then(() => {
            navigate(`/book/${getBook.bookId}`)
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
                    <Container style={{paddingBottom: '75px'}}>
                        <div style={{paddingTop: '15px'}}>
                            <h2>Book Detail</h2><br/>
                        </div>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={4} xl={3} style={{paddingBottom: '25px'}}>
                            
                                <img 
                                    alt=""
                                    src={getBook.imageLinks && getBook.imageLinks.thumbnail}
                                    width="275"
                                    height="325"
                                    style={{ padding: "5px" }}
                                />{" "}
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={4} xl={4} style={{paddingBottom: '25px'}}>
                                {console.log(getBook)}
                                <h2>{getBook.title}</h2>
                                {getBook.authors && getBook.authors.map((author) => <p key={author}>{author}</p>)}
                                <p>{getBook.publisher}</p>
                                <p>{getBook.publishedDate}</p>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4} xl={5}>
                                <p>{getBook.description}</p>
                            </Col>
                        </Row>
                        <Row style={{paddingTop: '25px', paddingBottom: '5px'}}>
                            <Col>
                                <h3> Reviews </h3>
                                <div className="d-flex w-100 justify-content-start">
                                    {[...Array(5)].map((star, i) => {
                                        const ratingValue = i + 1;
                                        return (
                                            <label key={ratingValue}>
                                                <input
                                                    className='starRadio'
                                                    type="radio"
                                                    name="rating"
                                                    value={ ratingValue }
                                                    onClick={ () => setRating(ratingValue) }
                                                />
                                                <FaStar
                                                    className='star'
                                                    color={ ratingValue <= (hover || rating) ? '#ffc107' : '#A9A9A9' }
                                                    size={25}
                                                    onMouseEnter={ () => setHover(ratingValue) }
                                                    onMouseLeave={ () => setNewReview({...newReview, starRating: ratingValue}) }
                                                />
                                            </label>
                                        );
                                    })}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} lg={12} xl={12}>
                                <form onSubmit={handleSubmit}>
                                    <textarea style={{marginTop: '5px'}} placeholder="Write a Review" type="text" rows={4} cols={40} name="comment" value={newReview.comment} onChange={handleChange}/>
                                    <br/>
                                    {' '}<button type='submit' style={{backgroundColor: 'red', color: 'white', marginBottom: '15px', marginTop: '5px'}}>Submit</button>
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

                                                                {[...Array(r.starRating)].map((star, i) => {
                                                                        let counter = i + 1;
                                                                        return(
                                                                            <FaStar
                                                                                value={counter}
                                                                                color={'ffc107'}
                                                                            />
                                                                        )
                                                                    })}

                                                            </div> 
                                                        </Col>
                                                        <Col>
                                                            <div className="d-flex w-100 justify-content-end">
                                                                <Link to={`/edit/${r.reviewId}`} className='ml-auto me-2'  style={{color: '#000807'}}>Edit</Link>{' '}
                                                                <Link style={{color: '#000807'}} onClick={handleDelete.bind(this, r.reviewId)}>Delete</Link>{' '}   
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