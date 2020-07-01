import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger' // replays Redux actions+state, requests, console.logs... 
import thunk from 'redux-thunk' // lets sync+async logic extend store (func returns func = dispatch action)
import createSagaMiddle from 'redux-saga' // manage side effects (data fetching, browser cache...)

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddle()
export const middlewares = [thunk, sagaMiddleware, logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export default store;