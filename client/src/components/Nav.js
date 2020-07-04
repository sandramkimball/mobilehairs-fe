import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    render(){
        return (
            <nav>
                <h4>Private Luxury Car Sales</h4>
                <ul>
                    <li><Link to='home'>Home</Link></li>
                    <li><Link to='map'>Map</Link></li>
                    <li><Link to='search'>Search</Link></li>
                    <li><Link to='login'>Login</Link></li>
                    <li><Link to='Registration'>Sign Up</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;