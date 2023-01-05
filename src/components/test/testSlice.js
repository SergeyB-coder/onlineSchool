import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list_questions: [],
};


export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    questions: (state, action) => {
      state.list_questions = action.payload
    },
  },
});

export const { questions } = testSlice.actions;

export const selectListQuestions = (state) => state.test.list_questions;



export default testSlice.reducer;
