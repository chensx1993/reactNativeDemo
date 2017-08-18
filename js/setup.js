/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'

import {
	Provider
} from 'react-redux'

import { 
    createStore, 
    applyMiddleware, 
    combineReducers 
} from 'redux';

import store from './store/configureStore'
import thunk from 'redux-thunk';

// import AppWithNavigationState from './navigation/RootNavigation'
import MainTabNavigator from './navigation/RootNavigation'

const setup = () => {

	return () => {
		return (
			<Provider store={store} >
                <MainTabNavigator />
            </Provider>
		)
	}
}

// const setup = () => <MainTabNavigator />;
export default setup