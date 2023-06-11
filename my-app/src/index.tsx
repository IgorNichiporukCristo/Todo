import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './components/Redux/store';
import Main from './components/Main/Main';
import './normalize.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>    
      <Main />
  </Provider>
);
