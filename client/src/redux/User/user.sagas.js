import userTypes from './user.types'
import { takeLatest, call, put } from 'redux-saga/effects';
import { setCurrentUser, setToken, signOutUserSuccess, signOutUserStart, resetPasswordSuccess, userError, signInStart } from './user.actions'
import { handleResetPassword, handleAddUser, handleSignIn } from './user.helpers'

// SIGN UP
export function* addUser( user ){
    try {
        yield handleAddUser( user );
        console.log('Signup success in user.sagas')
    } 
    catch ( err ){
        console.log('Error in user.sagas')
        yield put( userError( 'Unable to register user.' ) )
    }
}
export function* onAddUserStart(){
    console.log('ADD_USER_START initiate:')
    yield takeLatest(userTypes.ADD_USER_START, addUser(user))
}

// SIGN IN
export function* signIn ({ payload: { email, password } }){
    console.log('signIn Saga initiated')
    try{
        const userData = yield handleSignIn( email, password )

        yield setCurrentUser( userData.user )
        yield setToken( userData.token )
    } 
    catch (err){ 
        console.log('Reducer Saga Failure')
        yield put( userError (err) )
    }
}
export function* onSignInStart() {
    yield takeLatest(userTypes.SIGN_IN_START, signIn)
}

// SIGN OUT
export function* signOutUser(){
    try{
        yield call( signOutUserStart() )
        yield put( signOutUserSuccess() )
    } 
    catch (err){
        console.log(err)
    }
}
export function* onSignOutUserStart(){
    yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser)
}


// RESET PASSWORD
export function* resetPassword( email ){
    try {
        yield call(handleResetPassword, email);
        yield put( resetPasswordSuccess() )
    }
    catch (err) {
        yield put( userError (err) )
    }
}
export function* onResetPasswordStart(){
    yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword)    
}


export default function* userSagas(){
    yield afterAll([
        call(onSignInStart),
        call(onSignOutUserStart),
        call(onAddUserStart),
        call(onResetPasswordStart),
    ])
}