import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current_topic_id: 0,
  current_topic_name: '',
  list_topics: [],
};


export const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    topics: (state, action) => {
      state.list_topics = action.payload
    },
    clearTopics: (state) => {
      state.list_topics = []
    },
    set_current_topic_id: (state, action) => {
      state.current_topic_id = action.payload
    },
    set_current_topic_name: (state, action) => {
      state.current_topic_name = action.payload
    }
  },
});

export const { topics, clearTopics, set_current_topic_id, set_current_topic_name } = topicSlice.actions;

export const selectListTopics = (state) => state.topic.list_topics;
export const selectCurrentTopicId = (state) => state.topic.current_topic_id;
export const selectCurrentTopicName = (state) => state.topic.current_topic_name;



export default topicSlice.reducer;
