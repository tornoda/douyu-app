export const JUDGE_SCREEN_SIZE = 'JUDGE_SCREEN_SIZE'

export const judgeScreenSize = () => {
  let windowWidth = document.documentElement.clientWidth
  let isPhoneSize
  if (windowWidth > 600) {
    isPhoneSize = false
  }else{
    isPhoneSize = true
  }
  return {
    type: JUDGE_SCREEN_SIZE,
    isPhoneSize
  }
}