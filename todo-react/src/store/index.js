import { createStore, combineReducers } from 'redux'
import reducers from './reducers/index'

const todoApp = combineReducers(reducers)

export default createStore(todoApp)
