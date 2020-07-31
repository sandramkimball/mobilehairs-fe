import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { typeInOpt, colorsList } from '../data'
import axios from 'axios'
import './AddVehicle.scss'

// Context & Reducers
import { addVehicleStart } from '../redux/Vehicles/vehicles.actions'
import { useDispatch, useSelector } from 'react-redux';

function AddVehicle () {    
    const dispatch = useDispatch();
    const history = useHistory()
    const [tempFeat, setTempFeat] = useState('')
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
    const handleAddFeature = e => {
        e.preventDefault()
        setTempFeat(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        // First, break up tempFeat string into each feature and add to features array.
        let temp = tempFeat.split('. ')
        temp.forEach(feature=> (
           data.features.push(feature)
        )) 

        console.log('data', data)
        //Second, post data.
        // dispatch( addVehicleStart(data) )
        axios.post("https://ult-car-sales.herokuapp.com/vehicles", data)
        .then((res)=> {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        history.push('/search')
    }


    return (
        <section>
            <h2>Add Vehicle</h2>
            <form onSubmit={handleSubmit} className='add-form'>     
                <div>
                    <p>New or Used?</p>
                    <select onChange={handleSelect} name={'isNew'}>
                        <option value=''>--</option>
                        <option value='true'>New</option>
                        <option value='false'>Used</option>
                    </select>
                                
                    <p>Engine</p>
                    <select onChange={handleSelect} name={'engine'}>
                        <option value=''>--</option>
                        <option value='4 Cyl'>4 Cyl</option>
                        <option value='6 Cyl'>6 Cyl</option>
                        <option value='8 Cyl'>8 Cyl</option>
                        <option value='12 Cyl'>12 Cyl</option>
                        <option value='electric'>Electric</option>
                    </select>   

                    <p>Body</p>
                    <select onChange={handleSelect} name={'body'}>
                        <option value=''>--</option>
                        <option value='pickup'>Pickup</option>
                        <option value='sedan'>Sedan</option>
                        <option value='coupe'>Coupe</option>
                        <option value='hatchback'>Hatchback</option>
                        <option value='suv'>SUV</option>
                        <option value='other'>Other</option>
                    </select>

                    <p>Transmission</p>
                    <select onChange={handleSelect} name={'transmission'}>
                        <option value=''>--</option>
                        <option value='pickup'>Manual</option>
                        <option value='sedan'>Automatic</option>
                    </select>

                    <p>Drive</p>
                    <select onChange={handleSelect} name={'drive'}>
                        <option value=''>--</option>
                        <option value='AWD'>AWD</option>
                        <option value='FWD'>FWD</option>
                        <option value='RWD'>RWD</option>
                        <option value='4WD'>4WD</option>
                    </select>

                    <p>Fuel</p>
                    <select onChange={handleSelect} name={'fuel'}>
                        <option value=''>--</option>
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
                        <p>{option.slice(0,1).toUpperCase()}{option.slice(1)}</p>
                        <input 
                            name={option}
                            value={data.option}
                            onChange={handleSelect}                       
                        />
                        </>
                    ))}
                    <p>Features</p>
                     <textarea
                        type='text'
                        name={tempFeat}
                        value={tempFeat}
                        onChange={handleAddFeature}
                    />
                    <p className='sub-tag'>*Please separate feautres with a period.</p>
                </div>
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </section>
    )
}

export default AddVehicle;