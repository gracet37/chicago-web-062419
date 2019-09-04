import React, { Component } from 'react';
import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';

class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        { username: "PLEASE WAIT", body: "LOADING..." }
      ]
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/comments')
      .then(res => res.json())
      .then((comments) =>{
        this.setState({comments: comments})
      });
  }

  addComment = (newComment) => {
    const postObj = {
      method: 'POST',
      headers: {
            'Content-Type': 'application/json',
        },
      body: JSON.stringify(newComment)
    }
    fetch('http://localhost:3000/comments', postObj)
      .then(res => res.json())
      .then(res => console.log("SWEET"));
    this.setState((prevState) => {
      return { comments: [...prevState.comments, newComment] }
    })
  }

  render(){
    return(
      <div className="test">
        <CommentsList comments={this.state.comments}/>
        <CommentsForm addComment={this.addComment}/>
        <br/>
      </div>
    )
  }
}

export default CommentsContainer
