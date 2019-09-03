import React from 'react';

class Painting extends React.Component {
  showPainting = () => {
    console.log(this.props.painting.slug)
    this.props.routeProps.history.push("paintings/" + this.props.painting.slug)
  }

  render() {
    const props = this.props;
    return (
      <div className="item">
        <div className="ui small image">
          <img src={props.painting.image} alt={props.painting.slug} />
        </div>
        <div className="middle aligned content">
          <div className="header">{`"${props.painting.title}" by ${props.painting
            .artist.name}`}</div>
          <div className="description">
            <a
              onClick={() => {
                props.handleVote(props.painting.id);
              }}
            >
              <i className="large caret up icon" />
              {props.painting.votes} votes
            </a>
          </div>
          <div className="extra">
            <div className="ui big buttons">
              <div className="ui basic blue button" onClick={this.showPainting}>
                <i className="add circle icon" />
                More Info
              </div>
              <div onClick={props.handleToggle} className="ui button basic red">
                <i className="trash icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Painting;
