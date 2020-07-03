import React from 'react';
import { Link } from 'react-router-dom'
import './Home.scss'
import VehicleSearch from '../components/Forms/VehicleSearch'

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    render(){
        return (
            <section className='home'>
                <div className='banner-1'>
                    <div className='banner-img1'/>
                    <VehicleSearch/>
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
}

export default Home;