import React, { useState } from 'react';
import './FilterBar.scss';
import { colorsList } from '../data/index.js';

function FilterBar ({ options, vehicles }) {
    const [isSelected, setIsSelected] = useState('')
    const [filterOptions, setOptions] = useState({
        isNew: options.isNew || 'All',
        make: options.make || 'All',
        model: options.model || 'All',
        year: '',
        body: 'All',
        color: 'All',
        minPrice: options.minPrice || 0,
        maxPrice: options.maxPrice || '',
        minMiles: 0,
        maxMiles: '',
        minYear: '',
        maxYear: ''
    })

    const handleSelect = e => {
        setOptions({ [e.target.name]: e.target.value})
    }
    
    const handleReset = e => {
        setOptions({
            isNew: 'All',
            make: 'All',
            model: 'All',
            minPrice: 0,
            maxPrice: 500000,
        })

    }
    
    const handleColorCheck = e => {
        isSelected==='selected' ? setIsSelected('') : setIsSelected('selected')
    }

    const handleSubmit = e => {
        console.log('how to get the search results to respond!')
    }

    return (
        <section className='filter-bar'>
            {/* Dropdown options */}
            <p>New or Used?</p>
            <select onChange={handleSelect} value={filterOptions.isNew}>
                <option value={'All'}>All</option>
                <option value='true'>New</option>
                <option value='false'>Used</option>
            </select>

            <p>Make</p>
            <select onChange={handleSelect} value={filterOptions.make}>
                <option name='make' value='All'>All</option>
                {vehicles.map((car, index)=> (
                    <option key={index} name='make' value={car.make}>{car.make}</option>
                ))}
            </select> 
           
            <p>Model</p>
            <select onChange={handleSelect} value={filterOptions.model}> 
                <option value='All'>All</option>
                
                {options.make != null && vehicles.map((car, index) => (
                    <option key={index} value={car.model}>{car.model}</option>
                ))}
            </select>

            {/* Checkbox options */}
            <p>Color</p>
            <fieldset className='select-color-checkboxes'>
                <div className='list-container'>
                    <ul value={filterOptions.color}>                        
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

            <p>Price</p>
            <div className='option-range'>
                <input 
                    type='text'
                    name='minPrice'
                    value={filterOptions.minPrice}
                    onChange={handleSelect}
                />
                <p>to</p>
                <input 
                    type='text'
                    name='maxPrice'
                    value={filterOptions.maxPrice}
                    onChange={handleSelect}
                />
            </div>

            <p>Miles</p>
            <div className='option-range'>
                <input 
                    type='text'
                    name='minMiles'
                    value={filterOptions.minMiles}
                    placeholder='0'
                    onChange={handleSelect}
                />
                <p>to</p>
                <input 
                    type='text'
                    name='maxMiles'
                    value={filterOptions.maxMiles}
                    placeholder='0'
                    onChange={handleSelect}
                />
            </div>

            <p>Year</p>
            <div className='option-range'>
                <input 
                    type='text'
                    name='minYear'
                    value={filterOptions.minYear}
                    placeholder='0'
                    onChange={handleSelect}
                />
                <p>to</p>
                <input 
                    type='text'
                    name='maxYear'
                    value={filterOptions.maxYear}
                    placeholder='0'
                    onChange={handleSelect}
                />
            </div>
        
            <div style={{display: 'flex', margin: 'auto'}}>
                <button type='submit' onSubmit={handleSubmit}>Submit</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            
        </section>
    )
}

export default FilterBar;