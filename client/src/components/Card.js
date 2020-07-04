import React from 'react';
import { Link } from 'react-router-dom'
import defaultImage from '../assets/car-3.jpg'
import './Card.scss'

function Card ({car}) {    
    let cardTitle = `${car.year} ${car.make} ${car.model}`

    return (
        <section className='vehicle-card'>
            <Link to={{pathname: '/Vehicle', state:{car} }}>
                <img src={defaultImage} alt={cardTitle}/>
                <h4>{cardTitle}</h4>
                <div className='price'>
                    <p>Price: ${car.price}</p>
                    <p>${car.price/60}/mo</p>
                </div>
                <p>{car.description}</p>
            </Link>
        </section>
    )
}

export default Card;