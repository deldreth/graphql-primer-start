import React, { Fragment, Suspense } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './styles/normalize.css';
import './styles/skeleton.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Suspense fallback={<Fragment>Loading...</Fragment>}>
    <App />
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
