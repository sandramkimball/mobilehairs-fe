import userTypes from './user.types'

export const INITIAL_STATE = {
    currentUser: null,
    token: null,
    registrationSuccess: false,
    resetPasswordSuccess: false,
    userErr: []
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case userTypes.SET_CURRENT_USER :
            return {
                ...state,
                currentUser: action.payload,
                userErr: []
            }

        case userTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordSuccess: action.payload
            }
        
        case userTypes.ADD_USER_START:
            return {
                ...state,
                registrationSuccess: true,
                userErr: []
            }

        case userTypes.USER_ERROR:
            return {
                ...state,
                userErr: action.payload
            }

        case userTypes.RESET_USER_STATE:
            return {
                ...state,
                ...INITIAL_STATE
            }
        
        case userTypes.SIGN_OUT_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE
            }

        default:
            return state;
    }
}

export default userReducer