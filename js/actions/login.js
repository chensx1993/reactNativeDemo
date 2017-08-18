 import {
 	userLogin
 } from '../services/Services'

 import { AlertIOS } from 'react-native'

 export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
 export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'
 export const USER_LOGIN_DOING   = 'USER_LOGIN_DOING' 
 export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

 export const login = (user) => {
    return dispatch => {
        dispatch({
            type: USER_LOGIN_DOING
        });

        let request = fetch('https://www.baidu.com').then((res) => {
                // AlertIOS.alert(res);
                dispatch({
                    type: USER_LOGIN_SUCCESS,
                    res
                });

                }).catch((error)=>{
                    dispatch({
                    type: USER_LOGIN_FAILURE,
                    error: error
                });
        });
        // try {
        //     userLogin(user).then(user => {
        //         dispatch({
        //             type: USER_LOGIN_SUCCESS,
        //             user
        //         })
        //     })
        // } catch(error) {
        //     dispatch({
        //         type: USER_LOGIN_FAILURE,
        //         error
        //     })
        // }
    }
 	

 }

 export const loginOut = () => {
    return {
        type: USER_LOGGED_OUT,
    };
 }