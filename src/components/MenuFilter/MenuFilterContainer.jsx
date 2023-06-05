import { connect } from 'react-redux';

import { getSimpleFilter } from '../../store/Selectors/TicketSelector';
import { setSimpleFilter } from '../../store/Slice/TicketSlice';

import MenuFilter from './MenuFilter';

const MenuFilterContainer = (props) => {
  return <MenuFilter {...props} />;
};

const mapStateToProps = (state) => {
  return {
    SimpleFilter: getSimpleFilter(state),
  };
};

export default connect(mapStateToProps, { setSimpleFilter })(MenuFilterContainer);
