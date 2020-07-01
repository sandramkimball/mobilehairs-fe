import { all, call } from 'redux-saga/effects';

import userSagas from './User/user.sagas'
import vehiclesSagas from './Vehicles/vehicles.sagas'

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(vehiclesSagas)
    ])
}