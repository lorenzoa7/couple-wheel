import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css'
import i18n from './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);