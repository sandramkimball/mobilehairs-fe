import userTypes from './user.types'

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
})

export const setToken = token => ({
    type: userTypes.SET_TOKEN,
    payload: token
})

export const addUserStart = userCredentials => ({
    type: userTypes.ADD_USER_START,
    payload: userCredentials
})

export const signInStart = userCredentials => ({
    type: userTypes.SIGN_IN_START,
    payload: userCredentials
})

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION
})

export const signOutUserStart = () => ({
    type: userTypes.SIGN_OUT_USER_START
})

export const signOutUserSuccess = () => ({
    type: userTypes.SIGN_OUT_USER_SUCCESS
})

export const userError = err => ({
    type: userTypes.USER_ERROR
})

export const resetPasswordStart = userCredentials => ({
    type: userTypes.RESET_PASS_START,
    payload: userCredentials
})

export const resetPasswordSuccess = () => ({
    type: userTypes.RESET_PASS_SUCCESS,
    payload: true
})

export const resetUserState = () => ({
    type: userTypes.RESET_USER_STATE
})
