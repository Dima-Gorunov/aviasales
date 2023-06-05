import { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { getSearchIdThunk } from '../store/Slice/AuthSlice';
import { getTicketsThunk } from '../store/Slice/TicketSlice';
import { getLoadingComplete, getShowTickets } from '../store/Selectors/TicketSelector';

import App from './App';

const AppContainer = (props) => {
  useEffect(() => {
    props.getSearchIdThunk().then(() => {
      props.getTicketsThunk();
    });
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
