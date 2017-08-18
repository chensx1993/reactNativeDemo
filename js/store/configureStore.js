
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import reducers from '../reducers'

const logger = store => next => action => {
    if(typeof action == 'function') {
         console.log('dispatching a function');
    }
    else { 
        console.log('dispatching', action);
    }
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}

let middlewares = [
    logger,
    thunk
];

let store = createStore(reducers, applyMiddleware(...middlewares));

// let createAppStore = applyMidddleware(...middlewares)(createStore);
// function configureStore(onComplete: ?() => void) {
//   // TODO(frantic): reconsider usage of redux-persist, maybe add cache breaker
//   const store = autoRehydrate()(createF8Store)(reducers);
//   persistStore(store, {storage: AsyncStorage}, onComplete);
//   if (isDebuggingInChrome) {
//     window.store = store;
//   }
//   return store;
// }

export default store