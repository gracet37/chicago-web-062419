import React from 'react';
import DeleteablePainting from './DeleteablePainting';
import { Route, Switch } from 'react-router-dom';
import PaintingShow from './PaintingShow';
import Painting from './Painting';
import artworks from './artworks';

class PaintingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paintings: artworks
    };

    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(id) {
    // console.log('in handle Vote');
    // console.log('this', this);
    // console.log('id', id);
    this.setState(prevState => {
      return {
        paintings: prevState.paintings.map(p => {
          if (p.id !== id) {
            return p;
          } else {
            return { ...p, votes: p.votes + 1 };
          }
        })
      };
    });
  }

  render() {
    console.log('props in PaintingList', this.props);
    console.log(this.state.paintings);
    const allPaintings = this.state.paintings.map(p => (
      <DeleteablePainting
        key={p.id}
        painting={p}
        handleVote={this.handleVote}
      />
    ));
    return (
      <Switch>
        <Route path='/paintings/:paintingId' render={(route) => {
          console.log('route', route.match.params)
          const id = route.match.params.paintingId
          const painting = this.state.paintings.find(painting => painting.id == id)
          console.log(painting)
          return <div>
            <PaintingShow painting={painting}/>
          </div>
        }} />
        <Route path='/'  render={()=>{
          return <div>
            <h1>All Paintings</h1>
            <div className="ui items">{allPaintings}</div>
          </div>
        }}
        />
      </Switch>

    );
  }
}
export default PaintingList;
