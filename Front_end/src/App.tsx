import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect, Link} from "react-router-dom";

import Home from "./Views/Home";
import Navbar from "./Components/NavBar";
import Tracker from "./Views/Tracker";

function App() {
  
  
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <br/>
      <br/>
      <div id="Header">
        <BrowserRouter>
          <div>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/Expenses" component={Tracker} exact/>
                <Route path="/Warnings" component={Home} exact/>
              </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
