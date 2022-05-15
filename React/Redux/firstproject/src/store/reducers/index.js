import {combineReducers} from 'redux';//used to combine data from more tthan 1 file from a fire store and connect it to app.jsx
import authReducer from './auth-reducer'
import appReducer from './app-reducer'
import initReducer from './inital-reducer'

export default combineReducers({
    init:initReducer,
    app:appReducer,
    auth:authReducer
});