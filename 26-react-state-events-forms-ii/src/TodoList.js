import React, { Component } from "react"
import uuid from "uuid"

class TodoList extends Component {

  render() {
    const props = this.props
    // console.log(this.props)
    const todoListItems = this.props.todos.map((todo) => {
      return <li key={uuid()}>
        <p>{todo.title}</p>
        <h4>{todo.priority}</h4>
        <span onClick>Delete!</span>
      </li>
    })
    return (
      props.todos.length === 0
      ?
      <h1>A LIST HAS NO TODOS</h1>
      :
      <ul>
        {todoListItems}
      </ul>
    )
  }
}

export default TodoList
