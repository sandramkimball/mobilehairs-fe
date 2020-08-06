import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Card from '../components/Card'
import './MyAccount.scss'
import axios from 'axios'

// Redux
import { handleFetchUsersVehicles } from '../redux/Vehicles/vehicles.helpers'
import { setCurrentUser, setToken } from '../redux/User/user.actions'
import { useDispatch, useSelector } from 'react-redux'

const mapState = ({ userData }) => ({
    currentUser: userData.currentUser,
    token: userData.token
});

const MyAccount = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { currentUser, token } = useSelector( mapState )
    const [ editMode, setEditMode ] = useState( false )
    const [ userVehicles, setUserVehicles ] = useState([])
    
    const handleEdit = e => {
        e.preventDefault()
        if(editMode === true){
            setEditMode(false)
        } else { 
            setEditMode(true)
        }
        console.log('Edit Mode:', editMode)
    }

    useEffect(()=> {
        if(currentUser === null && !localStorage.getItem('token')){
            return history.push('/login')
        }
        
        if (currentUser === null && localStorage.getItem('token')){
             let storedUser = localStorage.getItem('userData')
             dispatch( 
                setCurrentUser(JSON.parse(storedUser)), 
                setToken(localStorage.getItem('token'))
            )
        }

        let userID = currentUser._id
        // let cars = dispatch( handleFetchUsersVehicles(userID) )
        // setUserVehicles(cars)    
        axios.get(`https://ult-car-sales.herokuapp.com/vehicles/find_by/${userID}`)
        .then(res => {
            const vehiclesArray = res.data.data
            setUserVehicles(vehiclesArray)
        })
        .catch(err => {
            console.log('failed to get users cars', err)
        })
        
    }, [])

    return (
        <section>
            <div className='user-info'>
                <h4>{`${currentUser.firstName} ${currentUser.lastName}`}</h4>
                <h5>{currentUser.email}</h5>
                <h5>{`${currentUser.city}, ${currentUser.state}`}</h5>
                <div className='edit-user-btn'>
                    <img src={require('../assets/edit-pen.png')}/>
                </div>
            </div>
            
            <div className='user-cars'>
                <div className='btn-menu'>
                    <Link to='/sell' state={currentUser}><button>Add Car</button></Link>
                    {editMode === false && (
                        <button onClick={handleEdit}>Edit Listings</button>
                    )}
                    {editMode === true && (
                        <button onClick={handleEdit}>Save</button>
                    )}
                </div>
                    
                {currentUser && userVehicles && userVehicles.map(car=> (
                    <Card key={car._id} car={car} editMode={editMode}/>
                ))}

                {!userVehicles && (
                    <p>You currently have no vehicles for sale.</p>
                )}
            </div>
        </section>
    )
}

export default MyAccount
