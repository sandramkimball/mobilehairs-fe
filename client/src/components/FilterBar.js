import React, { useState, useEffect } from 'react';
import './FilterBar.scss';

function FilterBar (props) {
    const [isSelected, setIsSelected] = useState('')
    const [options, setOptions] = useState({
        isNew: props.options.isNew || null,
        make: props.options.make || null,
        model: props.options.model || null,
        year: null,
        body: null,
        color: null,
        minPrice: props.options.minPrice || null,
        maxPrice: props.options.maxPrice || null,
        minMiles: null,
        maxMiles: null,
        minYear: null,
        maxYear: null
    })
    
    useEffect(()=> {
        console.log('FilterBar Options', props.options)
    }, [props.vehicles])

    const handleSelect = e => {
        setOptions({ [e.target.name]: e.target.value})
    }
    
    const handleReset = e => {
        setOptions({
            isNew: null,
            make: null,
            model: null,
            minPrice: 0,
            maxPrice: 10000,
        })
    }
    
    const handleColorCheck = e => {
        isSelected==='selected' ? setIsSelected('') : setIsSelected('selected')
    }

    const colorsList = [
        'All', 
        'Blue', 
        'Yellow', 
        'Red', 
        'Green', 
        'Black', 
        'White', 
        'Brown', 
        'Tan', 
        'Silver', 
        'Multi'
    ]

    return (
        <section className='filter-bar'>
            {/* Dropdown options */}
            <p>New or Used?</p>
            <select onChange={handleSelect} value={options.isNew}>
                <option value={null}>All</option>
                <option value='true'>New</option>
                <option value='false'>Used</option>
            </select>

            <p>Make</p>
            <select onSelect={handleSelect} value={options.make}>
                <option name='make' value={null}>All</option>
                {props.vehicles.map(car=> (
                    <option name='make' value={car.make}>{car.make}</option>
                ))}
            </select> 
           
            <p>Model</p>
            <select onSelect={handleSelect} value={options.model}> 
                {options.make == null && (
                    <option>--</option>
                )}
                {options.make != null && props.vehicles.map(car => (
                    <option value={car.model}>{car.model}</option>
                ))}
            </select>

            {/* Checkbox options */}
            <p>Color</p>
            <fieldset className='select-color-checkboxes'>
                <div className='list-container'>
                    <ul value={options.color}>                        
                        {colorsList.map((color, index)=> (
                            <li key={index} className={isSelected} onClick={handleColorCheck}>
                                <input value={color.toLowerCase()} type='checkbox'/>
                                <label>
                                    <div style={{backgroundColor:color}} className='color-box'/>
                                    <span>{color}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </fieldset>

            {/* Range Sliders */}
            <p>Price</p>
            <div className='option-range'>
                <input 
                    type='text'
                    name='minPrice'
                    value={options.minPrice}
                    placeholder='0'
                />
                <p>to</p>
                <input 
                    type='text'
                    name='maxPrice'
                    value={options.maxPrice}
                    placeholder='0'
                />
            </div>

            <p>Miles</p>
            <div className='option-range'>
                <input 
                    type='text'
                    name='minMiles'
                    value={options.minMiles}
                    placeholder='0'
                />
                <p>to</p>
                <input 
                    type='text'
                    name='maxMiles'
                    value={options.maxMiles}
                    placeholder='0'
                />
            </div>

            <p>Year</p>
            <div className='option-range'>
                <input 
                    type='text'
                    name='minYear'
                    value={options.minYear}
                    placeholder='0'
                />
                <p>to</p>
                <input 
                    type='text'
                    name='maxYear'
                    value={options.maxYear}
                    placeholder='0'
                />
            </div>
        
            <button type='submit'>Submit</button>
            <button onClick={handleReset}>Reset</button>
        </section>
    )
}

export default FilterBar;