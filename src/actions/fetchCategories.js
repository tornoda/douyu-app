import { requestBegin, received, receiveFailed } from './fetch3Step'
import fetch from 'cross-fetch'

const CATEGORIES = 'CATEGORIES';

export const fetchCategories = () => {
  (dispatch) => {
    dispatch(requestBegin(CATEGORIES))
    return fetch('api/RoomApi/game')
      .then(
        response => response.data.data,
        err => dispatch(receiveFailed(err, CATEGORIES))
      )
      .then(dispatch(received(data, CATEGORIES)))
  }
}

