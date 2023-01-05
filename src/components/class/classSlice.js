import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current_class_id: 0,
  list_classes: [],
};


export const classSlice = createSlice({
  name: 'class',
  initialState,
  reducers: {
    classes: (state, action) => {
      state.list_classes = action.payload
    },
    clearClasses: (state) => {
      state.list_classes = []
    },
    set_current_class_id: (state, action) => {
      state.current_class_id = action.payload
    },
  },
});

export const { classes, clearClasses, set_current_class_id } = classSlice.actions;

export const selectListClasses = (state) => state.class.list_classes;
export const selectCurrenClassId = (state) => state.class.current_class_id;



export default classSlice.reducer;
