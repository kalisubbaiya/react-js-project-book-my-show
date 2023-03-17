import React from 'react';
import { createRoot } from 'react-dom/client';
import Routing from './Routing/Routing';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Provider } from 'react-redux';
import { Store } from './app/store';
import Payment from './Payment/Payment';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={Store}>
    <Routing />
    {/* <Popup /> */}
    {/* <Payment /> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
