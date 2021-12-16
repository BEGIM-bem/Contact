import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'
// import {createStore, applyMiddleware } from 'redux';
// import thunk from  'redux-thunk'
import reduser from './store/reduser'


import App from './App';
const store = createStore(reduser)

ReactDOM.render(
  <Provider store ={store}>
 
     <Router>
    <App />
    </Router>

  </Provider>,
  document.getElementById('root')
);

