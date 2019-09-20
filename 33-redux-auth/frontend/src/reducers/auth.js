
export default function paintings(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {...action.user}
    case 'LOGOUT_USER':
      return {}
    default:
      return state
  }
}
