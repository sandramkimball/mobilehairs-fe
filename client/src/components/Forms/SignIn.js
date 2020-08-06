import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Forms.scss'
import axios from 'axios'
import AuthWrapper from '../AuthWrapper'

// Redux
import { signInStart, setCurrentUser, setToken } from '../../redux/User/user.actions'
import { useDispatch, useSelector } from 'react-redux'


const mapState = ({ userData }) => ({
    currentUser: userData.currentUser,
    token: userData.token
});

const SignIn = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    let URL = "https://ult-car-sales.herokuapp.com/auth"
    const { currentUser, token } = useSelector( mapState )
    const [ error, setError ] = useState('')
    const [ credentials, setCredentials ] = useState({
        password: '',
        email: ''
    })

    const handleChange = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(credentials.email === '' || credentials.password === ''){ 
            setError('Email or password is missing.') 
        } else {
            // dispatch( signInStart( credentials.email, credentials.password ) )

            axios.post(`${URL}/login`, credentials )
            .then(res => {
                let userData = res.data.data
                dispatch( setCurrentUser(userData.user), setToken(userData.token))
                localStorage.setItem('token', userData.token)
                localStorage.setItem('userData', JSON.stringify(userData.user))
                history.push({
                    pathname: '/account',
                    search: `?user=${userData.user._id}`
                })
            })
            .catch(err => {
                console.log('Failed to signin user.', err)
            })
        }
    }

    useEffect(()=> {
        if(token){
            setCredentials({
                email: currentUser.email,
                password: ''
            })
            console.log('Already logged in.')
            history.push('/')
        }
    }, [currentUser])

    return (
        <AuthWrapper headline={'Sign In'}>
            <form onSubmit={handleSubmit}>
                <p>Email</p>
                <input 
                    type='email'
                    name='email'
                    value={credentials.email}
                    placeholder='Email'
                    onChange={handleChange}
                />
                <p>Password</p>
                <input 
                    type='password'
                    name='password'
                    value={credentials.password}
                    placeholder='Password'
                    onChange={handleChange}

                />
                <div className='links'>
                    <Link to='/registration'>Sign Up</Link>
                    <Link to='/recovery'>Forgot Your Password?</Link>
                </div>

                <button type='submit'>Login</button>
            </form>
            {error !== '' && (
                <ul className='form-errors'>
                    <li>{error}</li>
                </ul>
            )}
        </AuthWrapper>
    )
}

export default SignIn;