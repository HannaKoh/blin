import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewMessageText, updateNewPostText } from './redux/state';
import { addDialog } from './redux/state';
import { BrowserRouter, Route } from 'react-router-dom';


 let rerenderEntirTree = (state) =>{
  ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
      <App state={state} addPost= {addPost} addDialog= {addDialog} 
      updateNewPostText={updateNewPostText} 
      updateNewMessageText={updateNewMessageText}/>
    </React.StrictMode>,
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntirTree (state);

subscribe (rerenderEntirTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
