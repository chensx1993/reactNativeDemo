import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
} from '../actions/login'


//npm start —- —reset-cache
const initialLogin = {
    user: {
        userToken: null,
        id: null,
        username: null,
        nick_name: null
    }
}

export const login = (state = initialLogin, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.user
                }
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state
            }
    }
    return state
}