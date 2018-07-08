import { combineReducers } from 'redux'
import disposeFetching from './disposeFetching'

const rootReducer = combineReducers({
  random: disposeFetching
}) 

export default rootReducer