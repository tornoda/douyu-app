import { requestBegin, received, receiveFailed } from './fetch3Step'
import fetch from 'cross-fetch'

const CATEGORIES = '_CATEGORIES';

export const fetchCategories = () => {
  (dispatch) => {
    dispatch(requestBegin(CATEGORIES))
    return fetch('api/RoomApi/game')
      .then(
        response => response.data.data,
      )
      .catch(
        err => dispatch(receiveFailed(err, CATEGORIES))
      )
      .then((data) => dispatch(received(data, CATEGORIES)))
  }
}

