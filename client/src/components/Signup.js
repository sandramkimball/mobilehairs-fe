import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { signUpUserStart } from './../../redux/User/user.actions'

// import './styles.scss'

import AuthWrapper from '../AuthWrapper'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const SignUp = props => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { currentUser, userErr } = useSelector(mapState)

    // Set State
    const [ displayName, setDisplayName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ errors, setErrors ] = useState([])

    const resetForm = () => {
        setDisplayName(''),
        setEmail(''),
        setPassword(''),
        setConfirmPassword(''),
        setErrors([])
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch( signUpUserStart({ 
            displayName, 
            email, 
            password,
            confirmPassword
        }))
    }

    useEffect(()=> {
        if(currentUser){
            resetForm()
            history.push('/')
        }
    }, [userErr])

    return (
        <AuthWrapper headline={'Registration'}>
            <form onSubmit={handleSubmit}>
                <input 
                    type='displayName'
                    name='displayName'
                    value={displayName}
                    placeholder='First Name'
                    handleChange={e=> setDisplayName(e.target.value)}
                />
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
                <input 
                    type='confirmPassword'
                    name='confirmPassword'
                    value={confirmPassword}
                    placeholder='Confirm Password'
                    handleChange={e=> setConfirmPassword(e.target.value)}

                />
                <button type='submit'>Register</button>

            </form>
            {errors.length > 0 && (
                <ul>
                    {errors.map((err, index)=> (
                        <li key={index}>{err}</li>
                    ))}
                </ul>
            )}
        </AuthWrapper>
    )
}

export default SignUp;