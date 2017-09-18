import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import Contact from '../components/Contact';
import ThankYou from '../components/ThankYou';
import Add from './Add';
import NotFound from '../components/NotFound'
import { Route } from 'react-router-dom';
import { mapStyles, pageTransition } from '../constants/pageTransition'
import  { AnimatedSwitch } from 'react-router-transition/lib/react-router-transition';



class App extends Component {

  render() {
    return (
      <div className="app">
					<Navigation />
					<AnimatedSwitch
					atEnter={pageTransition.atEnter}
					atLeave={pageTransition.atLeave}
					atActive={pageTransition.atActive}
					mapStyles={mapStyles}
					className="switch-wrapper">
							<Route path="/dzieki" component={ ThankYou }/>
							<Route path="/kontakt" component={ Contact }/>
							<Route path="/dodaj" component={ Add }/>
							<Route exact path="/" component={ Home } />
							<Route component={ NotFound } /> 
					</AnimatedSwitch>
      </div>
    );
  }
}




export default (App);
