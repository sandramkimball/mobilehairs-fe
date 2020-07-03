import { combineReducers } from 'redux'

import userReducer from './User/user.reducer'
import vehiclesReducer from './Vehicles/vehicles.reducers'

export default combineReducers({
    user: userReducer,
    vehiclesData: vehiclesReducer
})