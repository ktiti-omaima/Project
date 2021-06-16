import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Adverts from "./Components/adverts/Adverts";
import Users from "./Components/user/User";
import Categories from "./Components/categories/Categories";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import  FormControl from 'react-bootstrap/FormControl';
import  Button from 'react-bootstrap/Button';

const App = () =>  {
  return (
    <Container>
<Router>
 <div>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link><Link className="App-link" to="/">Home</Link></Nav.Link>
    <Nav.Link><Link className="App-link" to="/adverts">Adverts</Link></Nav.Link>
    <NavDropdown title="Categories" id="basic-nav-dropdown">
        <NavDropdown.Item href="/category-1">Categories 1</NavDropdown.Item>
        <NavDropdown.Item href="/category-1">Categories 2</NavDropdown.Item>
        <NavDropdown.Item href="/category-1">Categories 3</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link><Link className="App-link" to="/user">Connexion</Link></Nav.Link>
    
    </Nav>
  </Navbar.Collapse>
  <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-info">Search</Button>
    </Form>
</Navbar>
 </div>     
      <Switch>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/user">
          <Users />
        </Route>
        <Route exact path="/adverts">
          <Adverts />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
</Router>

</Container>
  );

}

export default App;
