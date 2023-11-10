import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import createReduxStore from './service/store';

const root = createRoot(document.getElementById('root'));
const store = createReduxStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
