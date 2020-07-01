import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Card () {
    const [posts, setPosts] = useState([])
    
    let cardTitle = `${props.year} ${props.make} ${props.model}`

    return (
        <section>
            <Link path to='Vehicle'>
                <h4>{cardTitle}</h4>
                <img src={props.images[0]} alt={cardTitle}/>
                <p>Price: ${props.price} ${props.price/60}/mo</p>
                <p>Description: {props.description}</p>
            </Link>
        </section>
    )
}

export default Card;