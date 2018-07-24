import { requestBegin, received, receiveFailed } from './fetch3Step'
import axios from 'axios'

export const FETCH_ONE = '_FETCH_ONE'

export const fetchOne = (name) => {
  return (dispatch) => {
    dispatch(requestBegin(FETCH_ONE))
    axios.get(`/api/RoomApi/room/${name}`)
      .then(
        response => response.data.data,
      )
      .catch(
        err => dispatch(receiveFailed(err, FETCH_ONE))
      )
      .then(
        data => dispatch(received(data, FETCH_ONE))
      )
  }
}