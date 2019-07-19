import React from 'react';
import Greeting from './Greeting';
import './Card.css';

const Card = (props) => (
  <div className="Card">
    <Greeting name={props.name} />
  </div>
);

export default Card;
