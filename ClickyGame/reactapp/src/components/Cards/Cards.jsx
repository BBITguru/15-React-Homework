// Stateless Card Component
import React from 'react';
import './Cards.css';

const Cards = (props) => 
{
  return (
    <img src={props.imgsrc} onClick={props.onClick} className="'img-responsive img-center card" alt={props.imgsrc} />
  );
};

export default Cards;