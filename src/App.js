import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Team from './components/pages/Team';
import Stadium from './components/pages/Stadium';
import Tickets from './components/pages/Tickets';
import Londonred from './components/pages/Londonred';
import Empty from './components/pages/Empty';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/team' component={Team} />
          <Route path='/stadium' component={Stadium} />
          <Route path='/tickets' component={Tickets} />
          <Route path='/londonred' component={Londonred} />
          <Route path='/empty' component={Empty} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
