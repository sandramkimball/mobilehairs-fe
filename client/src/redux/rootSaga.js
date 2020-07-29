import { all, call } from 'redux-saga/effects';

import vehiclesSagas from './Vehicles/vehicles.sagas'

export default function* rootSaga() {
    // yield all = run parallel operations
    yield all([
        // call = API call
        call(vehiclesSagas)
    ])
}