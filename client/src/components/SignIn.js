import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { emailSignInStart, googleSignInStart } from './../../redux/User/user.actions'

// import './styles.scss'

import AuthWrapper from './../AuthWrapper'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const SignIn = props => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { currentUser } = useSelector(mapState)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        dispatch( emailSignInStart({ email, password }) )
    }
    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart())
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
                <input 
                    type='email'
                    name='email'
                    value={email}
                    placeholder='Email'
                    handleChange={e=> setEmail(e.target.value)}
                />
                <input 
                    type='password'
                    name='password'
                    value={password}
                    placeholder='Password'
                    handleChange={e=> setPassword(e.target.value)}

                />
                <button type='submit'>Login</button>
                <div className='row'>
                    <button onClick={handleGoogleSignIn}>Sign in with Google</button>
                </div>
                <div className='links'>
                    <Link to='recovery'>Reset Password</Link>
                </div>
            </form>
        </AuthWrapper>
    )
}

export default SignIn;