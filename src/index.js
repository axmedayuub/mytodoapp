import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./Style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
