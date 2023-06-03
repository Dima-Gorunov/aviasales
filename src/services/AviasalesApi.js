import { instance } from './AuthInstance';

export const AviasalesApi = {
  getSearchId() {
    return instance.get('/search');
  },

  getTickets() {
    return instance.get('/tickets');
  },
};
