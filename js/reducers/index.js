
import { combineReducers } from 'redux'

import { user } from './login'

export default combineReducers({
    userStore: user,
});

// module.exports.login = require('./login');