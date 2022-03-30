import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RequisicaoHTTP from './http/requisicaohttp'

import AppRoutes from './AppRoutes'


ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);


