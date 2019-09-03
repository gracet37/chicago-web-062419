import React from 'react';
import PaintingsList from './PaintingsList';

class PaintingsContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      paintings: []
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/paintings/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          paintings: data.slice(0, 20).sort((a, b) => b.votes - a.votes)
        });
      });
  }

  handleDelete(id) {
    const updatedState = this.state.paintings.filter(pntg => pntg.id !== id);

    this.setState({ paintings: updatedState });
  }

  handleVote(id) {
    const updatedPaintings = this.state.paintings
      .map(pntg => {
        if (pntg.id === id) {
          return Object.assign({}, pntg, { votes: pntg.votes + 1 });
        } else {
          return pntg;
        }
      })
      .sort((a, b) => b.votes - a.votes);

    this.setState(state => {
      return { paintings: updatedPaintings };
    });
  }

  render() {
    return (
      <div>
        <PaintingsList
          handleDelete={this.handleDelete}
          handleVote={this.handleVote}
          paintings={this.state.paintings}
          routeProps={this.props}
        />
      </div>
    );
  }
}

export default PaintingsContainer;
