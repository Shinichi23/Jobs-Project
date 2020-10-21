import React from 'react';
import './App.css';
import Home from './Components/Home'
import Books from './Components/Books'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import More from './Components/More'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        {/* <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Books">Search</Link>
            </li>
          </ul>
        </nav> */}

<Navbar
  bg='dark'
  className="justify-content-end"
  activeKey="/home"
>
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/Books">Search</Nav.Link>
  </Nav.Item>
</Navbar>

        <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path='/Books/:id' children={<More />}>

        </Route>
        <Route path="/Books">
          <Books/>
        </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
