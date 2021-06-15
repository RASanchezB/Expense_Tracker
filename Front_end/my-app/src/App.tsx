import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route, Redirect, Link} from "react-router-dom";
import axios from 'axios';

import Home from "./Views/Home";
import Navbar from "./Components/NavBar";

function App() {
  
  
  return (
    <div>
      <Navbar/>
      <div id="Header">
        <BrowserRouter>
          <div>
              <Switch>
                <Route path="/" component={Home} exact/>
              </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
