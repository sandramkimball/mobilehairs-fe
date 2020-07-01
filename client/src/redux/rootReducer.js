import { combineReducers } from 'redux'

import userReducer from './User/user.reducer'
import vehiclesReducer from './Vehicle/vehicle.reducer'

export default combineReducers({
    user: userReducer,
    vehiclesData: vehiclesReducer
})