import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RequisicaoHTTP from './http/requisicaohttp'


ReactDOM.render(
  <React.StrictMode>
    <RequisicaoHTTP />
  </React.StrictMode>,
  document.getElementById('root')
);


