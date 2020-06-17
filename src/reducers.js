import {applyMiddleware, createStore, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {reducers as home} from './Home'
import {reducers as sidebar} from './Sidebar'

const combine = combineReducers({
    home,
    sidebar, 
})

const store = createStore(
    combine,
    applyMiddleware(
        thunk,
        logger
    )
)

export default store