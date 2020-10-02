import React, { useEffect } from 'react';
import axios from 'axios';
import './Home.scss';
import VehicleSearch from '../components/Forms/VehicleSearch';

// Context & Reducers
import { setInventoryStats } from '../redux/Vehicles/vehicles.actions'
import { useDispatch, useSelector } from 'react-redux';

const mapState = ({ vehiclesData }) => ({
    inventoryStats: vehiclesData.inventoryStats
})

const Home = () => {
    const dispatch = useDispatch();
    const { inventoryStats } = useSelector( mapState );

    useEffect(()=>{
        axios.get(`https://ult-car-sales.herokuapp.com/data`)
        .then(res=> {
            dispatch( setInventoryStats(res.data.data) )
        })
        .catch(err=> {
            console.log('No Data Received.', err)
        })
    }, [])

    return (
        <section className='home'>
            <div className='banner-1'>
                <div className='banner-img1'/>
                <VehicleSearch stats={inventoryStats}/>
            </div>
            <div className='banner-2'>
                <div className='category tag1'><div className='overlay'><p>Classic</p></div></div>
                <div className='category tag2'><div className='overlay'><p>Sport</p></div></div>
                <div className='category tag3'><div className='overlay'><p>OffRoad</p></div></div>
                <div className='category tag4'><div className='overlay'><p>Other</p></div></div>
            </div>
        </section>
    )
}

export default Home;