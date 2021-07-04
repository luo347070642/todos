import { createStore, combineReducers } from 'redux'
import todos from './reducers/todos'
import status from './reducers/status'
const todoApp = combineReducers({
  todos,
  status
})
export default createStore(todoApp)
