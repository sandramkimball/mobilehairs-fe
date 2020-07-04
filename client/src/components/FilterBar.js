import React, { useState, useEffect } from 'react';
import RangeSlider from './Slider';

function FilterBar ({vehicles}) {
    const [options, setOptions] = useState({
        isNew: null,
        make: null,
        model: null,
        year: null,
        price: null,
        body: null,
        miles: null,
        maxMiles: null,
        maxPrice: null,
        maxYears: null
    })
    
    useEffect(()=> {
        vehicles.map(car=> {
            if(car.price > options.maxPrice){
                setOptions({maxPrice: car.price})
            }
            if(car.miles > options.maxMiles){
                setOptions({maxPrice: car.miles})
            }
            if(car.year > options.maxYear){
                setOptions({maxPrice: car.year})
            }
        })
    }, [vehicles])

    const handleSelect = e => {
        setOptions({ ...options, [e.target.name]: e.target.value})
    }

    return (
        <section className='filter-bar'>
            <p>New or Used?</p>
            <select id='new-or-used' name='isNew' onSelect={handleSelect}>
                <option value='null'>All</option>
                <option value='true'>New</option>
                <option value='false'>Used</option>
            </select>

            <p>Make</p>
            <select id='make' onSelect={handleSelect}>
                <option name='make' value={null}>All</option>
                {vehicles.map(car=> (
                    <option name='make' value={car.make}>{car.make}</option>
                ))}
            </select> 

            {options.make != null && (
                <>
                    <p>Model</p>
                    <select id='model' name='model' onSelect={handleSelect}>
                        {vehicles.map(car => (
                            <option value={car.model}>{car.model}</option>
                    ))}
                    </select>
                </>
            )}
            
            <p>Color</p>
            <select id='color' name='color' onSelect={handleSelect}>
                <option value='null'>Any</option>
                <option value='blue'>Blue</option>
                <option value='red'>Red</option>
                <option value='black'>Black</option>
                <option value='yellow'>Yellow</option>
                <option value='white'>White</option>
            </select>

            <p>Price</p>
            <RangeSlider max={options.maxPrice} rangeType={'Price'} />

            <p>Miles</p>
            <RangeSlider max={options.maxMiles} rangeType={'Miles'} />

            <p>Year</p>
            <RangeSlider max={options.maxYears} rangeType={'Year'} />

            <button type='submit'>Submit</button>
        </section>
    )
}

export default FilterBar;