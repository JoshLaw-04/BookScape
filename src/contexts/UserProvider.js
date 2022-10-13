import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "./UserContext";

export const UserProvider = (props) => {

    const baseUrl = "http://localhost:3000/api/users/";
    const [ user, setUser ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    //const { id } = useParams();
    const id = '1'
    // not sure how to bring in the user id
    // I tried using getUserProfile, but it was the same error
    // as below
    useEffect(() => {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myToken')}` 
        };
        async function fetch() {
            await axios.get(baseUrl + id, { headers: myHeaders })
            .then((response) => setUser(response.data.firstName))
        }
        fetch()
    }, [loading])

    function createUser(newUser) {       
        
        return axios.post(baseUrl, newUser)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function signInUser(username, password) {
        let user = { username, password };
    
        return axios.post(`${baseUrl}login`, user)
            .then(response => {
                localStorage.setItem('myToken', response.data.token)
                setLoading(true)
                return new Promise(resolve => resolve(response.data));
            }
        );
    }
        
    function signOutUser() {
        setLoading(false);
        return localStorage.clear();
    }

    function getUserProfile(id) {
                let myHeaders = {
                    Authorization: `Bearer ${localStorage.getItem('myToken')}` 
                };
                
                return axios.get(baseUrl + id, { headers: myHeaders })
                    .then(response => {
                        return new Promise((resolve) => resolve(response.data));
                    }
                );
            }

    return (
        <UserContext.Provider value={{
            user,
            loading,
            createUser,
            signInUser,
            signOutUser,
            getUserProfile
        }}>
            { props.children }
        </UserContext.Provider>
    )
}
