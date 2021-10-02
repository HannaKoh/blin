import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewMessageText, updateNewPostText } from './redux/state';
import { addDialog } from './redux/state';
import { BrowserRouter, Route } from 'react-router-dom';


export let rerenderEntirTree = (state) =>{
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

