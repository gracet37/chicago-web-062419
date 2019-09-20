import { combineReducers } from 'redux'
import paintings from './paintings'
import loader from './loader'

export default combineReducers({
  paintings: paintings,
  loader: loader,
})
