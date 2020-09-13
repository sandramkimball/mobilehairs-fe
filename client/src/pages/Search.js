import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import FilterBar from '../components/FilterBar'
import './Search.scss'
import ReactLoading from 'react-loading'
import { checkIsNew, checkModel, checkMake, checkPrice } from '../hoc/filterMiddleware';

// Context & Reducers
import { setVehicles } from '../redux/Vehicles/vehicles.actions'
import { useDispatch, useSelector } from 'react-redux';


const mapState = ({ vehiclesData }) => ({
    vehicles: vehiclesData.vehicles
})

const Search = ( props ) => {
    const dispatch = useDispatch();
    const { vehicles } = useSelector( mapState )
    const [ state, setState ] = useState({
        sortBy: 'Newest',
        resultsError: false,
        options: {
            make: 'All',
            model: 'All',
            minPrice: 0,
            maxPrice: 500000,
            isNew: 'All'
        }
    })
        
    const handleSelect = e => { 
        e.preventDefault()
        setState({ sortBy: e.target.value }) 
    }

    useEffect(()=> {              
        let vehicles = []  

        // First check props:
        if(!props.location.state == null){
            setState( {options: {
                make: props.location.state.make || 'All',
                model: props.location.state.model || 'All',
                minPrice: props.location.state.minPrice || 0,
                maxPrice: props.location.state.maxPrice || 500000,
                isNew: props.location.state.isNew || 'All'
            }})
        }

        // Make api call:
        axios.get("https://ult-car-sales.herokuapp.com/vehicles")
        .then(res=> {
            let results = res.data.data      
            results.forEach(car=> {
                if(
                    checkIsNew(car, state.options.isNew) &&
                    checkPrice(car, state.options.minPrice, state.options.maxPrice) &&
                    checkMake(car, state.options.make) &&
                    checkModel(car, state.options.model)                
                ){
                    vehicles.push( car )
                } 
            })
            dispatch( setVehicles(vehicles) ) 
        })
        .catch(err => {
            console.log('Unable to make api call.', err)
        })              
    }, [])

    return(
        <section className='search-pg'>
            <div className='banner-s'/>
            <div className='search-container'>
                <FilterBar vehicles={vehicles} options={state.options}/>
                <div className='results-container'>
                    <div className='sort-by'>
                        <p>Sort By: </p>
                        <select onChange={handleSelect} value={state.sortBy}>
                            <option value={'Newest'}>Newest</option>
                            <option value={'Year (Asc)'}>Year (Ascending)</option>
                            <option value={'Year (Desc)'}>Year (Descending)</option>
                            <option value={'Price (Asc)'}>Price (Ascending)</option>
                            <option value={'Price (Desc)'}>Price (Descending)</option>
                        </select>
                    </div>
                    <div className='card-container'>
                        {state.resultsError === true && !vehicles && (
                            <h4 className='search-error'>There was an error running your search.</h4>
                        )}

                        {state.resultsError === false && !vehicles && (
                            <ReactLoading type={'cylon'} color={'gold'} height={'20%'} width={'20%'} />
                        )}
                        {state.resultsError === false && vehicles.length === 0 && (
                            <h4 className='search-error'> Your search results returned nothing.</h4>
                        )}

                        {state.resultsError === false && vehicles && vehicles.map(car=> (
                            <Card key={car._id} car={car}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search;