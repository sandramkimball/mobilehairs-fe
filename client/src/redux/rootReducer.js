import { combineReducers } from 'redux'

import vehiclesReducer from './Vehicles/vehicles.reducers'

export default combineReducers({
    vehiclesData: vehiclesReducer
})