import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
// import logo from './logo.svg';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Apply from "./pages/Apply"
import Info from "./pages/Info"
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

const styles = theme => ({
  root: {
    margin: "0 auto",
    flexGrow: "1"
  }
})
class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <Router>
        <div className={classes.root}>
          <Navbar />
        </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/apply" component={Apply} />
          </Switch>
          <Footer />
      </Router>
    )
  }
}

export default withStyles(styles)(App);
