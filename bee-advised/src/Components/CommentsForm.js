import React, { Component } from 'react'

class CommentsForm extends Component {
  constructor(props) {
    super();

    this.state = {
      username: "",
      body: "",
    }
  }

  handleFormInputChange = (event) => {
    console.log(this.props.advice.slip_id)
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addComment(this.state)
    this.setState({username: "", body: ""})
  }

  render() {
    return(
      <form id="create-comment-form" onSubmit={ this.handleSubmit }>
        <input type="text" name="username" value={ this.state.username } placeholder="username" onChange={ this.handleFormInputChange } />
        <input type="text" name="body" value={ this.state.body } placeholder="leave your comment!" onChange={ this.handleFormInputChange }/>
        <input type="submit" value="Add Comment" />
      </form>
    );
  }
}

export default CommentsForm
