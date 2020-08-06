import userTypes from './user.types'
import { takeLatest, call, put } from 'redux-saga/effects';
import { setCurrentUser, signOutUserSuccess, signOutUserStart, resetPasswordSuccess, userError, emailSignInStart } from './user.actions'
import { handleResetPassword, handleAddUser, handleEmailSignIn } from './user.helpers'

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
export function* emailSignIn ( email, password ){
    console.log('emailSignIn Saga initiated')
    try{
        yield emailSignInStart();
        // const user = yield handleEmailSignIn( email, password )
        const user = {
            firstName: 'Bob'
        }
        
        yield setCurrentUser( user )
    } 
    catch (err){ 
        yield put( userError (err) )
    }
}
export function* onEmailSignInStart( email, password ) {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn(email, password))
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
        call(onEmailSignInStart),
        call(onSignOutUserStart),
        call(onAddUserStart),
        call(onResetPasswordStart),
    ])
}