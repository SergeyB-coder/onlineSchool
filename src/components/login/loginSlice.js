import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchLogin } from './loginAPI';

const initialState = {
  user_id: '',
  email: '',
  is_adm: false,
  showFormReg: false,
};

export const loginSlice = createSlice({
  
  name: 'login',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.user_id = action.payload
    },
    setEMAIL: (state, action) => {
      state.email = action.payload
    },
    setIs_adm: (state, action) => {
      state.is_adm = action.payload
    },
    setShowFormReg: (state, action) => {
      state.showFormReg = action.payload
    }
  },
});

export const { setUserId, setEMAIL, setIs_adm, setShowFormReg } = loginSlice.actions;

export const selectUserId = (state) => state.login.user_id;
export const selectEmail = (state) => state.login.email;
export const selectIs_adm = (state) => state.login.is_adm;
export const selectShowFormReg = (state) => state.login.showFormReg;

export default loginSlice.reducer;
