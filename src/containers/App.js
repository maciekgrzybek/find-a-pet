import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAnimals } from '../actions/index';

class App extends Component {

	componentDidMount() {
		this.props.fetchAnimals();
	}

  render() {
    return (
      <div className="app">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<h1>Znajdz zwierzaka</h1>
						</div>
						<div className="col-md-8">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nihil animi fugiat ut rem explicabo in saepe, porro placeat ab.</p>
						</div>
					</div>
				</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		animals: state.animals
	}
}




export default connect(mapStateToProps,{ fetchAnimals })(App);
