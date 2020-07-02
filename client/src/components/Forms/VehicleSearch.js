import React from 'react'

const VehicleSearch = () => {
    const [options, setOptions] = useState({
        isNew: null,
        make: null,
        model: null,
        price: null,
    })
    

    const handleSelect = e => {
        setOptions({ [e.target.name]: e.target.value})
    }
    
    return(
        <section>
            <h2>Start Your Search</h2>
            <form>
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

                <RangeSlider min={0} max={100000} rangeType={'Price'} />
            </form>
        </section>

    )
}

export default VehicleSearch