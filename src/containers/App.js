import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import Contact from '../components/Contact';
import ThankYou from '../components/ThankYou';
import Add from './Add';
import AddType from '../components/AddType';
import SelectedAnimal from '../components/SelectedAnimal';
import NotFound from '../components/NotFound'
import { Route } from 'react-router-dom';
import { mapStyles, pageTransition } from '../constants/pageTransition'
import  { AnimatedSwitch } from 'react-router-transition/lib/react-router-transition';



// if (process.env.NODE_ENV !== 'production') {
// 	const { reactopt } = require('reactopt');
// 	reactopt(React);
// }

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
						<Route path="/rodzaj-ogloszenia" component={ AddType }/>
						<Route path="/dzieki" component={ ThankYou }/>
						<Route path="/kontakt" component={ Contact }/>
						<Route path="/dodaj/:type" component={ Add }/>
						<Route path="/zwierzak/:type/:id" component={ SelectedAnimal }/>
						<Route exact path="/" component={ Home } />
						<Route component={ NotFound } />
				</AnimatedSwitch>
				
      </div>
    );
  }
}




export default App;
