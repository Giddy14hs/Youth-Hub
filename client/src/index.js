import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware, compose} from "redux"
import {thunk} from "redux-thunk"
import reducers from "./reducers"
import './index.css';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container)


root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);

