import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    render(){
        return (
            <section>
                <div className='banner-1'>
                    <h1>We Bring Beauty to You</h1>
                </div>
            </section>
        )
    }
}

export default Home;