export const INCREASE_PAGE = 'INCREASE_PAGE'

export const increasePage = {
    type: INCREASE_PAGE
}

//是否是第一次更新RandomPage页面。
//防止页面关闭前，路由之间切换多次请求第一页
export const CHANGE_FIRST_TIME = 'CHANGE_FIRST_TIME'

export const changeFirstTime = {
    type: CHANGE_FIRST_TIME
}