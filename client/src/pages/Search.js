import React from 'react'
import Card from '../components/Card'
import FilterBar from '../components/FilterBar'
import './Search.scss'
import { vehicleData } from '../data/index';
import { checkIsNew, checkModel, checkMake, checkPrice } from '../hoc/filterMiddleware';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sortBy: 'Newest',
            resultsError: false,
            options: {
                make: this.props.history.location.state.make,
                model: this.props.history.location.state.model,
                minPrice: this.props.history.location.state.minPrice,
                maxPrice: this.props.history.location.state.maxPrice,
                isNew: this.props.history.location.state.isNew
            },
            vehicles: vehicleData
        };
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect = e => { this.setState({sortBy: e.target.value}) }

    componentDidMount(){
        let results = []
        
        // If options is not 'All', check vehicle against filter options
        this.state.vehicles.forEach(vehicle=> {
            if(
                checkPrice(vehicle, this.state.options.minPrice, this.state.options.maxPrice) === true &&
                checkIsNew(vehicle, this.state.options.isNew) === true &&
                checkMake(vehicle, this.state.options.make) == true &&
                checkModel(vehicle, this.state.options.model)                
            ){
                console.log('passed all checks')
                results.push(vehicle)
            }
        })

        // Return results or set error
        if( results.length === 0 ){
            this.setState({resultsError: true})
        } else {
            this.setState({resultsError: false, vehicles: results})
        }        
    }

    render(){
        return (
            <section className='search-pg'>
                <div className='banner-s'/>
                <div className='search-container'>
                    <FilterBar vehicles={this.state.vehicles} options={this.state.options}/>
                    <div className='results-container'>

                        {/* Options to sort car results by. */}
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
                        
                        {/* Error if there's no matching results. */}
                        {this.state.resultsError === true && (
                            <h4 className='search-error'>  Your search results returned nothing.</h4>
                        )}

                        {/* Display results. */}
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