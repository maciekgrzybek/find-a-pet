import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAnimals } from '../actions/index';
import _ from 'lodash';

function createMapOptions(maps) {
	return {
		scrollwheel:false
	}
}


class MainTable extends Component {


	componentDidMount() {
		this.props.fetchAnimals();
	}

	_renderAnimalTable() {
		return _.map(this.props.animals, (animal, key) => {
			return (
				//TODO: Make table component
				<li
					onMouseEnter={() => console.log(key)}>
					{ animal.url }<br/>{key}</li>
			)
		})
	} 
	
	render() {
		if(!this.props.animals) {
			return (
				<div>Loading...</div>
			)
		}
		return (
				<div>
					{ this._renderAnimalTable() }
				</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		animals: state.animals
	}
}

export default connect(mapStateToProps, { fetchAnimals })(MainTable);