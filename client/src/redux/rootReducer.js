import { combineReducers } from 'redux'

import vehiclesReducer from './Vehicles/vehicles.reducers'
import userReducer from './User/user.reducers'

export default combineReducers({
    userData: userReducer,
    vehiclesData: vehiclesReducer
})