import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import './Forms.scss'
import AuthWrapper from '../AuthWrapper'

// Redux
import { emailSignInStart, setCurrentUser } from '../../redux/User/user.actions'
import { useDispatch, useSelector } from 'react-redux'


const mapState = ({ userData }) => ({
    currentUser: userData.currentUser,
});

const SignIn = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { currentUser } = useSelector( mapState )
    let URL = "https://ult-car-sales.herokuapp.com/auth"
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
        }        
        else {
            // dispatch( emailSignInStart( credentials.email, credentials.password ) )
            axios.post(`${URL}/login`, credentials)
            .then(res => {
                console.log(res.data)
                setCurrentUser( res.data.user )
                history.push('/search')
            })
            .catch(err => {
                console.log('failed to signin user', err)
            })
        }
    }

    useEffect(()=> {
        if(currentUser){
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