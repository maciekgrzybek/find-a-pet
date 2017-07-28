import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound'
import { Route, Switch } from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <div className="app">
					<Navigation />
				<div className="container">
					<Switch>
						<Route path="/kontakt" component={ Contact }/>
						<Route exact path="/" component={ Home } />
					</Switch>
				</div>
      </div>
    );
  }
}




export default (App);
