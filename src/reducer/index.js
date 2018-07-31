import { combineReducers } from 'redux'
import { 
  disposeFetchRandom,
  disposeCategories,
  disposeFetchOne
} from './disposeFetching'
import disposeJudgeScreenSize from './disposeJudgeScreenSize'
import { disposeAddNameToList } from './disposeAddNameToList'
import {
  disposeIncreasePage,
  disposeJudgeIsFirstTime
} from './disposeRandomPage'


//注意这里在子state中comnineReducers()的用法
const rootReducer = combineReducers({
  global: disposeJudgeScreenSize,
  random: combineReducers({
    infoFetched: disposeFetchRandom,
    page: disposeIncreasePage,
    isFirstLoad: disposeJudgeIsFirstTime
  }),
  categories: disposeCategories,
  following: combineReducers({
    nameList: disposeAddNameToList,
    infoFetched: disposeFetchOne,
  })
}) 

export default rootReducer