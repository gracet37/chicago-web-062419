import React, { Component } from 'react';
import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';

class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        { username: "PLEASE WAIT", body: "LOADING...", adviceId: "0", id: "0" }
      ],
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/comments')
      .then(res => res.json())
      .then((comments) =>{
        this.setState({comments: comments})
      });
  }

  filteredComments = () => {
    const currentAdviceId = this.props.advice.slip_id;
    const filtered = this.state.comments.filter((comment) => {
      return comment.adviceId === currentAdviceId;
    });
    return filtered;
  }

  addComment = (newComment) => {
    // Attach current advice to the comment being added
    newComment.adviceId = this.props.advice.slip_id;

    // Build object to send with post fetch
    const postObj = {
      method: 'POST',
      headers: {
            'Content-Type': 'application/json',
        },
      body: JSON.stringify(newComment)
    }

    // Update our "backend"
    fetch('http://localhost:3000/comments', postObj)
      .then(res => res.json())
      .then(res => console.log("SWEET"));

    // Update client-side state
    this.setState((prevState) => {
      return { comments: [...prevState.comments, newComment] }
    })
  }

  render(){
    return(
      <div className="test">
        <CommentsList comments={this.filteredComments()}/>
        <CommentsForm addComment={this.addComment} advice={ this.props.advice }/>
        <br/>
      </div>
    )
  }
}

export default CommentsContainer
