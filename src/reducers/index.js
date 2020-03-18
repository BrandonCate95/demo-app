import { combineReducers } from 'redux'
import searches from './searches'
import user from './user'

export default combineReducers({
    //reducer list
    searches,
    user
})