import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal } from '../actions/index';
import TableRow from '../components/TableRow';
import _ from 'lodash';
import { Motion, spring } from 'react-motion';




class MainTable extends Component {

	constructor() {
		super();

		this.state = {
			mapLoad: false
		}
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
		return _.map(animalsFiltered, (animal, key) => {
			return (
				
				<TableRow
					animal={animal}
					id={key}
					key={key}/>
			)
		})
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

					<ul className="list-group">
							{ this._renderAnimalTable() }
					</ul>
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