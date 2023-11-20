import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Footer from './component/Footer/Footer';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <Provider store={store}>
  <BrowserRouter>
    <App />
      
  </BrowserRouter>
  // </Provider>
);

