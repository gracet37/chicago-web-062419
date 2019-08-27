import React, { Component } from 'react';
import AnimalList from './AnimalList.js'

export default class AnimalListContainer extends Component {
  constructor() {
    super();
    this.state = {
      animals: [{name: "Dog", sound: "WOOF"}, {name: "Cat", sound: "Meow"}, {name: "Platypus", sound: "meh"}, {name: "Ibex", sound: "**LOW WHISTLE**"}]
    }
  }

  leaveOne = () => {
    this.setState({animals: [this.state.animals.pop()]})
  }

  render () {
    // console.log(this.state);
    let animalListItems = <h1> TODO: finish this </h1>
    console.log(animalListItems);
    let lottaAnimals = this.state.animals.length > 3
    return (
      <div className="animal-list-container">
        <AnimalList animals={this.state.animals} />
        <h3>TOTAL NUMBER OF ANIMALS: {this.state.animals.length}</h3>
        { lottaAnimals ? <h2 onClick={this.leaveOne}>SO MANY ANIMALS</h2> : "" }
      </div>
    )
  }
}
