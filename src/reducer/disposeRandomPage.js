import { 
  INCREASE_PAGE,
  CHANGE_FIRST_TIME 
} from '../actions/didRandomPage'

const preState1 = 0

export const disposeIncreasePage = (state = preState1, action) => {
  switch (action.type) {
    case INCREASE_PAGE:
      const page = state + 1
      return page
    default:
      return state
  }
}

const preState2 = 1

export const disposeJudgeIsFirstTime = (state = preState2, action) => {
  switch (action.type) {
    case CHANGE_FIRST_TIME:
      return 0
    default:
      return state
  }
}