import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            subDisplay: "none",
        }
        this.handleHover = this.handleHover.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    handleHover = e => {
        this.setState({subDisplay: 'flex'})
    }

    handleMouseLeave = e => {
        this.setState({subDisplay: 'none'})
    }

    render(){
        return (
            <>
            <nav>
                <h4>Private Luxury Car Sales</h4>
                <ul>
                    <li><Link to='home'>Home</Link></li>
                    <li onMouseEnter={this.handleHover}><Link to='map'>About</Link></li>
                    <li onMouseEnter={this.handleHover}><Link to='search'>Explore</Link></li>
                    <li><Link to='login'>Login</Link></li>
                    {/* {!user && <li><Link to='login'>Logout</Link></li>} */}
                    <li><Link to='Registration'>Sign Up</Link></li>
                </ul>
            </nav>
            <div className='sub-list' style={{display: this.state.subDisplay}} onMouseLeave={this.handleMouseLeave}>
                <ul>
                    <h4>About</h4>
                    <li><Link to='about'>Mission</Link></li>
                    <li><Link to='about'>Team</Link></li>
                    <li><Link to='map'>Contact Us</Link></li>
                    <li><Link to='map'>Visit</Link></li>
                </ul>
                <ul>
                    <h4>Explore</h4>
                    <li><Link to='search'>Inventory</Link></li>
                    <li><Link to='search' year={2020}>New</Link></li>
                    <li><Link to='search' tag={'sport'}>Sports</Link></li>
                    <li><Link to='search' tag={'off-road'}>Off Road</Link></li>
                    <li><Link to='search' tag={'classig'}>Classic</Link></li>
                </ul>
            </div>
            </>
        )
    }
}

export default Nav;