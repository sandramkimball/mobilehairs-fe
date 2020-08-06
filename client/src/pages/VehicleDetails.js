import React from 'react';
import { Link } from 'react-router-dom';
import './Vehicle.scss';
import PaymentCalculator from '../components/Calculator'
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

class VehicleDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            make: props.location.state.car.make,
            model: props.location.state.car.model,
            year: props.location.state.car.year,
            body: props.location.state.car.body,
            engine: props.location.state.car.engine,
            drive: props.location.state.car.drive,
            miles: props.location.state.car.miles,
            color: props.location.state.car.color,
            price: props.location.state.car.price,
            description: props.location.state.car.description,
            image: props.location.state.car.profile_img,
            features: props.location.state.car.features
        }
        this.handleClick = this.handleClick.bind(this)
    }

    

    handleClick=e=> {
        console.log(this.props.location.state.car)
    }

    render(
        title = `${this.state.year} ${this.state.make} ${this.state.model}`
    ){
        return (
            <section className='vehicle-details'>
                <div className='sub-banner'>
                    <h3><Link to='/search'> <FontAwesomeIcon icon={faChevronLeft}/>Back to Results</Link></h3> 
                </div>
                
                <section className='gallery'>   
                    <img src={this.state.image} alt={this.state.model}/>  
                    <div className='vehicle-info'>            
                        <h1>{title}</h1>            
                        <div>    
                            <tb>
                                <tr>
                                    <th>Price</th>
                                    <th>${this.state.price}</th>
                                </tr>
                                <tr>
                                    <th>Body</th>
                                    <th>{this.state.body}</th>
                                </tr>
                                <tr>
                                    <th>Drive</th>
                                    <th>{this.state.drive}</th>
                                </tr>
                                <tr>
                                    <th>Engine</th>
                                    <th>{this.state.engine}</th>
                                </tr>
                                <tr>
                                    <th>Miles</th>
                                    <th>{this.state.miles}</th>
                                </tr>
                                <tr>                            
                                    <th>Description</th>
                                    <th>{this.state.description}</th>
                                </tr>
                            </tb>    
                        </div>   
                        <div>
                            <button>Request More Info</button>
                            <button>Compare</button>
                        </div> 
                    </div>
                </section>
                
                <PaymentCalculator props={this.state.price}/>

                <section className='features'>   
                    <h4>Features</h4>
                    <ul>
                        {this.state.features.map(feature=> (
                            <li>{feature}</li>
                        ))}
                    </ul>                    
                </section>
            
            </section>
        )
    }
}

export default VehicleDetails;