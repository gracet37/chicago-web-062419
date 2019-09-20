import React, {Component} from 'react';

class Profile extends Component {
  state = {
    username: "",
    password: "",
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
  }

  render() {
    return (
        <h1>Profile</h1>
    )
  }
}

export default Profile;

