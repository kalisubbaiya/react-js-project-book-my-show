import React from 'react';
import { createRoot } from 'react-dom/client';
import Routing from './Routing/Routing';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Provider } from 'react-redux';
import { Store } from './app/store';
import Popup from './Popup';
import Booking from './Booking';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={Store}>
    <Routing />
    {/* <Popup /> */}
    {/* { <Booking /> } */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
