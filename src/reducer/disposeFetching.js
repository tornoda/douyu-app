import {
  REQUEST_BEGIN,
  RECEIVED,
  RECEIVE_FAILED,
} from '../actions/fetch3Step'
import { RANDOM } from '../actions/fetchRandom'
import { CATEGORIES } from '../actions/fetchCategories'
import { FETCH_ONE } from '../actions/fetchOne'

// '_RANDOM'

const defaultRandomState = {
  fetchStatus: '',
  rooms: []
}

export const disposeFetchRandom = (preState = defaultRandomState, action) => {
  switch (action.type) {
    case REQUEST_BEGIN + RANDOM:
      console.log('fetching random start')
      return {
        ...preState, 
        ...{
          fetchStatus: REQUEST_BEGIN
        }
      }
    case RECEIVED + RANDOM:
      return {
        ...preState, 
        ...{
          fetchStatus: RECEIVED,
          rooms: [...preState.rooms, ...action.data]
        }
      }
    case RECEIVE_FAILED + RANDOM:
      return {
        ...preState, 
        ...{
          fetchStatus: RECEIVE_FAILED
        }
      }
    default:
      return preState;
  }
}

// '_CATEGORIES'

const defaultCategoriesState = {
  fetchStatus: '',
  categories: []
}

export const disposeCategories = (preState = defaultCategoriesState, action) => {
  let condition = action.condition
  switch (action.type) {
    case REQUEST_BEGIN + CATEGORIES:
      console.log('fetching categories start')
      return {
        ...preState, 
        ...{
          fetchStatus: REQUEST_BEGIN
        }
      }
    case RECEIVED + CATEGORIES:
      return {
        ...preState, 
        ...{
          fetchStatus: RECEIVED,
          categories: action.data
        }
      }
    case RECEIVE_FAILED + CATEGORIES:
      return {
        ...preState, 
        ...{
          fetchStatus: RECEIVE_FAILED
        }
      }
    default:
      return preState
  }
}

// _FETCH_ONE'

const defaultFetchOne = {
  fetchStatus: '',
  nameInfoList: []
}

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