import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import FilterBar from '../components/FilterBar'
import './Search.scss'
import { checkIsNew, checkModel, checkMake, checkPrice } from '../hoc/filterMiddleware';

// Context & Reducers
import { setVehicles } from '../redux/Vehicles/vehicles.actions'
import { useDispatch, useSelector } from 'react-redux';


const mapState = ({ vehiclesData }) => ({
    vehicles: vehiclesData.vehicles
})

const Search = props => {
    const dispatch = useDispatch();
    const { vehicles } = useSelector( mapState )
    const [state, setState] = useState({
        sortBy: 'Newest',
        resultsError: false,
        options: {
            make: 'All',
            model: 'All',
            minPrice: 0,
            maxPrice: 1000000,
            isNew: 'All'
        }
    })
        
    const handleSelect = e => { setState({sortBy: e.target.value}) }

    useEffect(()=> {        
        axios.get("https://ult-car-sales.herokuapp.com/vehicles")
        .then(res=> {
            dispatch( setVehicles(res.data.data) )
        })
        .catch(err => {
            console.log(err)
        })

        // Filter results:
        // let results = []        
        // vehicles.forEach(vehicle=> {
        //     if(
        //         checkPrice(vehicle, state.options.minPrice, state.options.maxPrice) === true &&
        //         checkIsNew(vehicle, state.options.isNew) === true &&
        //         checkMake(vehicle, state.options.make) == true &&
        //         checkModel(vehicle, state.options.model)                
        //     ){
        //         results.push(vehicle)
        //     }
        // })

        // Return results or set error
        // if( results.length === 0 ){
        //     setState({resultsError: true})
        // } else {
        //     setState({resultsError: false, vehicles: results})
        // }        
    }, [])

    return(
        <section className='search-pg'>
            <div className='banner-s'/>
            <div className='search-container'>
                <FilterBar vehicles={vehicles} options={state.options}/>
                <div className='results-container'>

                    {/* Options to sort car results by. */}
                    <div className='sort-by'>
                        <p>Sort By: </p>
                        <select onChange={handleSelect} value={props.sortBy}>
                            <option value={'Newest'}>Newest</option>
                            <option value={'Year (Asc)'}>Year (Ascending)</option>
                            <option value={'Year (Desc)'}>Year (Descending)</option>
                            <option value={'Price (Asc)'}>Price (Ascending)</option>
                            <option value={'Price (Desc)'}>Price (Descending)</option>
                        </select>
                    </div>
                    
                    {/* Error if there's no matching results. */}
                    {state.resultsError === true || !vehicles && (
                        <h4 className='search-error'> Your search results returned nothing.</h4>
                    )}

                    {/* Display results. */}
                    {state.resultsError === false && vehicles && vehicles.map(car=> (
                        <Card key={car._id} car={car}/>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Search;