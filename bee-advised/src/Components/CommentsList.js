import React from 'react'
import uuid from 'uuid'

const CommentsList = (props) => {
  console.log(props)
  // const first = <li>{`${props.comments[0].username}: ${props.comments[0].body}`}</li>;

  const all = props.comments.map((comment) => {
    return <li key={uuid()}>{`${comment.username}: ${comment.body}`}</li>
  })

  return(
    <ul>
      {all}
    </ul>
  )
}

export default CommentsList
