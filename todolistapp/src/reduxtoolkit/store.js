
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../reduxtoolkit/TaskSlice'

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
});

export default store;
