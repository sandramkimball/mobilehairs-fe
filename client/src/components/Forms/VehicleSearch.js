import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const VehicleSearch = () => {
    const history = useHistory()
    const [options, setOptions] = useState({
        isNew: 'All',
        make: 'All',
        model: 'All',
        minPrice: 0,
        maxPrice: 500000
    })

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
                    <option name='make' value={'Dodge'}>Dodge</option>
                    <option name='make' value={'Mazda'}>Mazda</option>
                    <option name='make' value={'BMW'}>BMW</option>
                </select> 

                <p>Model</p>
                <select name='model' value={options.model} onChange={handleSelect}>
                    <option name='model' value={'All'}>All Models</option>
                    <option name='model' value='Ram 1500'>Ram 1500</option>
                    <option name='model' value='Mazda3'>Mazda3</option>
                    <option name='model' value='4-Series'>4-Series</option>                    
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