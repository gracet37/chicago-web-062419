import React, { Component } from "react"

class TodoForm extends Component {
  // Render a form for a new todo
  // Todo will have a title and a priority
  // key moment is just when we submit the form
  // at that moment we'd like to add a todo to the list
  // which really means updating our state with the new object representing a todo
  // {title: "new todo", priority: "high"}

  constructor(props) {
    super(props);
    this.state = {title: '', priority: ''};
    this.handleChange = this.handleChange.bind(this);
    // this.handleTitleChange = this.handleTitleChange.bind(this);
    // this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({title: '', priority: ''});
  }

  handleChange(event) {
    const newStateObj = {}
    const newName = event.target.name
    newStateObj[newName] = event.target.value
    this.setState(newStateObj);
  }

  // handleTitleChange(event) {
  //   console.log(event.target.name)
  //   this.setState({title: event.target.value});
  // }
  //
  // handlePriorityChange(event) {
  //   console.log(event.target.name)
  //
  //   this.setState({priority: event.target.value});
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          Priority:
          <input type="text" name="priority" value={this.state.priority} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add Todo" />
      </form>
    )
  }
}

export default TodoForm
