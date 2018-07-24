import { ANIMATION, HIDE_SHOW_GIFT } from '../actions/ainimation'

const defaultHideAndShowGift = {
  isShow: false,
  style: ''
}

export const hideAndShowGift = (state = defaultHideAndShowGift, action) => {
  const { oneList: { isShow, style } } = state
  
  switch (action.type) {
    case `${ANIMATION}${SHOWGIFT}`:
      return {
        oneList: {
          
        }
      }

    default:
      return state
  }
}