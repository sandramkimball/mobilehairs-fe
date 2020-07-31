import vehiclesTypes from './vehicles.types'

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

export const deleteVehicleStart = vehicleID => ({
    type: vehiclesTypes.DELECTE_VEHICLE_START,
    payload: vehicleID
})
