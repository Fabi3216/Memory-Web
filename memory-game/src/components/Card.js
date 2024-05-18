  // src/components/Card.js
  import React from 'react';

  const Card = ({ card, onClick }) => {
    return (
      <div className="card" onClick={() => onClick(card)}>
        {card.isFlipped ? <img src={card.image} alt="card" /> : <div className="card-back"></div>}
      </div>
    );
  };

  export default Card;
  
