import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import Contact from '../components/Contact';
import ThankYou from '../components/ThankYou';
import Add from './Add';
import NotFound from '../components/NotFound'
import { Route, Switch } from 'react-router-dom';
import  { AnimatedSwitch, spring } from 'react-router-transition/lib/react-router-transition';


function mapStyles(styles) {
  return {
    transform: `translateX(${styles.translate}%)`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 100,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, uptranslated state
  atEnter: {

    translate: -100,
  },
  // leave in a transparent, downtranslated state
  atLeave: {

    translate: bounce(100),
  },
  // and rest at an opaque, normally-translated state
  atActive: {

    translate: bounce(0),
  },
};
class App extends Component {

  render() {
    return (
      <div className="app">
					<Navigation />
					<AnimatedSwitch
					atEnter={bounceTransition.atEnter}
					atLeave={bounceTransition.atLeave}
					atActive={bounceTransition.atActive}
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
