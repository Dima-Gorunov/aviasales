import React from 'react';
import { connect } from 'react-redux';

import Ticket from './Ticket';

const TicketContainer = (props) => {
  return <Ticket {...props} />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(TicketContainer);
