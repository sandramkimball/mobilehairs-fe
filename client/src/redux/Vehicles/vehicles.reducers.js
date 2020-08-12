import vehiclesTypes from './vehicles.types'

export const INITIAL_STATE = {
    vehicles: [],
    inventoryStats:[]
}

const vehiclesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case vehiclesTypes.SET_VEHICLES:
            return {
                ...state,
                vehicles: action.payload
            }
        case vehiclesTypes.SET_INVENTORY_STATS:
            return {
                ...state,
                inventoryStats: action.payload
            }
        default:
            return state
    }
}

export default vehiclesReducer;