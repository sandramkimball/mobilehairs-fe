import React from 'react'
import Card from '../components/Card'
import FilterBar from '../components/FilterBar'

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            vehicles: [{
                make: 'Dodge',
                model: 'Ram 1500',
                year: 2004,
                body: 'truck',
                engine: '6 Cyl',
                drive: 'RWD',
                miles: 30000,
                color: 'blue',
                price: 12000,
                images: [],
                description: 'New brakes, shocks, transmission, front fender, left headlight.'
            }]
        }
    }

    render(){
        return (
            <section style={{display: 'flex'}}>
                <FilterBar props={this.state.vehicles}/>
                {this.state.vehicles.map(car=> (
                    <Card props={car}/>
                ))}
            </section>
        )
    }
}

export default Search;