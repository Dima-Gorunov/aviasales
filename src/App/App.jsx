import React, { useEffect, useRef } from 'react';

import TicketListContainer from '../components/TicketList/TicketListContainer';
import CheckboxFilterContainer from '../components/CheckboxFilter/CheckboxFilterContainer';
import logo from '../assets/Logo.png';
import MenuFilterContainer from '../components/MenuFilter/MenuFilterContainer';

const App = (props) => {
  return (
    <div className="all-content-container">
      <div className="header-container">
        <div className="image-container">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="body-container">
        <div className="body">
          <CheckboxFilterContainer />
          <MenuFilterContainer />
          <TicketListContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
