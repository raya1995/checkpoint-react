import React from "react";
import "./App.css";
import { Row, Col, Form, FormGroup, Button } from "shards-react";

function App() {
  return (
   <>
      <Form>
        <Col md="6" className="form-group">
          <label htmlFor="feFirstname">firstName</label>
          <input
            type="firstname"
            className="form-control"
            placeholder="Enter your firstName"
            required
          />
        </Col>

        <Col md="6" className="form-group">
          <label htmlFor="fePassword">LastName</label>
          <input
            type="lastname"
            className="form-control"
            placeholder="Enter your LastName "
            required
          />
        </Col>

        <Col md="6" className="form-group">
          <label htmlFor="feInputAddress">Address</label>
          <input
            type="address"
            className="form-control"
            placeholder="Enter your Address "
            required
          />
        
      </Col>
      <Col md="6" className="form-group">
          <label htmlFor="feInputAddress2">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your Email "
            required
          />
          </Col>
      


        
        
<center>
        <Button type="submit">Submit</Button></center>
      </Form>
   </>
  );
}

export default App;
