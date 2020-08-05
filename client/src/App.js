import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss'

// State Management Context Providers
import UserProvider from './redux/User/user.context'
import DataProvider from './redux/Vehicles/vehicles.context'

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';

//Pages
import Map from './pages/Map';
import About from './pages/About';
import Home from './pages/Home';
import Search from './pages/Search';
import VehicleDetails from './pages/VehicleDetails';
import Login from './pages/Login';
import Registration from './pages/Registration';
import AddVehicle from './components/AddVehicle';


function App() {
    return (
        <div className='App'>
            <UserProvider>
            <DataProvider>
            <Router>
                <Nav/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/map' component={Map}/>
                    <Route path='/about' component={About}/>
                    <Route path='/search' component={Search}/>
                    <Route path='/vehicle' component={VehicleDetails}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/registration' component={Registration}/>
                    <Route path='/sell' component={AddVehicle}/>
                </Switch>
                <Footer/>
            </Router>
            </DataProvider>
            </UserProvider>
        </div>
    )
}

export default App;