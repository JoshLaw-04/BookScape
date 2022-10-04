import axios from "axios";
import UserContext from "./UserContext";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";



    const baseUrl = "http://localhost:3001/api/users/";

    export function createUser(username, password, email, firstName, lastName) {       
        let user = { username, password, email, firstName, lastName };
        
        return axios.post(baseUrl, user)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    export function signInUser(username, password) {
        let user = { username, password };
    
        return axios.post(`${baseUrl}/register`, user)
            .then(response => {
                localStorage.setItem('myCoffeeToken', response.data.token)
                return new Promise(resolve => resolve(response.data));
            }
        );
    }
