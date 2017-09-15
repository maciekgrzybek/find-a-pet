import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal } from '../actions/index';
import TableRow from '../components/TableRow';
import _ from 'lodash';
import { TransitionMotion,Motion, spring } from 'react-motion';




class MainTable extends Component {

	constructor() {
		super();

		this.state = {
			mapLoad: false
		}
	}
	willLeave() {
    // triggered when c's gone. Keeping c until its width/height reach 0.
    return {height: spring(0, {stiffness: 100, damping: 100})};
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
		// return _.map(animalsFiltered, (animal, key) => {


			return (
				<TransitionMotion
					willLeave={this.willLeave}
					styles={ _.map(animalsFiltered,(animal, key) => {
						return {
							data: animal,
							key: key,
							style: {
								height: 300
							}
						}
					})}
					>
						{interpolatedStyles =>
							// first render: a, b, c. Second: still a, b, c! Only last one's a, b.
							<ul className="list-group">
								{interpolatedStyles.map(config => {
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
					<Motion defaultStyle={{x:0}} style={{x: spring(10, {stiffness:50, damping:1})}}>
						{({x}) => <div style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
								background: `rgba(${x},255,${x},1)`
              }}>{x}</div> }
					</Motion>
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