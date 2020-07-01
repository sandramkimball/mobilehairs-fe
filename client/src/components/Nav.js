import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    render(){
        return (
            <section>
                <h4>Cut of Class</h4>
                <ul>
                    <li>Home</li>
                    <li>Locations</li>
                    <li>Blog</li>
                </ul>
            </section>
        )
    }
}

export default Nav;