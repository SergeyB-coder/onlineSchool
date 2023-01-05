import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import subjectReducer from '../components/subject/subjectSlice';
import loginReducer from '../components/login/loginSlice';
import topicReducer from '../components/topic/topicSlice';
import classReducer from '../components/class/classSlice';
import testReducer from '../components/test/testSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    subject: subjectReducer,
    topic: topicReducer,
    login: loginReducer,
    class: classReducer,
    test: testReducer,
  },
});
