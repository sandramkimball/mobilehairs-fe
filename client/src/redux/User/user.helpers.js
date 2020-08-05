import axios from 'axios'
import { useHistory } from 'react-router-dom'

let URL = "https://ult-car-sales.herokuapp.com/auth"
let history = useHistory()

// SIGN UP
export const handleAddUser = newUser  => {
    console.log('signup handler called.')

    return new Promise((resolve, reject) => {
        axios .post(`${URL}/register`, newUser)
        .then(()=> {
            history.push('/login')
        })
        .catch(err=> {
            reject('Signup failed.')
        })
    })
}

// SIGN IN
export const handleEmailSignIn = ( email, password ) => {
    console.log('handleEmailSignIn initiate:')
    return new Promise((resolve, reject) => {
        axios.post(`${URL}/login`, { email, password })
        .then(res => {
            const user = res.data.data
            return user
        })
        .catch(err => {
            reject(err)
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