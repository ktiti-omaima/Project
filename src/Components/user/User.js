import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import  Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Users = () => {
    return (
<div>
    <h2></h2>
<Form>
<Row className="mb-3">
    <Form.Group as={Col} controlId="formGridNom">
      <Form.Label>Nom</Form.Label>
      <Form.Control type="text" placeholder="Enter votre nom" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPrenom">
      <Form.Label>Prénom</Form.Label>
      <Form.Control type="text" placeholder="Entrer votre prénom" />
    </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>
  <Row>
  <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>
  <Form.Group as={Col}className="mb-3" controlId="formGridNumerotéléphone">
    <Form.Label>Numero Téléphone</Form.Label>
    <Form.Control placeholder="Entrer votre numéro" />
  </Form.Group>
  </Row>
  <Button variant="primary" type="submit">
    Inscription
  </Button>
  <Link className="App-link" to="/">Connexion</Link>
</Form>
</div>
    )
};

export default Users; 