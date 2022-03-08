import {ConnectedRouter} from "connected-react-router";
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {API} from "./config";
import {Provider} from "react-redux";
import store from "./store"
import {history} from "./store";


console.log(API)
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes/>
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('root')
)
;

