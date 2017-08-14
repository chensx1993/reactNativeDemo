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

import thunk from 'redux-thunk';
import * as reducers from './reducers';

import MainTabNavigator from './navigation/RootNavigation'

const createStoreWithThunk = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithThunk(reducer);

console.log(store.getState());

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