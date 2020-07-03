import { auth } from './../../firebase/utils'
import { takeLatest, put, all, call } from 'redux-saga/effects'
import { setVehicles, fetchVehiclesStart } from './vehicles.actions'
import { handleAddVehicle, handleFetchVehicles, handleDeleteVehicle } from './vehicles.helpers'
import vehiclesTypes from './vehicles.types'

let vehiclePayload = [ 
    'make',
    'model',
    'drive',
    'price',
    'miles',
    'year',
    'body',
    'color',
    'transmission',
    'engine',
    'vin', 
    'description',
    'fuel'
]

export function* addVehicle({ payload: vehiclePayload }) {
    try {
        const timestamp = new Date()
        yield handleAddVehicle({
            vehiclePayload,
            vehicleAdminUserUID: auth.currentUser.uid,
            createdDate: timestamp
        });
        yield put(
            fetchVehiclesStart()
        )
    } 
    catch(err){
        console.log(err)
    }
}
export function* onAddVehicleStart(){
    yield takeLatest(vehiclesTypes.ADD_NEW_VEHICLE_START, addVehicle)
}

export function* fetchVehicles(){
    try{
        const vehicles = yield fetchVehiclesStart();
        yield put(
            setVehicles(vehicles)
        )
    }
    catch(err){
        console.log(err)
    }
}
export function* onFetchVehiclesStart(){
    yield takeLatest(vehiclesTypes.FETCH_VEHICLES_START, fetchVehicles)
}

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
    yield takeLatest(vehiclesTypes.DELECTE_VEHICLE_START, deleteVehicle)
}

export default function* vehiclesSagas(){
    yield all([
        call(onAddVehicleStart),
        call(onFetchVehiclesStart),
        call(onDeleteVehicleStart)
    ])
}
