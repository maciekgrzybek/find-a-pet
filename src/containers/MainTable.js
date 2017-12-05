import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal } from '../actions/index';
import TableRow from '../components/TableRow';
import _ from 'lodash';
import FlipMove from 'react-flip-move';




class MainTable extends Component {



	_renderAnimalTable() {
		let animalsFiltered;
		// Filter animals - by map bounds
		// if(this.props.mapBounds) {
		// 	 animalsFiltered = _.pickBy(this.props.animals,(value,key) => {
		// 		const { lat, lng } = value.location;
		// 		const mapArea = new window.google.maps.Polygon({paths: this.props.mapBounds});
		// 		const curPosition = new window.google.maps.LatLng(lat, lng);
		// 		return (window.google.maps.geometry.poly.containsLocation(curPosition, mapArea))
		// 	});
		// } else {
		// 		animalsFiltered = this.props.animals;
		// }
		if(this.props.mapBounds) {
			 animalsFiltered = _.pickBy(this.props.animals,(value,key) => {
				const { lat, lng } = value.location;
				const mapArea = new window.google.maps.Polygon({paths: this.props.mapBounds});
				const curPosition = new window.google.maps.LatLng(lat, lng);
				return (window.google.maps.geometry.poly.containsLocation(curPosition, mapArea) && value.addType === this.props.filter)
			});
		} else {
				animalsFiltered = this.props.animals;
		}
		return (
			<FlipMove    
				duration={750} easing="ease-out" appearAnimation="accordionVertical" enterAnimation="accordionVertical" leaveAnimation="accordionVertical">
			{
				_.map(animalsFiltered,(animal,key) => {
					return (
						<TableRow animal={animal} key={key} id={key} />
					)})
			}
			</FlipMove>		
		)
	}  
	
	render() {
		if(!this.props.animals) {
			return (
				<div>
					loding
			</div>
			)
		}
		return (
				<div className="main-table">
					{ this._renderAnimalTable() }
				</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		animals: state.animals,
		hover: state.hover,
		mapBounds: state.mapBounds,
		filter: state.animalListFilter
	}
}

export default connect(mapStateToProps, { hoverAnimal })(MainTable);