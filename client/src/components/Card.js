import React from 'react';
import { Link } from 'react-router-dom'
import defaultImage from '../assets/car-3.jpg'
import './Card.scss'

function Card ({car}) {    
    let cardTitle = `${car.year} ${car.make} ${car.model}`
    let monthlyCost = Math.round(car.price/36)

    return (
        <section className='vehicle-card'>            
                <img src={defaultImage} alt={cardTitle}/>
                <h4>{cardTitle}</h4>
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
                <p>{car.description}</p>
                <Link to={{pathname: '/vehicle', state:{car} }}>
                    <button> View Details </button>
                </Link>
        </section>
    )
}

export default Card;