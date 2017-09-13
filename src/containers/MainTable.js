import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal } from '../actions/index';
import _ from 'lodash';



class MainTable extends Component {

	// _renderAnimalTable() {
	// 	return _.map(this.props.animals, (animal, key) => {
	// 		return (
	// 			//TODO: Make table component
	// 			<li
	// 				onMouseEnter={() => this.props.hoverAnimal(key)}
	// 				onMouseLeave={() => this.props.hoverAnimal(null)}>
	// 				{key}</li>
	// 		)
	// 	})
	// }
	_renderAnimalTable() {
		
				// Filter animals - by map bounds
				const animalsFiltered = _.pickBy(this.props.animals,(value,key) => {
					const { lat, lng } = value.location;
					const mapArea = new window.google.maps.Polygon({paths: this.props.mapBounds});
					const curPosition = new window.google.maps.LatLng(lat, lng);
					if(window.google.maps.geometry) {
						return (window.google.maps.geometry.poly.containsLocation(curPosition, mapArea))
					}	
				})
				//------
				return _.map(animalsFiltered, (animal, key) => {
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
		hover: state.hover,
		mapBounds: state.mapBounds
	}
}

export default connect(mapStateToProps, { hoverAnimal })(MainTable);