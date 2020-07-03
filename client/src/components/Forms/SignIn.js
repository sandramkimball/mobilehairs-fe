import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { emailSignInStart, googleSignInStart } from '../../redux/User/user.actions'
import './Forms.scss'
import AuthWrapper from '../AuthWrapper'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const SignIn = props => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { currentUser } = useSelector(mapState)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if(email === '' || password === ''){
            setError('Email or password is missing.')
        } else {
            dispatch( emailSignInStart({ email, password }) )
        }
    }

    useEffect(()=> {
        if(currentUser){
            setPassword('')
            setEmail('')
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
                    value={email}
                    placeholder='Email'
                    handleChange={e=> setEmail(e.target.value)}
                />
                <p>Password</p>
                <input 
                    type='password'
                    name='password'
                    value={password}
                    placeholder='Password'
                    handleChange={e=> setPassword(e.target.value)}

                />
                <button type='submit'>Login</button>

                <div className='links'>
                    <Link to='/registration'>Sign Up</Link>
                    <Link to='recovery'>Reset Password</Link>
                </div>
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