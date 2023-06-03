import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import App from './App';
import { getSearchIdThunk } from './store/Slice/AuthSlice';
import { getTicketsThunk, setShowTicketsThunk } from './store/Slice/TicketSlice';
import { getLoadingComplete, getShowTickets } from './store/Selectors/TicketSelector';

const AppContainer = (props) => {
  useEffect(() => {
    props.getSearchIdThunk();
  }, []);
  return <App {...props} />;
};

const mapStateToProps = (state) => {
  return {
    LoadingComplete: getLoadingComplete(state),
    ShowTickets: getShowTickets(state),
  };
};

export default connect(mapStateToProps, { getSearchIdThunk, getTicketsThunk })(AppContainer);
