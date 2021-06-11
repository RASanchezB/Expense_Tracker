import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route, Redirect, Link} from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div>
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
