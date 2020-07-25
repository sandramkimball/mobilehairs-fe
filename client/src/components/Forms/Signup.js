import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signUpUserStart } from '../../redux/User/user.actions'
import AuthWrapper from '../AuthWrapper'
import { Validator } from '../../utils/signupValidator';
import './Forms.scss'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const SignUp = props => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { currentUser, userErr } = useSelector(mapState)

    // Set State
    const [ credentials, setCredentials ] = useState({
        firstName: '',
        lastName: '',
        city: '',
        state: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: []
    })

    const handleSubmit = e => {
        e.preventDefault()
        let isValid = Validator(credentials)
        setCredentials({ errors: isValid })
        if(credentials.errors.length === 0){
            dispatch( signUpUserStart({ credentials }) )
        } else {
            console.log(credentials.errors)
        }
    }

    const handleChange = e => {
        e.preventDefault()
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    useEffect(()=> {
        if(currentUser){
            history.push('/')
        }
    }, [userErr])

    const configAuthWrapper = {
        headline: 'Registration'
    };

    return (
        <AuthWrapper {...configAuthWrapper}>
            <form onSubmit={handleSubmit}>
                <div className='fullname'>
                    <div>
                        <p>First Name</p>
                        <input 
                            name='firstName'
                            value={credentials.firstName}
                            placeholder='First Name'
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <p>Last Name</p>
                        <input 
                            name='lastName'
                            value={credentials.lastName}
                            placeholder='Last Name'
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <p>Email</p>
                <input 
                    name='email'
                    value={credentials.email}
                    placeholder='Email'
                    onChange={handleChange}
                />    
                <div className='location'>  
                    <div>
                        <p>City</p>     
                        <input 
                            name='city'
                            value={credentials.city}
                            placeholder='City'
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <p>State</p>
                        <select  name='state' onChange={handleChange}>
                            <option value=''>--</option>
                            <option value='AK'>AK</option>
                            <option value='AL'>AL</option>
                            <option value='AZ'>AZ</option>
                            <option value='CA'>CA</option>
                            <option value='CO'>CO</option>
                            <option value='TX'>TX</option>
                        </select>
                    </div>
                </div>  
                <p>Password</p>
                <input 
                    type='password'
                    name='password'
                    value={credentials.password}
                    placeholder='Password'
                    onChange={handleChange}
                />
                <p>Confirm Password</p>
                <input 
                    type='password'
                    name='confirmPassword'
                    value={credentials.confirmPassword}
                    placeholder='Confirm Password'
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
                <div className='links'>
                    <Link to='/login'>Sign In</Link>
                </div>
            </form>
                {credentials.errors && (
                    <ul className='form-errors'>
                        {credentials.errors.map((err, index)=> (
                            <li key={index}>{err}</li>
                        ))}
                    </ul>
                )}
        </AuthWrapper>
    )
}

export default SignUp;