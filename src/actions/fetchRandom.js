import { requestBegin, received, receiveFailed } from './fetch3Step'
import axios from 'axios'

export const RANDOM = '_RANDOM'

export const fetchRandom = (page) => {
  return (dispatch) => {
    dispatch(requestBegin(RANDOM));
    axios.get(`api/RoomApi/live?offset=${page}&limit=9`)
      .then(
        response => response.data.data,
      )
      .catch(
        err => dispatch(receiveFailed(err, RANDOM))
      )
      .then((data) => dispatch(received(data, RANDOM)))
  }
}