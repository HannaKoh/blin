import React from 'react';
import logo from './fav.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route } from 'react-router-dom';




const App = (props) => {



  return (
  
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.profilePage}/>
        <div className='app-wrapper-content'>
          <Route path='/Profile'
            render={() => <Profile
              profilePage={props.state.profilePage} addPost={props.addPost}
               updateNewPostText={props.updateNewPostText} />} />
          <Route path='/Dialogs'
            render={() => <Dialogs
              state={props.state.dialogsPage} addDialog= {props.addDialog}/>} />
          <Route path='/News' render={() => <News />} />
          <Route path='/Music' render={() => <Music />} />
          <Route path='/Settings' render={() => <Settings />} />
        </div>
      </div>
    
  );
}

export default App;
