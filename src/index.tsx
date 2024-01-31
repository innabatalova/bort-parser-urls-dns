import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/normalize.scss'
import './scss/index.scss';
import App from './components/App/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
