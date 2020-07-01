import React from 'react';
import { Link } from 'react-router-dom';

class Vehicle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    render(){
        return (
            <section>
                <nav><Link path to='/Search'>Back to Results</Link></nav>

                <section className='vehicle-gallery'>   
                    <p>{props.year}{props.make}{props.model}</p> 
                    <div>            
                        <img src={props.image} alt={props.image}/> 
                        <p>{props.price}</p>
                    </div>
                </section>

                <section className='vehicle-info'>                
                    <p>{props.description}</p>
                </section>
            </section>
        )
    }
}

export default Vehicle;