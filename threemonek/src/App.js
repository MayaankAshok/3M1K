<<<<<<< HEAD
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Signup from "./components/Signup";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
=======
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './components/home';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, {useState} from 'react';

>>>>>>> 6d3dc17d2b65f7be952905382046a845c54a56f7

function App() {
  
  // set userName to be used in chat
  const [user, setUser] = React.useState(''); 

  const toggleName = (name) => {
    setUser(name);
  }

  console.log(user);
  return (
    <>
      <Router>
        <div className="App">
<<<<<<< HEAD
          <Navbar2 />
          <header className="App-header">
            <Switch>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/"></Route>
            </Switch>
          </header>
=======
        <Navbar/>
        <header className="App-header">
        <img src="bg.jpg" className="bg-image" alt="bg" />
        {/* <Login name={user} toggleName={toggleName}/> */}
        {/* <Signup name="/signup"/> */}
        <Switch>          
          <Route path="/signup">
  
            <Signup name={user}/>
            
          </Route>
          <Route path="/login">
            <Login name={setUser} toggleName={toggleName}/>
          </Route>
          <Route path="/chat">

                <div id="container2">
                  <Sidebar name={user}/>
                  <Chat/>
                </div>

          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/">

          </Route>
        </Switch>
        </header>
>>>>>>> 6d3dc17d2b65f7be952905382046a845c54a56f7
        </div>
      </Router>
    </>
  );
}

export default App;
