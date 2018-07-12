import {
  REQUEST_BEGIN,
  RECEIVED,
  RECEIVE_FAILED,
} from '../actions/fetch3Step'

const defaultRandomState = {
  fetchStatus: '',
  page: 0,
  rooms: []
}

export const disposeFetchRandom = (preState = defaultRandomState, action) => {
  switch (action.type) {
    case `${REQUEST_BEGIN}${action.condition}`:
      console.log('fetching random start')
      return {
        ...preState, ...{
          fetchStatus: REQUEST_BEGIN
        }
      }
    case `${RECEIVED}${action.condition}`:
      let page = preState.page;
      page++
      return {
        ...preState, ...{
          fetchStatus: RECEIVED,
          page: page,
          rooms: [...preState.rooms, ...action.data]
        }
      }
    case `${RECEIVE_FAILED}${action.condition}`:
      return {
        ...preState, ...{
          fetchStatus: RECEIVE_FAILED
        }
      }
    default:
      return preState;
  }
}

const defaultCategoriesState = {
  fetchStatus: '',
  categories: []
}

export const disposeCategories = (preState = defaultCategoriesState, action) => {
  let condition = action.condition
  switch (action.type) {
    case `${REQUEST_BEGIN}${condition}`:
      console.log('fetching categories start')
      return {
        ...preState, ...{
          fetchStatus: REQUEST_BEGIN
        }
      }
    case `${RECEIVED}${condition}`:
      return {
        ...preState, ...{
          fetchStatus: RECEIVED,
          categories: action.data
        }
      }
    case `${RECEIVE_FAILED}${condition}`:
      return {
        ...preState, ...{
          fetchStatus: RECEIVE_FAILED
        }
      }
    default:
      return preState
  }
}