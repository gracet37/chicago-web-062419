import { START_FETCH_PAINTINGS, FETCH_PAINTINGS_SUCCESS } from '../actions/types'

export default function loader(state = false, action) {
  switch (action.type) {
    case START_FETCH_PAINTINGS:
      return true
    case FETCH_PAINTINGS_SUCCESS:
      return false 
    default:
      return state
  }
}
