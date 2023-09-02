import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Supondo que você tenha um componente principal chamado 'App'
import './index.css'; // Importe os estilos CSS aqui, se aplicável

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
