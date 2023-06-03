import { createSlice } from '@reduxjs/toolkit';

import { AviasalesApi } from '../../services/AviasalesApi';

const TicketSlice = createSlice({
  name: 'TicketSlice',
  initialState: {
    Tickets: [],
    ShowTickets: [],
    CheckboxFilters: [
      { key: 'all', text: 'Все', active: true },
      { key: '0', text: 'Без пересадок', active: false },
      { key: '1', text: '1 Пересадка', active: false },
      { key: '2', text: '2 Пересадки', active: false },
      { key: '3', text: '3 Пересадки', active: false },
    ],
    SimpleFilter: [
      { key: 'lowPrice', text: 'САМЫЙ ДЕШЕВЫЙ', active: true },
      { key: 'fastest', text: 'САМЫЙ БЫСТРЫЙ', active: false },
    ],
    LoadingComplete: false,
    LoadedCount: 5,
  },
  reducers: {
    loadMoreTickets(state, { payload }) {
      state.LoadedCount += 5;
    },
    setLoadingComplete(state, { payload }) {
      state.LoadingComplete = payload;
    },
    setTickets(state, { payload }) {
      const newTickets = payload;
      state.Tickets = state.Tickets.concat(newTickets);
    },
    setShowTickets(state, { payload }) {
      const checkboxKeys = state.CheckboxFilters.filter((item) => item.active);
      const simpleFilter = state.SimpleFilter.find((item) => item.active);
      state.ShowTickets = state.Tickets.filter((ticket) => {
        return checkboxKeys.some((filter) => {
          if (filter.key === 'all') {
            return true;
          }
          const hasMatchingStops = ticket.segments.some((segment) => {
            return segment.stops.length === parseInt(filter.key);
          });
          return hasMatchingStops;
        });
      });
      if (simpleFilter.key === 'lowPrice') {
        state.ShowTickets = state.ShowTickets.sort((a, b) => a.price - b.price);
      }
      if (simpleFilter.key === 'fastest') {
        state.ShowTickets = state.ShowTickets.sort((a, b) => {
          const durationA = a.segments.reduce((maxDuration, segment) => {
            return Math.max(maxDuration, segment.duration);
          }, -Infinity);

          const durationB = b.segments.reduce((maxDuration, segment) => {
            return Math.max(maxDuration, segment.duration);
          }, -Infinity);

          return durationA - durationB;
        });
      }
    },
    setActiveFilter(state, { payload }) {
      const { key, active } = payload;
      const index = state.CheckboxFilters.findIndex((item) => item.key === key);
      if (index !== -1) {
        state.CheckboxFilters[index].active = active;
      }
    },
    setSimpleFilter(state, { payload }) {
      const key = payload;
      state.SimpleFilter = state.SimpleFilter.map((item) => {
        item.active = false;
        if (item.key === key) {
          item.active = true;
          return item;
        }
        return item;
      });
    },
  },
});

export const getTicketsThunk = () => {
  return async (dispatch) => {
    try {
      const response = await AviasalesApi.getTickets();
      dispatch(setTickets(response.data.tickets));
      if (response.data.stop) {
        console.log('complete');
        dispatch(setLoadingComplete(true));
      }
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const setFilterThunk = (key, active) => {
  return async (dispatch) => {
    try {
      dispatch(setActiveFilter({ key, active }));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const setShowTicketsThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(setShowTickets());
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const { setTickets, setActiveFilter, setShowTickets, setLoadingComplete, loadMoreTickets, setSimpleFilter } =
  TicketSlice.actions;

export default TicketSlice.reducer;
