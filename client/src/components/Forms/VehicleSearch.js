import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const VehicleSearch = ({ inventoryStats }) => {
    const history = useHistory()
    const [options, setOptions] = useState({
        isNew: 'All',
        make: 'All',
        model: 'All',
        minPrice: 0,
        maxPrice: 1000000
    })

    const [availableVals, setAvailableVals] = useState({
        makes: [],
        models: [],
        maxPrice: 0,
        years: [1959, 2020]
    })

    useEffect(()=>{
        if(inventoryStats.length === 0 ){
            console.log('awaiting data')            
        }
        else {
            console.log("Inventory Stats!", inventoryStats)
            let mostExpensive = Object.values(inventoryStats[2])
            let years = Object.values(inventoryStats[1])
            let allMakes = inventoryStats[0]
        
 
            setAvailableVals({
                makes: allMakes,
                maxPrice: mostExpensive,
                models: "Ferfrari",
                years: years
            })
        }
    }, [])

    const handleSelect = e => {
        setOptions({...options, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        history.push({
            pathname: '/search',
            search: `?query=${options.make}-${options.model}`,
            state: {
                make: options.make, 
                model: options.model, 
                isNew: options.isNew, 
                minPrice: options.minPrice,
                maxPrice: options.maxPrice
            }
        })
    }

    
    return(
        <section className='vehicle-search'>
            <form onSubmit={handleSubmit}>
                <p>New or Used?</p>
                <select name='isNew' value={options.isNew} onChange={handleSelect}>
                    <option name='isNew' value={'All'}>All</option>
                    <option name='isNew' value={true}>New</option>
                    <option name='isNew' value={false}>Used</option>
                </select>

                <p>Make</p>
                <select name='make' value={options.make} onChange={handleSelect}>
                    <option name='make' value={'All'}>All Makes</option>
                    {availableVals.makes.map( car => (
                        <option name='make' value={car}>{car}</option>
                    ))}
                </select> 

                <p>Model</p>
                <select name='model' value={options.model} onChange={handleSelect}>
                    <option name='model' value={'All'}>--</option>
                    {availableVals && availableVals.models.map( car => (
                        <option name='model' value={car}>{car}</option>
                    ))}
                </select>

                <p>Price Range</p>
                <div className='price-range'>
                    <p>from</p>
                    <input 
                        value={options.minPrice} 
                        name='minPrice'
                        onChange={handleSelect}
                    />
                    <p>to</p>
                    <input 
                        value={options.maxPrice}
                        name='maxPrice'
                        onChange={handleSelect}
                    />
                </div>
                <button type='submit'>Search</button>
            </form>
        </section>

    )
}

export default VehicleSearch