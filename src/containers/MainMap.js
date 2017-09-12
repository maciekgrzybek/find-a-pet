import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Marker from '../components/Marker';
import { fetchAnimals, setMapBounds } from '../actions/index';
import _ from 'lodash';
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_LANG } from '../constants/googleMaps';

function createMapOptions(maps) {
	return {
		scrollwheel:false
	}
}


class MainMap extends Component {

	constructor(){
		super();

		this._calculateMapBounds = this._calculateMapBounds.bind(this);
	}
	static defaultProps = {
		center: {
			lat: 53,
			lng: 23
		},
		zoom: 13
	};

	componentDidMount() {
		this.props.fetchAnimals(this.props.searchCity, this.props.mapBounds);
	}
	
	// kurwa(bounds) {

	// 	const mapBounds =  [];

	// 	console.log(mapBounds)
	// 	var bermudaTriangle = new window.google.maps.Polygon({paths: mapBounds});
	// 	var curPosition = new window.google.maps.LatLng(12.9629277, 77.7178972);
	// 	if(window.google.maps.geometry) {
	// 		console.log(window.google.maps.geometry.poly.containsLocation(curPosition, bermudaTriangle))
	// 	}		
	// }
	_calculateMapBounds(bounds) {
		const mapBounds =  _.values(bounds);
		this.props.setMapBounds(mapBounds);
	}

	_renderAnimalMarkers() {
		return _.map(this.props.animals, (animal, key) => {
			return (
				<Marker
					key={ key }
					id = { key }
					url={ animal.url }
					lat={ animal.location.lat }
					lng={ animal.location.lng }/>
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
	 					 <GoogleMapReact
							bootstrapURLKeys={{
								key: GOOGLE_MAPS_API_KEY,
								language: GOOGLE_MAPS_LANG
							}}								
	 	 					defaultCenter={this.props.center}
	 	 					defaultZoom={this.props.zoom}
	 	 					options={createMapOptions}
							onChange={({bounds}) => {
								this._calculateMapBounds(bounds);
							}} >
	 	 					{ this._renderAnimalMarkers() }
	 	 				</GoogleMapReact>
		);
	}
}

function mapStateToProps(state) {
	return {
		animals: state.animals,
		mapBounds: state.mapBounds,
		searchCity: state.search
	}
}

export default connect(mapStateToProps, { fetchAnimals, setMapBounds })(MainMap);