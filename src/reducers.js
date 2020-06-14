import {applyMiddleware, createStore, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {reducers} from './Home'

const combine = combineReducers({
    home: reducers, 
})

const store = createStore(
    combine,
    applyMiddleware(
        thunk,
        logger
    )
)

export default store