import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGGED_OUT,
    USER_LOGIN_DOING
} from '../actions/login'


//npm start —- —reset-cache
const initialLogin = {
    user: {
        userToken: '',
        id: null,
        username: null,
        nick_name: null
    },
    isLoggedIn: false,
    userStatus: 'none',
    errorMessage: null,
}

export const user = (state = initialLogin, action) => {
    switch (action.type) {
        case USER_LOGIN_DOING:
        return {
            ...state,
            userStatus: 'logining',
        }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.res
                },
                userStatus: 'success',
            }
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                errorMessage: action.error,
                userStatus: 'failure',
            }
    }
    return state
}