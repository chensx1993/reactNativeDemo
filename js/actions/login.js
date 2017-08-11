 import { userLogin } from '../services/Services'

 export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
 export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'

 export const login = async(user) => {
    try {
        return userLogin(user).then(json => { 
        dispatch({ type: USER_LOGIN_SUCCESS, json })
    })
    } catch {
        dispatch({ type: USER_LOGIN_FAILURE, error })
    }
    
 }