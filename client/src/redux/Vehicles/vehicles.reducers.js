import vehiclesTypes from './vehicles.types'

const INITIAL_STATE = {
    vehicles: []
}

const vehiclesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case vehiclesTypes.SET_VEHICLES:
            return {
                ...state,
                vehicles: action.payload
            }
        default:
            return state
    }
}

export default vehicleReducer;