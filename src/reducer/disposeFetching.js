import {
  REQUEST_BEGIN,
  RECEIVED,
  RECEIVE_FAILED,
} from '../actions/fetch3Step'

const defaultState = {
  fetchStatus: '',
  page: 0,
  rooms: []
}

const disposeFetchRandom = (preState = defaultState, action) => {
  switch (action.type) {
    case `${REQUEST_BEGIN}${action.condition}`:
      console.log('fetching start')
      return {...preState, ...{
        fetchStatus: REQUEST_BEGIN
      }}
    case `${RECEIVED}${action.condition}`: 
      let page = preState.page;
      page ++
      return {...preState, ...{
        fetchStatus: RECEIVED,
        page: page,
        rooms: [...preState.rooms, ...action.data]
      }}
    case `${RECEIVE_FAILED}${action.condition}`: 
      return {...preState, ...{
        fetchStatus: RECEIVE_FAILED
      }}
    default:
      return preState;
  }
}

export default disposeFetchRandom