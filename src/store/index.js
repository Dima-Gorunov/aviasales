import { combineReducers, configureStore } from '@reduxjs/toolkit';

import AuthSlice from './Slice/AuthSlice';
import TicketSlice from './Slice/TicketSlice';

const RootReducer = combineReducers({
  AuthStore: AuthSlice,
  TicketStore: TicketSlice,
});

export const store = configureStore({
  reducer: RootReducer,
});
