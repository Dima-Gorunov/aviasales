import React from 'react';
import PropTypes from 'prop-types';

const Segment = ({ Segment }) => {
  const date = new Date(Segment.date);
  const newDate = new Date(date.getTime() + Segment.duration * 60000);
  const startTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  const stopTime = `${String(newDate.getHours()).padStart(2, '0')}:${String(newDate.getMinutes()).padStart(2, '0')}`;

  const difDate = new Date(0);
  difDate.setMinutes(Segment.duration);

  const time = Segment.duration;
  const formattedTime = Math.floor(time / 60) + 'ч ' + (time % 60) + 'м';

  return (
    <div className="flight-option">
      <div className="time-info">
        <span className="airport-codes title">
          {Segment.origin}-{Segment.destination}
        </span>
        <div className="airport-time description">
          {startTime}-{stopTime}
        </div>
      </div>
      <div className="flight-duration">
        <div className="title">В пути</div>
        <div className="description">{formattedTime}</div>
      </div>
      <div className="transfers">
        <div className="transfers-title title ">
          {Segment.stops.length === 0 ? (
            <>Пересадки</>
          ) : (
            <>
              {Segment.stops.length} пересад{Segment.stops.length === 1 ? 'ка' : Segment.stops.length < 5 ? 'ки' : 'ок'}
            </>
          )}
        </div>
        <div className="transfers-info description">
          {Segment.stops.length === 0 && <span>Без пересадок</span>}
          {Segment.stops &&
            Segment.stops.map((stops, index) => (
              <span key={`e${index}st`}>
                {stops}
                {index === Segment.stops.length - 1 ? '' : ', '}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

Segment.propTypes = {
  Segment: PropTypes.shape({
    origin: PropTypes.string,
    destination: PropTypes.string,
    date: PropTypes.string,
    stops: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number,
  }),
};

export default Segment;
