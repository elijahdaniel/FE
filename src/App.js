import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import ArticlePage from './components/ArticlePage';
import { Route,} from 'react-router-dom';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {
  return (
   
    <div className="App">

    <Header />
    
    <Route exact path="/" component={LandingPage} />

    <Route path="/ArticlePage" component={ArticlePage} />

    <Route path="/UserProfile" component={UserProfile} />

    {/* add routing for profile here*/}
       
    </div>
  );
}

export default App;
