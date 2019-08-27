import React from 'react';
import uuid from 'uuid';

export default class AnimalList extends React.Component {
  render() {
    let listItems = this.props.animals.map((animal, index) => {
      return (
        <li key={uuid()}>
          The {animal.name} says "{animal.sound}"
        </li>
      )
    });
    console.log(this.props)
    return <ul>{listItems}</ul>
  }
}
