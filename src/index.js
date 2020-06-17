import React from 'react'
import ReactDOM from 'react-dom'
import './resources/bootstrap.min.css'
import 'rsuite/dist/styles/rsuite-default.css'
import './resources/index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import App from './routes'
import * as serviceWorker from './serviceWorker'
import {Provider} from 'react-redux'
import store from './reducers'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
