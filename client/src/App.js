import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';

//Pages
import Map from './pages/Map';
import Home from './pages/Home';
import Search from './pages/Search';
import Vehicle from './pages/Vehicle';

const searchRoute = `/search-${searchValue}`

function App() {
    return (
        <div className='App'>
            <Router>
                <Nav/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/Map' component={Map}/>
                    <Route path={searchRoute} component={Search}/>
                    <Route path='/Vehicle' component={Vehicle}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    )
}

export default App;