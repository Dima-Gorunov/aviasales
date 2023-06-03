import React from 'react';
import PropTypes from 'prop-types';

const CheckboxFilter = (props) => {
  const setActiveFilter = (e) => {
    const key = e.currentTarget.value;
    const active = e.currentTarget.checked;
    props.setFilterThunk(key, active);
  };

  return (
    <div className="checkbox-filter-container">
      <div className="checkbox-filter">
        <div className="checkbox-title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
        <div className="checkbox-items">
          {props.CheckboxFilters.map((filter, index) => (
            <label key={`filter${filter.text}${index}`}>
              <div className="checkbox-item">
                <input
                  onChange={(e) => setActiveFilter(e)}
                  type="checkbox"
                  className="my-checkbox"
                  value={filter.key}
                  checked={filter.active}
                />
                {filter.text}
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

CheckboxFilter.propTypes = {
  CheckboxFilters: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      key: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
};

export default CheckboxFilter;
