import React, { useState } from 'react';
import './FilterBar.scss';
import { colorsList } from '../data/index.js';

function FilterBar ({ options, vehicles }) {
    const [isSelected, setIsSelected] = useState('')
    var [allModels, setAllModels] = useState(null)
    const [filterOptions, setOptions] = useState({
        isNew: options.isNew || 'All',
        make: options.make || 'All',
        model: 'All',
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
    
    const handleMakeSelect = e => {
        setOptions({ make: e.target.value})

        // set models
        let temp = ['All']
        vehicles.map( car => {
            if(car.make === e.target.value){
                temp.push(car.model)
            }
        })
        setAllModels(temp);
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
        console.log(filterOptions)
    }

    return (
        <section className='filter-bar'>
            <p>New or Used?</p>
            <select onChange={handleSelect} name='isNew'>
                <option value={'All'}>All</option>
                <option value='true'>New</option>
                <option value='false'>Used</option>
            </select>

            <p>Make</p>
            <select onChange={handleMakeSelect} name='make'>
                <option name='make' value='All'>All</option>
                {vehicles.map((car, index)=> (
                    <option key={index} name='make' value={car.make}>{car.make}</option>
                ))}
            </select> 
           
            <p>Model</p>
            <select onChange={handleSelect} name='model'> 
                {allModels == null && (
                    <option name='model' value='All'>--</option>
                )}
                
                {allModels != null && allModels.map((car, index) => (
                   <option key={index} name="model" value={car}>{car}</option>
                ))}
            </select>

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
                <button type='submit' onClick={handleSubmit}>Submit</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            
        </section>
    )
}

export default FilterBar;