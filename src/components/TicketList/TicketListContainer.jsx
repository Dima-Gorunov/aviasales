import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import {
  getCheckboxFilters,
  getFinalTickets,
  getLoadedCount,
  getLoadingComplete,
  getShowTickets,
  getSimpleFilter,
  getTickets,
} from '../../store/Selectors/TicketSelector';
import { getTicketsThunk, loadMoreTickets, setShowTicketsThunk } from '../../store/Slice/TicketSlice';

import TicketList from './TicketList';

const TicketListContainer = (props) => {
  useEffect(() => {
    props.setShowTicketsThunk();
  }, [props.CheckboxFilters, props.Tickets, props.SimpleFilter]);
  return <TicketList {...props} />;
};

const mapStateToProps = (state) => {
  return {
    Tickets: getTickets(state),
    ShowTickets: getShowTickets(state),
    CheckboxFilters: getCheckboxFilters(state),
    LoadingComplete: getLoadingComplete(state),
    LoadedCount: getLoadedCount(state),
    SimpleFilter: getSimpleFilter(state),
  };
};

export default connect(mapStateToProps, { setShowTicketsThunk, loadMoreTickets, getTicketsThunk })(TicketListContainer);
