import React from 'react'
import Card from '../components/Card'
import FilterBar from '../components/FilterBar'
import './Search.scss'
import {vehicleData} from '../data/index';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sortBy: 'Newest',
            resultsError: false,
            options: [{
                make: this.props.history.location.state.make,
                model: this.props.history.location.state.model,
                minPrice: this.props.history.location.state.minPrice,
                maxPrice: this.props.history.location.state.maxPrice,
                isNew: this.props.history.location.state.isNew
            }],
            vehicles: vehicleData
        };
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect = e => { this.setState({sortBy: e.target.value}) }

    componentDidMount(){
        let results = []

        // If options is not 'All', check vehicle against filter options
        results.filter(vehicle=> {
            if( vehicle.price >= this.state.options.minPrice &&
                vehicle.price <= this.state.options.maxPrice ){
                return vehicle
            }

            if( this.state.options.isNew != 'All' && 
                vehicle.isNew === this.state.options.isNew ){
                return vehicle
            }

            if( this.state.options.make != 'All' && 
                vehicle.make === this.state.options.make ){
                return vehicle
            }

            // if( this.state.options.model != 'All' && 
            //     vehicle.make === this.state.options.model ){
            //     return vehicle
            // }
        })

        // Return results or set error
        if(results.length === 0){
            this.setState({resultsError: true})
        } else {
            this.setState({resultsError: false, vehicles: results})
        }        
    }

    render(){
        return (
            <section className='search-pg'>
                <div className='banner-s'></div>
                    <div className='search-container'>
                        <FilterBar vehicles={this.state.vehicles} options={this.state.options[0]}/>
                        <div className='results-container'>
                            <div className='sort-by'>
                                <p>Sort By: </p>
                                <select onChange={this.handleSelect} value={this.props.sortBy}>
                                    <option value={'Newest'}>Newest</option>
                                    <option value={'Year (Asc)'}>Year (Ascending)</option>
                                    <option value={'Year (Desc)'}>Year (Descending)</option>
                                    <option value={'Price (Asc)'}>Price (Ascending)</option>
                                    <option value={'Price (Desc)'}>Price (Descending)</option>
                                </select>
                            </div>
                        {this.state.resultsError === true && (
                            <h4 style={{margin: 'auto', textAlign: 'center'}}>  Your search results returned nothing.</h4>
                        )}
                        {this.state.resultsError === false && this.state.vehicles.map(car=> (
                            <Card car={car}/>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default Search;