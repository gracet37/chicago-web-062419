import React from 'react'

const AdviceCard = (props) => {
  return(
    <div className="advice-card">
      <img className="bee-pic" src={require('../Images/bee-holding-sign.png')}/>
      <h3 className="advice-body">{ props.adviceBody }</h3>
    </div>
  )
}

export default AdviceCard;
