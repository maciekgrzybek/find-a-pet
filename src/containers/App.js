import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Add from './Add';
import NotFound from '../components/NotFound'
import { Route, Switch } from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <div className="app">
					<Navigation />
					<Switch>
						<Route path="/kontakt" component={ Contact }/>
						<Route path="/dodaj" component={ Add }/>
						<Route exact path="/" component={ Home } />
						<Route component={ NotFound } />
					</Switch>
      </div>
    );
  }
}




export default (App);
