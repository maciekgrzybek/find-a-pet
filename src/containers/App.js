import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import Contact from '../components/Contact';
import ThankYou from '../components/ThankYou';
import Add from './Add';
import AddType from '../components/AddType';
import SelectedAnimal from '../components/SelectedAnimal';
import NotFound from '../components/NotFound'
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="app">
				<Navigation />
					<Switch>
						<Route path="/rodzaj-ogloszenia" component={ AddType }/>
						<Route path="/dzieki" component={ ThankYou }/>
						<Route path="/kontakt" component={ Contact }/>
						<Route path="/dodaj/:type" component={ Add }/>
						<Route path="/zwierzak/:type/:id" component={ SelectedAnimal }/>
						<Route exact path="/" component={ Home } />
						<Route component={ NotFound } />
					</Switch>
      </div>
    );
	}
	
};

export default App;
