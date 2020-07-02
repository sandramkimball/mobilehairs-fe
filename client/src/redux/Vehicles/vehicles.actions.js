import vehiclesTypes from './vehicles.types'

export const addVehicleStart = vehicleData => ({
    type: vehiclesTypes.ADD_NEW_VEHICLE_START,
    payload: vehicleData
})

export const fetchVehiclesStart = () => ({
    type: vehiclesTypes.FETCH_VEHICLES_START
})

export const setVehicles = vehicles => ({
    type: vehiclesTypes.SET_VEHICLES,
    payload: vehicles
})

export const deleteVehiclesStart = vehicleID => ({
    type: vehiclesTypes.DELECTE_VEHICLE_START,
    payload: vehicleID
})
