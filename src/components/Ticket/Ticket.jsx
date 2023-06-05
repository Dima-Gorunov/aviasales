import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import noImage from '../../assets/no_image.jpg';

import Segment from './Segment';

const Ticket = ({ Ticket }) => {
  const SegmentsList = Ticket.segments.map((item, index) => <Segment key={uuidv4()} Segment={item} />);

  return (
    <div className="ticket">
      <div className="ticket-info">
        <div className="ticket-header">
          <span className="ticket-price">{Ticket.price} Р</span>
          <div className="airline-logo">
            <img src={`https://pics.avs.io/99/36/${Ticket.carrier}.png` || noImage} alt={noImage} />
          </div>
        </div>
        <div className="flight-options">{SegmentsList}</div>
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
