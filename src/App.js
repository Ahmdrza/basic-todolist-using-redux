import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import combineReducers from './combinedReducers';
import ToDoComponent from './ToDoList/ToDoComponent';

const store = createStore(combineReducers);
const App = () => (
  <Provider store={store}>
    <ToDoComponent />
  </Provider>
);

export default App;
