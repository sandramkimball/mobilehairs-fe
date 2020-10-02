import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Context & Reducers
import { useDispatch, useSelector } from 'react-redux';


const VehicleSearch = (stats) => {
    const history = useHistory()
    const [ selected, setSelected ] = useState({
        isNew: 'All',
        make: 'All',
        model: 'All',
        minPrice: 0,
        maxPrice: 10000000,
    })
    const [ availableOpts, setAvailableOpts ] = useState({
        makes: [],
        models: [],
        maxPrice: 100000005,
        years: [1959, 2020]
    })

    useEffect(()=>{
        /*stats: [
            [ {'Dodge': [...]}, {...}, {...} ],
            { allYears: [1999, 2001, 2005, ...] },
            { maxPrice: 1300500 }
        ]*/
        const load = async () => {
            let st = await stats.stats
            let allMakes = [];
            let minMaxYrs = [];

            if(st.length > 0){
                await st[0].map( car=> allMakes.push( Object.keys(car) ) );
                await minMaxYrs.push( Object.values(st[1])[0][0] );
                await minMaxYrs.push( Object.values(st[1])[0][1] );
                setAvailableOpts({
                    ...availableOpts,
                    makes: allMakes,
                    years: minMaxYrs
                })
                setSelected({ ...selected, maxPrice: st[2].maxPrice })
        }}      
        load()        
    }, [stats.stats])

    const handleSelect = e => {
        setSelected({...selected, [e.target.name]: e.target.value})
    }
    const handleSetModels = ( make ) => {
        stats.stats[0].map( car => {
            if( Object.keys(car)[0] === make){
                let modelVals = ['All']
                Object.values(car)[0].map(car=> modelVals.push(car));
                setAvailableOpts({...availableOpts, models: modelVals })
            }
        })        
    }
    const handleSelectMake = e => {
        setSelected({...selected, make: e.target.value})
        handleSetModels(e.target.value)
    }
    const handleSubmit = e => {
        history.push({
            pathname: '/search',
            search: `?query=${selected.make}-${selected.model}`,
            state: {
                make: selected.make, 
                model: selected.model, 
                isNew: selected.isNew, 
                minPrice: selected.minPrice,
                maxPrice: selected.maxPrice
            }
        })
    }

    
    return(
        <section className='vehicle-search'>
            <form onSubmit={handleSubmit}>
                <p>New or Used?</p>
                <select name='isNew' value={selected.isNew} onChange={handleSelect}>
                    <option name='isNew' value={'All'}>All</option>
                    <option name='isNew' value={true}>New</option>
                    <option name='isNew' value={false}>Used</option>
                </select>

                <p>Make</p>
                <select name='make' value={selected.make} onChange={handleSelectMake}>
                    <option name='make' value={'All'}>All Makes</option>
                    {availableOpts.makes && availableOpts.makes.map( car => (
                        <option name='make' value={car}>{car}</option>
                    ))}
                </select> 

                <p>Model</p>
                <select name='model' value={selected.model} onChange={handleSelect}>
                    {availableOpts.models.length === 0 && (
                        <option name='model' value={'All'}>--</option>
                    )}
                    {availableOpts.models.length > 0 && availableOpts.models.map( car => (
                        <option name='model' value={car}>{car}</option>
                    ))}
                    
                </select>

                <p>Price Range</p>
                <div className='price-range'>
                    <p>from</p>
                    <input 
                        value={`$${selected.minPrice}`} 
                        name='minPrice'
                        onChange={handleSelect}
                    />
                    <p>to</p>
                    <input 
                        value={`$${selected.maxPrice}`}
                        name='maxPrice'
                        onChange={handleSelect}
                    />
                </div>
                <button type='submit'>Search</button>
            </form>
        </section>

    )
}

export default VehicleSearch