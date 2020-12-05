import React,{ Component } from "react";
import "./App.css";
import "./style.css";
import Filter from "./Component/Movie/Filter";
import AddMovie from "../src/Component/Movie/AddMovie";
import { Link, Route ,Switch } from 'react-router-dom';
import { Navbar,Container,Form, FormControl,Button} from 'react-bootstrap';
import MovieCardExample from "./Component/MovieCard/MovieCard";
import ShowMovie from '../src/Component/Movie/ShowMovie'

const App = () => {
  return (
    <>
<Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Navbar.Brand href="/Filter">All-Movies</Navbar.Brand>
    <Navbar.Brand href="/AddMovie" >Add-Movie</Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
</Container>


      <Switch>
      <Route path="/Filter" exact component={Filter} />
        <Route path="/AddMovie" component={AddMovie} />
        <Route path="/Filter/:id" exact component={ShowMovie} />
      </Switch>





</>
  );
}

export default App;






 