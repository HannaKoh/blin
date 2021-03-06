import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

 let rerenderEntirTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
      <App state={state} dispatch= {store.dispatch.bind(store)} store={store}/>
    </React.StrictMode>,
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderEntirTree (store.getState());

store.subscribe (()=>{
    let state = store.getState();
    rerenderEntirTree(state); }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
