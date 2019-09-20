import React from 'react';
import { Link } from 'react-router-dom';

const Painting = props => {
  return (
    <div className="item">
      <div className="ui small image">
        <img src={props.painting.image} alt={props.painting.slug} />
      </div>
      <div className="middle aligned content">
        <div className="header">{`"${props.painting.title}" by ${props.painting
          .artist.name}`}</div>
        <div className="description">
        </div>
        <div onClick={props.handleDelete} className="ui red basic button">
          Delete It
        </div>
        <Link to={`/paintings/${props.painting.id}`} className="ui basic button">
          View
        </Link>
      </div>
    </div>
  );
};
export default Painting;
