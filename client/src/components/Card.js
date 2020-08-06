import React from 'react';
import { Link } from 'react-router-dom'
import './Card.scss'

// Redux
import { deleteVehicleStart } from '../redux/Vehicles/vehicles.actions'
import { useDispatch, useSelector } from 'react-redux'

const mapState = ({ userData }) => ({
    currentUser: userData.currentUser
});

function Card ({car, editMode}) {  
    const dispatch = useDispatch()
    const { currentUser } = useSelector( mapState )  
    let cardTitle = `${car.year} ${car.make} ${car.model}`
    let monthlyCost = Math.round(car.price/36)

    const handleDelete = e => {
        e.preventDefault()
        // dispatch( deleteVehicleStart(car._id) )   
        console.log(`Deleting car #${car._id}`)     
    }

    const handleEdit = e => {
        e.preventDefault()
        // dispatch( editVehicleStart(car._id) )   
        console.log(`Editing car #${car._id}`)
    }

    return (
        <section className='vehicle-card'>            
            {currentUser && editMode === true && (
                <>
                    <button className='delete-btn' onClick={handleDelete}>X</button>
                    <div className='edit-btn' onClick={handleEdit}>
                        <img src={require('../assets/edit-pen-whte.png')}/>
                    </div>
                </>
            )}
            <img src={car.profile_img} alt={cardTitle}/>
            <div className='card-info'>
                <h3>{cardTitle}</h3>
                <div className='price'>
                    <div>
                        <h4>${car.price}</h4>
                        <p>Total</p>
                    </div>
                    <div>
                        <h4>${monthlyCost}</h4>
                        <p>/month</p>
                    </div>
                    <div>
                        <h4>36</h4>
                        <p>Months</p>
                    </div>
                </div>
                <Link to={{pathname: '/vehicle', state:{car} }}>
                    <button> View Details </button>
                </Link>
            </div>
        </section>
    )
}

export default Card;