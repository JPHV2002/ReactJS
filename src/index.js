//Somente importação
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css';
import { Home } from './templates/Home';

//Renderizar (JSX)
//metodo render dentro do ReactDOM
ReactDOM.render(
  <React.StrictMode>
    <Home /> 
  </React.StrictMode>,
  document.getElementById('root') //public/index.html
);