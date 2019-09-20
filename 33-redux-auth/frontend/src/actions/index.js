
export function loginUser(user) {
  return {
    type: "LOGIN_USER",
    user
  }
}

export function logoutUser() {
  return {
    type: "LOGOUT_USER",
  }
}

export function currentUser(history) {
  return (dispatch) => {
    const token = localStorage.token;
    const reqObj = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }

    return fetch('http://localhost:3000/api/v1/current_user', reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          //handle error
        }else {
          dispatch(loginUser({ id: data.id, username: data.username}))
          history.push('/profile')
        }
      })
  }
}


export function registerUser(formData, history) {
  return (dispatch) => {
    const reqObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    }

    return fetch('http://localhost:3000/api/v1/auth', reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error){
          //handle error case
        } else {
          localStorage.token = data.token
          dispatch(loginUser({ id: data.id, username: data.username}))
          history.push('/profile')
        }
      })
  }
}

