import { requestBegin, received, receiveFailed } from './fetch3Step'
import axios from 'axios'

export const CATEGORIES = '_CATEGORIES'

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(requestBegin(CATEGORIES))
    axios.get('api/RoomApi/game')
      .then(
        response => response.data.data,
      )
      .catch(
        err => dispatch(receiveFailed(err, CATEGORIES))
      )
      .then((data) => dispatch(received(data, CATEGORIES)))
  }
}