import { ADD_NAME_TO_LIST } from '../actions/addNameToList'

const defaultState = []

export const disposeAddNameToList = (preState = defaultState, action) => {
  const { name, type } = action
  switch (type) {
    case ADD_NAME_TO_LIST:
      return [
        ...preState,
        name
      ]
    default:
      return preState;
  }
}