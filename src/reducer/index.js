import { combineReducers } from 'redux'
import { 
  disposeFetchRandom,
  disposeCategories,
  disposeFetchOne
} from './disposeFetching'
import disposeJudgeScreenSize from './disposeJudgeScreenSize'
import { disposeAddNameToList } from './disposeAddNameToList'

//注意这里在子state中comnineReducers()的用法
const rootReducer = combineReducers({
  global: disposeJudgeScreenSize,
  random: disposeFetchRandom,
  categories: disposeCategories,
  following: combineReducers({
    nameList: disposeAddNameToList,
    infoFecthed: disposeFetchOne,
  })
}) 

export default rootReducer