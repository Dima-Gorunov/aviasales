import { createSlice } from '@reduxjs/toolkit';

import { AviasalesApi } from '../../services/AviasalesApi';

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: {},
  reducers: {
    setSearchId(state, { payload }) {},
  },
});

export const getSearchIdThunk = () => {
  return async (dispatch) => {
    try {
      const response = await AviasalesApi.getSearchId();
      const { searchId } = response.data;
      localStorage.setItem('searchId', searchId);
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const {} = AuthSlice.actions;

export default AuthSlice.reducer;
