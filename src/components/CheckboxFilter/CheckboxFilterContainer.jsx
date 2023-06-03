import React from 'react';
import { connect } from 'react-redux';

import { getCheckboxFilters } from '../../store/Selectors/TicketSelector';
import { setFilterThunk } from '../../store/Slice/TicketSlice';

import CheckboxFilter from './CheckboxFilter';

const CheckboxFilterContainer = (props) => {
  return <CheckboxFilter {...props} />;
};

const mapStateToProps = (state) => {
  return {
    CheckboxFilters: getCheckboxFilters(state),
  };
};

export default connect(mapStateToProps, { setFilterThunk })(CheckboxFilterContainer);
