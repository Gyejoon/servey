import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from '~App';
import RootStore from '~stores/RootStore';
import './index.css';

const rootStore = new RootStore();

ReactDOM.render(
  <Provider {...rootStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
