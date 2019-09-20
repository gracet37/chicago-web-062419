import { FETCH_PAINTINGS_SUCCESS, DELETE_PAINTING } from '../actions/types'

export default function paintings(state = [], action) {
  switch (action.type) {
    case FETCH_PAINTINGS_SUCCESS:
      return [...action.paintings]
    case DELETE_PAINTING:
      return state.filter(p => p.id !== action.id )
    default:
      return state
  }
}
