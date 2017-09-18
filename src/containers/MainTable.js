import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal } from '../actions/index';
import TableRow from '../components/TableRow';
import _ from 'lodash';
import { TransitionMotion, spring } from 'react-motion';




class MainTable extends Component {



	willLeave() {
    return {
			height: spring(0),
			opacity: spring(0, {
				stiffness:120,
				damping:17})
		};
	}
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

			return (
				<TransitionMotion
					styles={ _.map(animalsFiltered,(animal, key) => {
						return {
							data: animal,
							key: key,
							style: {
								height: 150,
								opacity: 1
							}
						}
					})}
					willLeave={this.willLeave}>
						{styles =>
							<ul >
								{styles.map(config => {
									return <TableRow	animal={config.data} id={config.key} key={config.key} style={{...config.style}}/> 
								})}
							</ul>
						}
					</TransitionMotion>				

			)
		// })
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