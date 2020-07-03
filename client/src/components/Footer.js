import React from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    render(){
        return (
            <footer style={{display: 'flex'}}>
                <ul>
                    <li>Home</li>
                    <li>Social</li>
                    <li>Search</li>
                </ul>
                <ul>
                    <li>1.234.567.8910</li>
                    <li>queries@luxcarsales.com</li>
                </ul>
            </footer>
        )
    }
}

export default Footer;