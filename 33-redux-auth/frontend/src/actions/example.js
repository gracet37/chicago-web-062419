import { history } from "react-router-dom";

export function loginUser(user){
  return {
    type: 'LOGIN_USER',
    user
  }
}

export function getProfileFetch(history){
  return function(dispatch) {
    const token = localStorage.token

    const reqObj = {
      method: 'GET',
      headers: {   
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    }

    return fetch("http://localhost:3000/api/v1/current_user", reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error){
          history.push('/login')
        } else {
          localStorage.setItem("token", data.token)
          dispatch(loginUser({...data}))
        }
      })
  };
}



export function userPostFetch(user, history){
  return function(dispatch) {
    return fetch("http://localhost:3000/api/v1/auth", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          // handle error
        } else {
          history.push('/')
          localStorage.setItem("token", data.token)
          dispatch(loginUser({...data}))
        }
      })
  };
}

