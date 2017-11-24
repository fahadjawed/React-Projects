import {createStore} from 'redux'  

import signin from './reducers/signin';
import data from './reducers/data';
import thunk from 'redux-thunk'
import {combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import{ createLogger}from 'redux-logger'
const rootReducer = combineReducers({
    signin,
    data
})
const middleware = applyMiddleware(createLogger(),thunk)
let store = createStore(
    rootReducer,
    middleware
);
store.subscribe(()=>{
    console.log(store.getState())
})
export default store