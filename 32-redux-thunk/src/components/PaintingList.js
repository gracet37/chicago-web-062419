import React from 'react';
import DeleteablePainting from './DeleteablePainting';
import { Route, Switch } from 'react-router-dom';
import PaintingShow from './PaintingShow';
import Painting from './Painting';
import artworks from '../data/artworks';
import { connect } from 'react-redux'
import { thunkFetchPaintings } from '../actions/index'

class PaintingList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.startFetchPainting()
    fetch('url')
      .then(resp => resp.json())
      .then(data => {
        this.props.fetchPaintingsSuccess()
      })
  }

  renderPaintings(){
    const allPaintings = this.props.paintings.map(p => (
      <DeleteablePainting
        key={p.id}
        painting={p}
        handleVote={this.handleVote}
      />
    ));
    return <div>
      <h1>All Paintings</h1>
      <div className="ui items">{allPaintings}</div>
    </div>
  }

 
  renderLoader(){
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )
  }

  render() {
    return (
      <Switch>
        <Route path='/paintings/:paintingId' render={(route) => {
          const id = route.match.params.paintingId
          const painting = this.props.paintings.find(painting => painting.id == id)
          console.log(painting)
          return <div>
            <PaintingShow painting={painting}/>
          </div>
        }} />
        <Route path='/'  render={()=>{
          return <div>
            {this.props.loader ? this.renderLoader() : this.renderPaintings()}
          </div>
        }}
        />
      </Switch>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    paintings: state.paintings,
    loader: state.loader
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    thunkFetchPaintings: () => {
      dispatch(thunkFetchPaintings())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaintingList);



