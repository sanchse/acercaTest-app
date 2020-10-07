import {combineReducers} from 'redux'
import testReducer from './testReducer'
import auth from './auth'
import message from './message'

const reducers = {
  testReducer,
  auth,
  message,
}

const appReducer = combineReducers(reducers)

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer