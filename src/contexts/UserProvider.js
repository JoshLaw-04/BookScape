import axios from "axios";
import { useEffect, useState } from "react";
import UserContext from "./UserContext";

export const UserProvider = (props) => {

    const baseUrl = "http://localhost:3000/api/users/";

    const [ loggedInUser, setLoggedInUser ] = useState({
        userId: null,
        firstName: ""
    });

    const [ isLoggedIn, setisLoggedIn ] = useState(false);

    useEffect(() => {
        async function loadUser() {
            // TODO load token
            const userId = localStorage.getItem('userId');
            if (userId) {
                setisLoggedIn(true);
                const firstName = localStorage.getItem('firstName');
                const token = localStorage.getItem('myToken');
                setLoggedInUser({userId, firstName})
            }
        }
        loadUser();
    }, []);

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
                localStorage.setItem('myToken', response.data.token);
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('firstName', response.data.firstName);
                setisLoggedIn(true)
                setLoggedInUser({...loggedInUser, userId: response.data.userId, firstName: response.data.firstName})
                return new Promise(resolve => resolve(response.data));
            }
        );
    }
        
    function signOutUser() {
        setisLoggedIn(false);
        localStorage.clear()
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
            isLoggedIn,
            createUser,
            signInUser,
            signOutUser,
            getUserProfile
        }}>
            { props.children }
        </UserContext.Provider>
    )
}
