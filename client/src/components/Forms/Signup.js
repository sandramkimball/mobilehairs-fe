import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Validator } from '../../utils/signupValidator';
import AuthWrapper from '../AuthWrapper'
import './Forms.scss'
import axios from 'axios'

// Redux
import { addUserStart } from '../../redux/User/user.actions'
import { useDispatch, useSelector } from 'react-redux'

const mapState = ({ userData }) => ({
    currentUser: userData.currentUser
});

const SignUp = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    let URL = "https://ult-car-sales.herokuapp.com/auth"
    const { currentUser, userErr } = useSelector(mapState)
    const [ credentials, setCredentials ] = useState({
        firstName: '',
        lastName: '',
        city: '',
        state: '',
        email: '',
        password: '',
        confirmPassword: '',
        avatar: '',
        errors: []
    })

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        let userCredentials = {
            firstName: credentials.firstName,
            lastName: credentials.lastName,
            email: credentials.email,
            password: credentials.password,
            city: credentials.city,
            state: credentials.state,
            avatar: credentials.avatar
        }

        //  Check if signup form is complete:
        // let isValid = Validator(credentials)
        // setCredentials({ errors: isValid })

        // If form is valid, post new user, else, return errors.
        // if(credentials.errors.length === 0){
        //     console.log('Dispatch initiate:')
        //     dispatch( addUserStart(userCredentials) )
        // } else {
        //     console.log(credentials.errors)
        // }

        axios.post(`${URL}/register`, credentials)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log('failed to signup user', err)
        })
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
                <p>Profile Image</p>
                <input 
                    name='avatar'
                    value={credentials.avatar}
                    placeholder='URL'
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
                <div className='links'>
                    <Link to='/login'>Already Have An Account?</Link>
                </div>
                <button type='submit'>Submit</button>
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