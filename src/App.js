import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Activities from './components/pages/Activities';
import About from './components/pages/About';
import Resources from './components/pages/Resources';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
        <Route path={process.env.PUBLIC_URL + '/activities'} component={Activities} />
        <Route path={process.env.PUBLIC_URL + '/resources'} component={Resources} />
        <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
