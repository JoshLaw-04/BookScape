import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ReviewContext from "../contexts/ReviewsContext";
import { FaStar } from 'react-icons/fa';


function EditReview() {

    let {id} = useParams();
    let navigate = useNavigate();
    let {editReview, getReview } = useContext(ReviewContext);

    let [editThisReview, setEditThisReview] = useState({
        comment: "",
        starRating: "",
        userId: getReview.userId
    })

    const [ rating, setRating ] = useState(null);
    const [ hover, setHover ] = useState(null);

    useEffect(() => {
        async function fetch() {
          await getReview(id)
            .then((reviews) => setEditThisReview(reviews))
          }
          fetch()
    },  [getReview, id])

    function handleChange(event) {
        setEditThisReview((prevValue) => {
            return {...prevValue, [event.target.name]: event.target.value}
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        editReview(editThisReview).then(() => {
            navigate(`/profile/${editThisReview.userId}`)
            alert('Update was successful!');
        }).catch(error => {
            console.log(error);
            navigate('/login');
        });
    }

    

    return (
        <ReviewContext.Consumer>
       {
        () => {
            return (
                <>
                <div>
                    <form onSubmit={handleSubmit} style={{paddingLeft: '50px', paddingTop: '50px'}}>
                        <span style={{fontWeight: 'bold'}}>Star Rating:</span><br/>
                        <div className="d-flex w-100 justify-content-start">
                            {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                    return (
                                        <label key={ratingValue} style={{paddingBottom: '20px'}}>
                                            <input
                                                className='starRadio'
                                                type="radio"
                                                name="rating"
                                                value={ ratingValue }
                                                onClick={ () => setRating(ratingValue) && handleChange}
                                            />
                                            <FaStar
                                                className='star'
                                                color={ ratingValue <= (hover || rating) ? '#ffc107' : '#A9A9A9' }
                                                size={25}
                                                onMouseEnter={ () => setHover(ratingValue) }
                                                onMouseLeave={ () => setEditThisReview({...editThisReview, starRating: ratingValue}) }
                                            />
                                        </label>
                                    );
                            })}
                        </div>
                        <span style={{fontWeight: 'bold'}}>Review:</span><br/>
                        <textarea type="text" name="comment" rows={3} cols={40} value={editThisReview.comment} onChange={handleChange} />
                        <br></br><br></br>
                        <Button type='submit' variant="danger" style={{marginBottom: '5px'}}>Update</Button>
                    </form>
                    
                </div>
                <div style={{paddingBottom: '432px'}}>

                </div>
                </>
                
            )
        }
        }
        </ReviewContext.Consumer>
    )

}
  
export default EditReview;