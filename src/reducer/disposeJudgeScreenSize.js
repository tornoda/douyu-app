import { JUDGE_SCREEN_SIZE } from '../actions/judgeScreenSize'

const defaultState = {
  isPhoneSize: false
}

const disposeJudgeScreenSize = (preState = defaultState, action) => {
  switch (action.type) {
    case JUDGE_SCREEN_SIZE:
      return {
        ...preState,
        ...{
          isPhoneSize: action.isPhoneSize
        }
      }
    default:
      return preState
  }
}

export default disposeJudgeScreenSize