import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "./UserContext";

export const UserProvider = (props) => {

    const baseUrl = "http://localhost:3000/api/users/";

    const [ loggedInUser, setLoggedInUser ] = useState({
        userId: null,
        firstName: ""
    });

    const [ loading, setLoading ] = useState(false);

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
                setLoggedInUser({...loggedInUser, userId: response.data.userId, firstName: response.data.firstName})
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
            loggedInUser,
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
