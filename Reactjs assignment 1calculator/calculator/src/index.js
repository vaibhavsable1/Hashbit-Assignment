import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './Component/Calculator';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator/>
  </React.StrictMode>
);

reportWebVitals();
