import React from 'react';
// import logo from './logo.svg';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Apply from "./pages/Apply"
import Info from "./pages/Info"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/apply" component={Apply} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
