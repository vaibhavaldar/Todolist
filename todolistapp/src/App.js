// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './reduxtoolkit/store';
import TaskInput from './reduxtoolkit/TaskInput';
import TaskList from './reduxtoolkit/TaskList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>To-Do List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
