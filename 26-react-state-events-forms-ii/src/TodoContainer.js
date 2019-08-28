import React, { Component } from 'react';
import TodoList from './TodoList.js'
import TodoForm from './TodoForm.js'

class TodoContainer extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        { title: 'test', priority: 'high' },
        { title: 'another todo', priority: 'low' }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateCharacterCount = this.updateCharacterCount.bind(this);
  }

  updateCharacterCount(event) {
    const currentInput = event.target.value
    console.log(this.state.characterCount);
    // Practice accessing valuable info from our events
    console.log(this.state.characterCount);

    this.setState((prevState) => {
      return { characterCount: currentInput.length}
    //   return {counter: state.counter + props.step};
    });
  }

  addTodo(newTodo) {
    // Practice setting state outside a constructor
    // Practice leveraging knowledge of the previous state
    // Practice passing a state-changing function to a responsible child
    const newTodos = this.state.todos
    newTodos.push(newTodo)
    console.log(newTodos)
    this.setState({todos: newTodos}, () => {
      console.log("YOOOOOOOOO");
    })
  }

  render() {
    const props = this.props;
    // console.log(this.state);
    return (
      <div>
        <h1>Todos for {props.currentDay}</h1>
        {/*<input type="text" onChange={this.updateCharacterCount} placeholder="type a todo" />*/}
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default TodoContainer;
