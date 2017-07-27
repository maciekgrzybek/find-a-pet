import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAnimals } from '../actions/index';
import _ from 'lodash'

class App extends Component {

	componentDidMount() {
		this.props.fetchAnimals();
		
	}

	renderAnimals() {
		return _.map(this.props.animals, animal => {
			return (
				<h2>{ animal.data }</h2>
			)
		})
	}

  render() {
		if(!this.props.animals) {
			return (
				<div>Loading...</div>
			)
		}
		console.log(this.props.animals)
    return (
      <div className="app">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<h1>yo yo</h1>
						</div>
						<div className="col-md-8">
							{ this.renderAnimals() }
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
