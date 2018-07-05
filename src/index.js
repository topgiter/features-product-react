import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/index.css';

ReactDOM.render(
  <App
    classNames={{
      '85458': 'green',
      '42773': 'pink',
      '42774': 'blue',
      '42775': 'orange',
      '42777': 'yellow',
      '85457': 'red'
    }}
  />,
  document.getElementById('root')
);
registerServiceWorker();
