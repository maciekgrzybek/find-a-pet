import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Marker from '../components/Marker';
import { fetchAnimals } from '../actions/index';
import _ from 'lodash';
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_LANG } from '../constants/googleMaps';

function createMapOptions(maps) {
	return {
		scrollwheel:false
	}
}


class MainMap extends Component {


	static defaultProps = {
		center: {
			lat: 53,
			lng: 23
		},
		zoom: 6
	};

	componentDidMount() {
		this.props.fetchAnimals();
	}
	
	kurwa() {
		var triangleCoords = [
			{lat: 25.774, lng: -80.19},
			{lat: 18.466, lng: -66.118},
			{lat: 32.321, lng: -64.757}
		];

		var bermudaTriangle = new window.google.maps.Polygon({paths: triangleCoords});
		var curPosition = new window.google.maps.LatLng(12.9629277, 77.7178972);
		setTimeout(function(){
			console.log(window.google.maps.geometry.poly.containsLocation(curPosition, bermudaTriangle))
		},150)
		
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
								this.kurwa()
							}} >
	 	 					{ this._renderAnimalMarkers() }
	 	 				</GoogleMapReact>
		);
	}
}

function mapStateToProps(state) {
	return {
		animals: state.animals
	}
}

export default connect(mapStateToProps, { fetchAnimals })(MainMap);