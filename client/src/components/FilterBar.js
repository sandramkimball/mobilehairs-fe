import React, { useState, useEffect } from 'react';
import './FilterBar.scss';

function FilterBar ({vehicles}) {
    const [isSelected, setIsSelected] = useState('')
    const [options, setOptions] = useState({
        isNew: null,
        make: null,
        model: null,
        year: null,
        body: null,
        color: null,
        minPrice: null,
        maxPrice: null,
        minMiles: null,
        maxMiles: null,
        minYear: null,
        maxYear: null
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
        setOptions({ [e.target.name]: e.target.value})
    }

    const handleColorCheck = e => {
        isSelected==='selected' ? setIsSelected('') : setIsSelected('selected')
    }

    const colorsList = ['Blue', 'Yellow', 'Red', 'Green', 'Black', 'White', 'Brown', 'Tan', 'Silver', 'Multi']

    return (
        <section className='filter-bar'>
            <p>New or Used?</p>
            <select onChange={handleSelect} value={options.isNew}>
                <option value={null}>All</option>
                <option value='true'>New</option>
                <option value='false'>Used</option>
            </select>

            <p>Make</p>
            <select onSelect={handleSelect} value={options.make}>
                <option name='make' value={null}>All</option>
                {vehicles.map(car=> (
                    <option name='make' value={car.make}>{car.make}</option>
                ))}
            </select> 
           
            <p>Model</p>
            <select onSelect={handleSelect} value={options.model}> 
                {options.make == null && (
                    <option>--</option>
                )}
                {options.make != null && vehicles.map(car => (
                    <option value={car.model}>{car.model}</option>
                ))}
            </select>

            <p>Color</p>
            <fieldset className='select-color-checkboxes'>
                <div className='list-container'>
                    <ul value={options.color}>
                        <li className={isSelected} onClick={handleColorCheck}>
                            <input value='null' type='checkbox'/>
                            <label>
                                <div style={{backgroundColor:'white'}} className='color-box'/>
                                <span>Any</span>
                            </label>
                        </li>
                        
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
        </section>
    )
}

export default FilterBar;