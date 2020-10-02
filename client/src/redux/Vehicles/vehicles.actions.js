import vehiclesTypes from './vehicles.types'

export const searchVehicles = vehicleData => ({
    type: vehiclesTypes.SEARCH_VEHICLES,
    payload: vehicleData
})

export const addVehicleStart = vehicleData => ({
    type: vehiclesTypes.ADD_VEHICLE_START,
    payload: vehicleData
})

export const fetchVehiclesStart = () => ({
    type: vehiclesTypes.FETCH_VEHICLES_START
})

export const setVehicles = vehicles => ({
    type: vehiclesTypes.SET_VEHICLES,
    payload: vehicles
})

export const setInventoryStats = (stats) => ({
    type: vehiclesTypes.SET_INVENTORY_STATS,
    payload: stats
})

export const deleteVehicleStart = vehicleID => ({
    type: vehiclesTypes.DELETE_VEHICLE_START,
    payload: vehicleID
})
