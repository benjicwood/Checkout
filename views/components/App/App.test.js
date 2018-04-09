/* eslint-env mocha */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import allReducers from '../../reducers/index.js';

const store = createStore(allReducers);

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></ Provider>, div);
  });
});