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
    })
    
    // const getMakes = (cars) => {
    //     carMakes=[]
    //     cars.map(car=> {
    //         if(!carMakes[car.make]){ 
    //             carMakes.push(car.make)
    //         } 
    //     })
    // }

    // const getModels = (cars) => {
    //     carModels = []
    //     cars.map(car=> {
    //         if(car.make === options.make && !carModels[car.model]){
    //             carModels.push(car.model)
    //         }
    //     })
    // }
    
    let allPrices = vehicles.price.sort()
    let allYears = vehicles.years.sort()
    let allMiles = vehicles.miles.sort()

    const handleSelect = e => {
        setOptions({ [e.target.name]: e.target.value})
    }

    return (
        <section>
            <select id='new-or-used' onSelect={handleSelect()}>
                <option name='isNew' value='null'>All</option>
                <option name='isNew'value='true'>New</option>
                <option name='isNew'value='false'>Used</option>
            </select>

            <select id='make' onSelect={handleSelect()}>
                {vehicles.allMakes.map(make=> (
                    <option name='make' value={make}>{make}</option>
                ))}
            </select> 

            {options.make != null && (
                <select id='model' onSelect={handleSelect()}>
                    {vehicles.model.map(model => (
                        <option>{model}</option>
                ))}
            </select>)}

            
            <select id='color' onSelect={handleSelect()}>
                <option name='color'value='null'>Any</option>
                <option name='color' value='blue'>Blue</option>
                <option name='color'value='red'>Red</option>
                <option name='color'value='black'>Black</option>
                <option name='color'value='yellow'>Yellow</option>
                <option name='color'value='white'>White</option>
            </select>

            <RangeSlider min={allPrices[0].price} max={allPrices[-1].price} rangeType={'Price'} />
            <RangeSlider min={allMiles[0].miles} max={allMiles[-1].miles} rangeType={'Miles'} />
            <RangeSlider min={allYears[0].year} max={allYears[-1].year} rangeType={'Year'} />
        </section>
    )
}

export default FilterBar;