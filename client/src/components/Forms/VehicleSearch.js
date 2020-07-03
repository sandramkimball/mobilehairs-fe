import React, { useState } from 'react'
import RangeSlider from '../Slider'
import { useHistory } from 'react-router-dom'

const VehicleSearch = () => {
    const [options, setOptions] = useState({
        isNew: null,
        make: null,
        model: null,
        price: [0, 100000],
    })
    const history = useHistory()
    const handleSubmit = e => {
        console.log('handle submit')
        // history.push('/search')
    }

    const handleSelect = e => {
        setOptions({...options, [e.target.name]: e.target.value})
    }
    const handleSlider = e => {
        setOptions({min: e.target.min, max: e.target.max})
    }
    
    return(
        <section className='vehicle-search'>
            <form onSubmit={handleSubmit}>
                <p>New or Used?</p>
                <select id='new-or-used' onChange={setOptions}>
                    <option name='isNew' value='null'>All</option>
                    <option name='isNew' value='true'>New</option>
                    <option name='isNew' value='false'>Used</option>
                </select>

                <p>Make</p>
                <select id='make' onChange={handleSelect}>
                    <option name='make' value={null}>All Makes</option>
                    <option name='make' value={'Toyota'}>Toyota</option>
                    <option name='make' value={'Mazda'}>Mazda</option>
                    <option name='make' value={'BMW'}>BMW</option>
                </select> 

                <p>Model</p>
                <select id='model' onChange={handleSelect}>
                    <option name='model' value={null}>All Models</option>
                    <option name='model' value='Ram 1500'>Ram 1500</option>
                    <option name='model' value='Mazda3'>Mazda3</option>
                    <option name='model' value='4-Series'>4-Series</option>                    
                </select>

                <p>Price Range</p>
                <RangeSlider min={options.price[0]} max={options.price[1]} rangeType={'Price'} onChange={handleSlider}/>
                <button type='submit'>Search</button>
            </form>
        </section>

    )
}

export default VehicleSearch