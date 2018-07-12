import { combineReducers } from 'redux'
import { disposeFetchRandom } from './disposeFetching'
import { disposeCategories } from './disposeFetching'
import disposeJudgeScreenSize from './disposeJudgeScreenSize'

const rootReducer = combineReducers({
  global: disposeJudgeScreenSize,
  random: disposeFetchRandom,
  categories: disposeCategories
}) 

export default rootReducer