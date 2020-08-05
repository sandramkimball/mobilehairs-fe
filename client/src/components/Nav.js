import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
// Redux
import { signOutUserSuccess } from '../redux/User/user.actions'
import { useDispatch, useSelector } from 'react-redux'

const mapState = ({ userData }) => ({
    currentUser: userData.currentUser
});

const Nav = () => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector( mapState )
    const [ state, setState] = useState({
        posts: [],
        subDisplay: "none",
    })
    

    const handleHover = e => {
        setState({subDisplay: 'flex'})
    }

    const handleMouseLeave = e => {
        setState({subDisplay: 'none'})
    }

    return (
        <>
        <nav>
            <h4>Private Luxury Car Sales</h4>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li onMouseEnter={handleHover}><Link to='map'>About</Link></li>
                <li onMouseEnter={handleHover}><Link to='search'>Explore</Link></li>
                
                {currentUser && (
                    <>
                        <li onClick={ dispatch(signOutUserSuccess) }>
                            <Link to='/'>Logout</Link>
                        </li>
                        <li><Link to='sell'>Sell</Link></li>
                    </>
                )}
                {!currentUser && (
                    <>
                        <li><Link to='Registration'>Sign Up</Link></li>
                        <li><Link to='login'>Login</Link></li>
                    </>
                )}
            </ul>
        </nav>
        <div className='sub-list' style={{display: state.subDisplay}} onMouseLeave={handleMouseLeave}>
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

export default Nav;