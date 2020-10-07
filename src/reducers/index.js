import {combineReducers} from 'redux'
import testReducer from './testReducer'
import auth from './auth'
import message from './message'
import vehicles from './vehicles'

const reducers = {
  testReducer,
  auth,
  message,
  vehicles
}

const appReducer = combineReducers(reducers)

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer