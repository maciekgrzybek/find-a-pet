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

			
			let arr = JSON.parse(animal.tabobr);
			//Change byte array to Base64String
			function bytArrayToBase64( arr ) {
					var binary = '';
					var bytes = new Uint8Array( arr );
					var len = bytes.byteLength;
					for (var i = 0; i < len; i++) {
							binary += String.fromCharCode( bytes[ i ] );
					}
					return window.btoa( binary );
			}
			return (
				<img className="img-responsive"src={`data:image/png;base64,${bytArrayToBase64(arr)}`} />
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
