import React from 'react';
import { useHistory } from 'react-router-dom'

function AddVehicle () {    
    const history = useHistory()
    const handleChange = (e, value) => {
        e.preventDefault
        console.log(value)
    }
    const handleSelect = (e, value) => {
        e.preventDefault
        console.log(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault
        console.log('Whoo')
        history.push('/Vehicles')
    }

    let typeInOpt = ['make', 'model', 'year', 'miles', 'price', 'vin', 'description']
    let dropdownOpt = [
        {'engine': ['4 Cyl', '6 Cyl', '8 Cyl', 'Electric']}, 
        {'body': ['Pickup', 'Sedan', 'Coupe', 'Hatchback', 'SUV','Minivan']}, 
        {'drive': ['4WD', 'FWD', 'RWD', 'AWD']}, 
        {'transmission': ['Automatic', 'Manual']}, 
        {'fuel': ['Gasoline', 'Diesel', 'Hybrid', 'Electric']}, 
        {'color': ['black', 'blue', 'red', 'white', 'gray', 'yellow', 'tan', 'other']}
    ]

    return (
        <section>
            <form onSubmit={handleSubmit}>
                {dropdownOpt.map(option=> (
                    <select id={option[0]}>
                        {option[1].map(val=> (
                            <option value={val} onSelect={e=>handleSelect(e, value)}>{val}</option>
                        ))}
                    </select>
                ))}
                
                {typeInOpt.map(option=> (
                    <input 
                        type='text'
                        name={option}
                        value={option}
                        onChange={e=> handleChange(e,option)}                       
                    />
                ))}
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </section>
    )
}

export default AddVehicle;