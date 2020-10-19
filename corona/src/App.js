import React from 'react';
import './App.css';
import Graph from './Components/Graph'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
/*import Graph2 from './Components/Graph2';
import Graph3 from './Components/Graph3';*/
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Algeria">Algeria</Link>
            </li>
            <li>
              <Link to="/Japan">Japan</Link>
            </li>
            <li>
              <Link to="/France">France</Link>
            </li>
          </ul>
        </nav>

        <Switch>
        <Route path="/Home">
            <Home />
        </Route>

        <Route path="/:country" children={<Graph />} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}export default App;
