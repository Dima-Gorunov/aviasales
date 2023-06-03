import React from 'react';
import PropTypes from 'prop-types';

import Segment from './Segment';

const Ticket = (props) => {
  return (
    <div className="ticket">
      <div className="ticket-info">
        <div className="ticket-header">
          <span className="ticket-price">{props.Ticket.price} Р</span>
          <div className="airline-logo">
            <img src={`https://pics.avs.io/99/36/${props.Ticket.carrier}.png`} alt="Лого компании" />
          </div>
        </div>
        <div className="flight-options">
          {props.Ticket.segments.map((item, index) => (
            <Segment key={`seg${index}`} Segment={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  Ticket: PropTypes.shape({
    price: PropTypes.number,
    carrier: PropTypes.string,
    segments: PropTypes.arrayOf(
      PropTypes.shape({
        origin: PropTypes.string,
        destination: PropTypes.string,
        date: PropTypes.string,
        stops: PropTypes.arrayOf(PropTypes.string),
        duration: PropTypes.number,
      })
    ),
  }),
};

export default Ticket;
