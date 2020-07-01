import React, { useState } from 'react';
import RangeSlider from './Slider';

function FilterBar (props) {
    const [options, setOptions] = useState({
        isNew: null,
        make: null,
        model: null,
        year: null,
        price: null,
        body: null,
        miles: null,
    })
    
    let allMakes = props.cars.make.reduce()
    let allModels = props.cars.makes.reduce()
    let allPrices = props.cars.price.sort()
    let allYears = props.cars.years.sort()
    let allMiles = props.cars.miles.sort()

    const handleSelect = e => {
        setOptions({ [e.target.name]: e.target.value})
    }

    return (
        <section>
            {/* <ul>
                <li>Body Type</li>
                <li>Engine</li>
            </ul> */}

            <select id='new-or-used' onSelect={handleSelect()}>
                <option name='isNew' value='null'>All</option>
                <option name='isNew'value='true'>New</option>
                <option name='isNew'value='false'>Used</option>
            </select>

            <select id='make' onSelect={handleSelect()}>
                {props.cars.allMakes.map(make=> (
                    <option name='make' value={make}>{make}</option>
                ))}
            </select> 

            {options.make != null && (
                <select id='model' onSelect={handleSelect()}>
                    {props.cars.model.map(model => (
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