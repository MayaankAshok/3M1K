import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './components/home';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Navbar2 from './components/Navbar2';
import Landing from './components/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, {useState} from 'react';


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
        <Navbar/>
        <header className="App-header">
        <img src="bg.jpg" className="bg-image" alt="bg" />
        {/* <Login name={user} toggleName={toggleName}/> */}
        {/* <Signup name="/signup"/> */}
=======
        
>>>>>>> 888777456623c641d4e706e5dbf84cef14052e9f
        <Switch>          
          <Route path="/signup">
          <Navbar/>
            <header className="App-header">
            <img src="bg.jpg" className="bg-image" alt="bg" />
            <Signup name={user}/>
            </header>
            
          </Route>
          <Route path="/login">
          <Navbar/>
            <header className="App-header">
            <img src="bg.jpg" className="bg-image" alt="bg" />
            <Login name={setUser} toggleName={toggleName}/>
            </header>
          </Route>
          <Route path="/chat">
              <Navbar2/>
              <header className="App-header">
                <div id="container2">
                  <Sidebar name={user}/>
                  <Chat/>
                </div>
              </header>

          </Route>
          <Route path="/home">
            <Navbar2/>
            <header className="App-header">
            
            <Home/>
            </header>
          </Route>
          <Route path="/">
            <Navbar/>
            <header className="App-header">
            <img src="bg.jpg" className="bg-image" alt="bg" />
            <Landing/>
            </header>

          </Route>
        </Switch>
<<<<<<< HEAD
        </header>
=======
>>>>>>> 888777456623c641d4e706e5dbf84cef14052e9f
        </div>
      </Router>
    </>
  );
}

export default App;
