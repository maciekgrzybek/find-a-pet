import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal } from '../actions/index';
import _ from 'lodash';



class MainTable extends Component {

	_renderAnimalTable() {
		return _.map(this.props.animals, (animal, key) => {
			return (
				//TODO: Make table component
				<li
					onMouseEnter={() => this.props.hoverAnimal(key)}
					onMouseLeave={() => this.props.hoverAnimal(null)}>
					{key}</li>
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
		animals: state.animals,
		hover: state.hover
	}
}

export default connect(mapStateToProps, { hoverAnimal })(MainTable);