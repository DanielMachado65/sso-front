import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/app.scss';
import './stylesheets/bootstrap.min.css';
import './stylesheets/index.scss';
import './stylesheets/edit.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);