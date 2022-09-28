import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import ReviewContext from "./ReviewContext";

export const ReviewProvider = (props) => {

    const [ reviews, setReviews ] = useState([]);
    const baseUrl = "http://localhost:3000/api/reviews/";

    useEffect(() => {
        async function fetchData() {
            await getAllReview();
        }
        fetchData();
    }, []);

    function getAllReview() {
        return axios.get(baseUrl).then(response => setReviews(response.data));
    }

    function getReview(id) {
        return axios.get(baseUrl + id).then(response => {
                return new Promise((resolve) => resolve(response.data))
            }        
        );  
    }

    function addReview(review) {
        // let myHeaders = {
        //     Authorization: `Bearer ${localStorage.getItem('myPostToken')}` 
        // };

        // return axios.post(baseUrl, review, { headers: myHeaders })
        
        return axios.post(baseUrl, review)
            .then(response => {
                getAllReview();
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function editReview(review) {
        // let myHeaders = {
        //     Authorization: `Bearer ${localStorage.getItem('myPostToken')}`
        // };

        // return axios.put(baseUrl + post.postId, post, { headers: myHeaders })

        return axios.put(baseUrl + review.reviewId, review)
            .then(response => {
                getAllReview();
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function deleteReview(id) {
        // let myHeaders = {
        //     Authorization: `Bearer ${localStorage.getItem('myPostToken')}` 
        // };

        // return axios.delete(baseUrl + id, { headers: myHeaders })

        return axios.delete(baseUrl + id)
            .then(response => {
                getAllReview();
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    return (
        <ReviewContext.Provider value={{
            reviews,
            getReview,
            addReview,
            editReview,
            deleteReview
        }}>
            { props.children }
        </ReviewContext.Provider>
    )
};