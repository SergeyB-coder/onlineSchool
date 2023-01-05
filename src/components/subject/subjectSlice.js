import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchSubjects } from './subjectAPI';
// import { fetchCount } from './counterAPI';

const initialState = {
  current_subject_id: 0,
  list_subjects: [],
};

export const subjectsAsync = createAsyncThunk(
  'subject/fetchSubjects',
  async () => {
    const response = await fetchSubjects();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    subjects: (state, action) => {
      state.list_subjects = action.payload
    },
    set_current_subject_id: (state, action) => {
      state.current_subject_id = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(subjectsAsync.pending, (state) => {
      })
      .addCase(subjectsAsync.fulfilled, (state, action) => {
        state.list_subjects = action.payload;
      });
  },
});

export const { subjects, set_current_subject_id } = subjectSlice.actions;

export const selectListSubjects = (state) => state.subject.list_subjects;
export const selectCurrentSubjectId = (state) => state.subject.current_subject_id;

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default subjectSlice.reducer;
