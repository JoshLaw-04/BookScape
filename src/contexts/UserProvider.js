// import axios from "axios";
// import { useEffect, useState } from "react";
// import UserContext from "./UserContext";

// export const UserProvider = (props) => {

//     const [ users, setUsers ] = useState([]);
//     const baseUrl = "http://localhost:3000/api/users/";

//     // useEffect(() => {
//     //     const loggedInUser = localStorage.getItem('user');
//     //     if (loggedInUser) {
//     //         const foundUser = JSON.parse(loggedInUser);
//     //         setUsers(foundUser);
//     //     }
//     // }, []);

//     function createUser(newUser) {
        
//         return axios.post(baseUrl, newUser)
//             .then(response => {
//                 return new Promise(resolve => resolve(response.data));
//             }
//         );
//     }

//     function signInUser(username, password) {
//         let user = { username, password };

//         return axios.post(`${baseUrl}login`, user)
//             .then(response => {
//                 setUsers(response.data.existingUser)
//                 localStorage.setItem('myToken', response.data.token)
//                 localStorage.setItem('user', JSON.stringify(response.data.existingUser))
//                 return new Promise(resolve => resolve(response.data));
//             }
//         );
//     }

function signOutUser() {
        return localStorage.clear();
    }

//     function getUserProfile(id) {
//         let myHeaders = {
//             Authorization: `Bearer ${localStorage.getItem('myToken')}` 
//         };
        
//         return axios.get(`${baseUrl}profile/` + id, { headers: myHeaders })
//             .then(response => {
//                 return new Promise((resolve) => resolve(response.data));
//             }
//         );
//     }

//     // function editUser(user) {
//     //     let myHeaders = {
//     //         Authorization: `Bearer ${localStorage.getItem('myToken')}`
//     //     };

//     //     return axios.put(`${baseUrl}profile/edit/` + user.userId, user, { headers: myHeaders })
//     //         .then(response => {
//     //             getUserProfile(user.userId);
//     //             return new Promise(resolve => resolve(response.data));
//     //         }
//     //     );
//     // }


//     return (
//         <UserContext.Provider value={{
//             users,
//             createUser,
//             signInUser,
//             getUserProfile
//         }}>
//             { props.children }
//         </UserContext.Provider>
//     )
// }


import axios from "axios";
import UserContext from "./UserContext";

export const UserProvider = (props) => {

    const baseUrl = "http://localhost:3000/api/users/";

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
                return new Promise(resolve => resolve(response.data));
            }
        );
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
            createUser,
            signInUser,
            signOutUser,
            getUserProfile
        }}>
            { props.children }
        </UserContext.Provider>
    )
}
