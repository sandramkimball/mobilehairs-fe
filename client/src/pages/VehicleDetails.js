import React from 'react';
import { Link } from 'react-router-dom';

class VehicleDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            make: props.make,
            model: props.model,
            year: props.year,
            body: props.body,
            engine: props.engine,
            drive: props.drive,
            miles: props.miles,
            color: props.color,
            price: props.price,
            description: props.description,
            images: props.images
        }
    }

    render(){
        return (
            <section>
                <nav><Link path to='/Search'>Back to Results</Link></nav>

                <section className='vehicle-gallery'>   
                    <p>{this.props.year}{this.props.make}{this.props.model}</p> 
                    <div>            
                        <img src={this.props.image} alt={this.props.image}/> 
                        <p>{this.props.price}</p>
                    </div>
                </section>

                <section className='vehicle-info'>                
                    <p>{this.props.description}</p>
                </section>
            </section>
        )
    }
}

export default VehicleDetails;