import vehiclesTypes from './vehicles.types'
import { takeLatest, put, all, call } from 'redux-saga/effects'
import { setVehicles, fetchVehiclesStart } from './vehicles.actions'
import { handleAddVehicle, handleFetchVehicles, handleDeleteVehicle } from './vehicles.helpers'


// ADD NEW CAR
export function* addVehicle( vehicle ) {
    try {
        yield handleAddVehicle(vehicle);
        yield put(
            fetchVehiclesStart()
        )
    } 
    catch ( err ){
        console.log(err)
    }
}
export function* onAddVehicleStart(vehicle){
    yield takeLatest(vehiclesTypes.ADD_VEHICLE_START, addVehicle(vehicle))
}

// GET CARS
export function* fetchVehicles(){
    try{
        const vehicles = yield fetchVehiclesStart();
        yield handleFetchVehicles(
            setVehicles( vehicles )
        )
    }
    catch(err){
        console.log(err)
    }
}
export function* onFetchVehiclesStart(){
    yield takeLatest(vehiclesTypes.FETCH_VEHICLES_START, fetchVehicles)
}

// DELETE CAR
export function* deleteVehicle({payload}){
    try{
        yield handleDeleteVehicle(payload)
        yield put (
            fetchVehiclesStart()
        )
    }
    catch(err){
        console.log(err)
    }
}
export function* onDeleteVehicleStart(){
    yield takeLatest(vehiclesTypes.DELETE_VEHICLE_START, deleteVehicle)
}


export default function* vehiclesSagas(){
    yield all([
        call(onAddVehicleStart),
        call(onFetchVehiclesStart),
        call(onDeleteVehicleStart)
    ])
}
