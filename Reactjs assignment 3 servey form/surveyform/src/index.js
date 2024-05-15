import React from 'react';
import ReactDOM from 'react-dom/client';
import SurveyForm from './Components/SurveyForm';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SurveyForm/>
  </React.StrictMode>
);

reportWebVitals();
