import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { typeInOpt, dropdownOpt, colorsList } from '../data'
import './AddVehicle.scss'

// Context & Reducers
import { addVehicleStart } from '../redux/Vehicles/vehicles.actions'
import { useDispatch, useSelector } from 'react-redux';

function AddVehicle () {    
    const dispatch = useDispatch();
    const history = useHistory()
    const [error, setError] = useState(false)
    const [data, setData] = useState({
        make: '',
        model: '',
        year: null,
        body: '',
        engine: '',
        drive: '',
        miles: 0,
        color: '',
        price: 0,
        isNew: false,
        profile_img: '',
        features: [],
        images: [],
        tags: [],
    })

    const handleSelect = e => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const handleAddFeature = (e, value) => {
        e.preventDefault()
        data.features.push(value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(error === false){
            console.log('Whoo')
            dispatch( addVehicleStart(data) )
            history.push('/search')
        } else {
            
        }
    }


    return (
        <section>
            <form onSubmit={handleSubmit}>     
                <div>
                    <p>New or Used?</p>
                    <select onChange={handleSelect} name={'isNew'}>
                        <option value='true'>New</option>
                        <option value='false'>Used</option>
                    </select>
                                
                    <p>Engine</p>
                    <select onChange={handleSelect} name={'engine'}>
                        <option value='4 Cyl'>4 Cyl</option>
                        <option value='6 Cyl'>6 Cyl</option>
                        <option value='8 Cyl'>8 Cyl</option>
                        <option value='12 Cyl'>12 Cyl</option>
                        <option value='electric'>Electric</option>
                    </select>   

                    <p>Body</p>
                    <select onChange={handleSelect} name={'body'}>
                        <option value='pickup'>Pickup</option>
                        <option value='sedan'>Sedan</option>
                        <option value='coupe'>Coupe</option>
                        <option value='hatchback'>Hatchback</option>
                        <option value='SUV'>SUV</option>
                    </select>

                    <p>Transmission</p>
                    <select onChange={handleSelect} name={'transmission'}>
                        <option value='pickup'>Manual</option>
                        <option value='sedan'>Automatic</option>
                    </select>

                    <p>Fuel</p>
                    <select onChange={handleSelect} name={'fuel'}>
                        <option value='gasoline'>Gasoline</option>
                        <option value='electric'>Electric</option>
                        <option value='diesel'>Diesel</option>
                    </select>
                    
                    <p>Color</p>
                    <select onChange={handleSelect} name={'color'}>
                    {colorsList.map(color=> (
                        <option name='color' value={color}>{color}</option>
                    ))}
                    </select>
                </div>
                <div>
                    {typeInOpt.map(option=> (
                        <>
                        <p>{option}</p>
                        <input 
                            type='text'
                            name={option}
                            value={data.option}
                            onChange={handleSelect}                       
                        />
                        </>
                    ))}
                </div>
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </section>
    )
}

export default AddVehicle;