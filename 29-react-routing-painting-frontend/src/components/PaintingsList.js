import React from 'react';
import DeleteablePainting from './DeleteablePainting';

const PaintingsList = ({ handleDelete, handleVote, paintings, routeProps }) => {
  const items = paintings.map(pntg => (
    <DeleteablePainting
      routeProps={routeProps}
      key={pntg.id}
      painting={pntg}
      handleVote={handleVote}
      handleDelete={handleDelete}
    />
  ));
  return (
    <div>
      <h1>All Paintings</h1>
      <div className="ui unstackable items">{items}</div>
    </div>
  );
};

export default PaintingsList;
