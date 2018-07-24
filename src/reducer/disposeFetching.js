import {
  REQUEST_BEGIN,
  RECEIVED,
  RECEIVE_FAILED,
} from '../actions/fetch3Step'
import { RANDOM } from '../actions/fetchRandom'
import { CATEGORIES } from '../actions/fetchCategories'
import { FETCH_ONE } from '../actions/fetchOne'

const defaultRandomState = {
  fetchStatus: '',
  page: 0,
  rooms: []
}

// '_RANDOM'

export const disposeFetchRandom = (preState = defaultRandomState, action) => {
  switch (action.type) {
    case REQUEST_BEGIN + RANDOM:
      console.log('fetching random start')
      return {
        ...preState, ...{
          fetchStatus: REQUEST_BEGIN
        }
      }
    case RECEIVED + RANDOM:
      let page = preState.page;
      page++
      return {
        ...preState, ...{
          fetchStatus: RECEIVED,
          page: page,
          rooms: [...preState.rooms, ...action.data]
        }
      }
    case RECEIVE_FAILED + RANDOM:
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

// '_CATEGORIES'

export const disposeCategories = (preState = defaultCategoriesState, action) => {
  let condition = action.condition
  switch (action.type) {
    case REQUEST_BEGIN + CATEGORIES:
      console.log('fetching categories start')
      return {
        ...preState, ...{
          fetchStatus: REQUEST_BEGIN
        }
      }
    case RECEIVED + CATEGORIES:
      return {
        ...preState, ...{
          fetchStatus: RECEIVED,
          categories: action.data
        }
      }
    case RECEIVE_FAILED + CATEGORIES:
      return {
        ...preState, ...{
          fetchStatus: RECEIVE_FAILED
        }
      }
    default:
      return preState
  }
}

const defaultFetchOne = {
  fetchStatus: '',
  nameInfoList: []
}

// _FETCH_ONE'

export const disposeFetchOne = (preState = defaultFetchOne, action) => {
  switch (action.type) {
    case REQUEST_BEGIN + FETCH_ONE:
      return {
        ...preState,
        fetchStatus: REQUEST_BEGIN
      }
    case RECEIVED + FETCH_ONE:
      const { data } = action
      const { nameInfoList } = preState
      return {
        ...preState,
        fetchStatus: RECEIVED,
        nameInfoList: [...nameInfoList, data]
      }
    case RECEIVE_FAILED + FETCH_ONE:
      return {
        ...preState,
        fetchStatus: RECEIVE_FAILED
      }
    default:
      return preState;
  }
}