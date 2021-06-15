import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Adverts from "./Components/adverts/Adverts";
import Users from "./Components/user/User";
import Categories from "./Components/categories/Categories";
import './App.css';

const App = () =>  {
  return (
    <Router>
   
    <div >
    <Link className="App-link" to="/">Home</Link>
    <Link className="App-link" to="/adverts">Adverts</Link>
    <Link className="App-link" to="/categories">Categories</Link>
    <Link className="App-link" to="/user">Users</Link>
    </div>
        <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/user">
          <Users />
        </Route>
        <Route path="/adverts">
          <Adverts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
