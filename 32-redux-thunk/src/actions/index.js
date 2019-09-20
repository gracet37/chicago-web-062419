import { FETCH_PAINTINGS_SUCCESS, DELETE_PAINTING } from './types'
import paintings from '../data/artworks'


export function thunkFetchPaintings(){
  return function(dispatch) {
    dispatch({type: 'START_FETCH_PAINTINGS'})

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(resp => resp.json())
      .then(data => {
        dispatch({type: 'FETCH_PAINTINGS_SUCCESS', paintings: paintings})
      })
  };
}

export function deletePainting(id){
  return {
    type: DELETE_PAINTING,
    id
  }
}
