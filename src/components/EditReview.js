import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ReviewContext from "../contexts/ReviewsContext";

function EditReview() {

    let {id} = useParams();
    let navigate = useNavigate();
    let {editReview, getReview } = useContext(ReviewContext);

    let [editThisReview, setEditThisReview] = useState({
        comment: "",
        starRating: ""
    })

    useEffect(() => {
        async function fetch() {
          await getReview(id)
            .then((reviews) => setEditThisReview(reviews))
          }
          fetch()
    },  [])

    function handleChange(event) {
        setEditThisReview((prevValue) => {
            return {...prevValue, [event.target.name]: event.target.value}
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        editReview(editThisReview).then(() => {
            navigate(`/profile/${id}`)
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
                        <input type="text" name="starRating" value={editThisReview.starRating} onChange={handleChange} /><br/><br/>
                        <span style={{fontWeight: 'bold'}}>Review:</span><br/>
                        <textarea type="text" name="comment" rows={3} cols={50} value={editThisReview.comment} onChange={handleChange} />
                        <br></br><br></br>
                        <Button type='submit' style={{marginBottom: '5px', backgroundColor: 'black'}}>Update</Button>
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