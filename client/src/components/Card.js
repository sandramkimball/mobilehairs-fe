import React from 'react';
import { Link } from 'react-router-dom'
import './Card.scss'

// Redux
import { deleteVehicleStart } from '../redux/Vehicles/vehicles.actions'
import { useDispatch, useSelector } from 'react-redux'

function Card ({car}) {    
    let cardTitle = `${car.year} ${car.make} ${car.model}`
    let monthlyCost = Math.round(car.price/36)
    let dispatch = useDispatch()

    const handleDelete = e => {
        e.preventDefault()
        dispatch( deleteVehicleStart(car._id) )   
        console.log(`Deleting car #${car._id}`)     
    }

    return (
        <section className='vehicle-card'>            
            <button className='delete-btn' onClick={handleDelete}>X</button>
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