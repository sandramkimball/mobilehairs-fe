import axios from 'axios'
import { useHistory } from 'react-router-dom'

let URL = "https://ult-car-sales.herokuapp.com/auth"
let history = useHistory()

// SIGN UP
export const handleAddUser = newUser  => {
    return new Promise((resolve, reject) => {
        axios .post(`${URL}/register`, newUser)
        .then(()=> {
            history.push('/login')
        })
        .catch(err=> {
            reject('Signup failed.', err)
        })
    })
}

// SIGN IN
export const handleSignIn = ( email, password ) => {
    return new Promise((resolve, reject) => {
        axios.post(`${URL}/login`, {email, password})
        .then(res => {
            let userData = res.data.data
            return userData
        })
        .catch(err => {
            console.log('Failed to signin user.', err)
        })
    }, [])
}

// RESET PASSWORD

export const handleResetPassword = email => {
    return new Promise((resolve, reject) => {
        axios.put(`${URL}/login`, {email, password})
        .then(()=> {
            resolve()
        })
        .catch(err=> {
            reject(err)
        })
    })
}