import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

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
